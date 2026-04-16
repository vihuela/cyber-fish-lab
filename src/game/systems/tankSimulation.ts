import type { FeedPellet, FishMotion, FishSpec } from "../types";
import { clamp, normalizeAngle, turnToward } from "../utils/math";

type StepTankSimulationInput = {
  fishStates: FishMotion[];
  pellets: FeedPellet[];
  fishSpecs: FishSpec[];
  dt: number;
  timeSeconds: number;
};

export function stepTankSimulation({
  fishStates,
  pellets,
  fishSpecs,
  dt,
  timeSeconds,
}: StepTankSimulationInput) {
  const consumedPellets = new Set<number>();

  const nextPellets = pellets
    .map((pellet) => ({
      ...pellet,
      x: clamp(
        pellet.x + Math.sin(timeSeconds * 2.2 + pellet.id) * 0.0025 + pellet.vx * dt,
        0.06,
        0.94,
      ),
      y: pellet.y + pellet.vy * dt,
      ttl: pellet.ttl - dt,
    }))
    .filter((pellet) => pellet.ttl > 0 && pellet.y < 0.9);

  const nextFishStates = fishStates.map((fishState, index) => {
    const next = { ...fishState };
    const variant = fishSpecs[index]?.variant ?? "eel";
    const marginX = variant === "jelly" ? 0.12 : 0.09;
    const marginY = variant === "jelly" ? 0.18 : 0.11;

    next.wanderTimer -= dt;

    const nearestPellet = nextPellets
      .filter((pellet) => !consumedPellets.has(pellet.id))
      .map((pellet) => {
        const dx = (pellet.x - next.x) * 1.18;
        const dy = pellet.y - next.y;
        return { pellet, distance: Math.hypot(dx, dy) };
      })
      .sort((left, right) => left.distance - right.distance)[0];

    if (nearestPellet) {
      next.targetHeading = Math.atan2(
        nearestPellet.pellet.y - next.y,
        (nearestPellet.pellet.x - next.x) * 1.18,
      );
    } else if (next.wanderTimer <= 0) {
      next.targetHeading = normalizeAngle(
        next.heading +
          (Math.random() - 0.5) * 1.2 +
          Math.sin(timeSeconds * 0.5 + next.phase) * 0.22,
      );
      next.wanderTimer = 1.4 + Math.random() * 2.6;
    }

    if (next.x < marginX) {
      next.targetHeading = normalizeAngle(Math.random() * 0.45 - 0.22);
    } else if (next.x > 1 - marginX) {
      next.targetHeading = normalizeAngle(Math.PI + (Math.random() * 0.45 - 0.22));
    }

    if (next.y < marginY) {
      next.targetHeading = normalizeAngle(next.targetHeading + 0.24);
    } else if (next.y > 0.8) {
      next.targetHeading = normalizeAngle(next.targetHeading - 0.24);
    }

    const pursuitBoost = nearestPellet
      ? clamp(0.11 - nearestPellet.distance, 0, 0.05)
      : 0;
    const targetSpeed =
      (variant === "jelly" ? 0.034 : 0.046) +
      pursuitBoost +
      Math.sin(timeSeconds * next.sway + next.phase) * 0.003;

    next.speed += (targetSpeed - next.speed) * Math.min(dt * 2.4, 1);
    next.heading = turnToward(
      next.heading,
      next.targetHeading,
      (nearestPellet ? 2.9 : 1.25) * dt,
    );

    const verticalDrift =
      Math.sin(timeSeconds * next.sway + next.phase) *
      (variant === "jelly" ? 0.014 : 0.008);
    const vx = Math.cos(next.heading) * next.speed;
    const vy = Math.sin(next.heading) * next.speed * 0.62 + verticalDrift;

    next.x = clamp(next.x + vx * dt * 6.2, marginX, 1 - marginX);
    next.y = clamp(next.y + vy * dt * 6.2, marginY, 0.84);
    next.lean = clamp(
      vy * 180 + normalizeAngle(next.targetHeading - next.heading) * 24,
      -12,
      12,
    );

    if (nearestPellet && nearestPellet.distance < 0.052) {
      consumedPellets.add(nearestPellet.pellet.id);
    }

    return next;
  });

  return {
    fishStates: nextFishStates,
    pellets: nextPellets.filter((pellet) => !consumedPellets.has(pellet.id)),
  };
}

export function createFeedPellets(baseX: number, baseY: number, startId: number) {
  let nextId = startId;

  const pellets: FeedPellet[] = Array.from({ length: 3 }, (_, index) => {
    nextId += 1;

    return {
      id: nextId,
      x: clamp(
        baseX + (index - 1) * 0.022 + (Math.random() - 0.5) * 0.012,
        0.08,
        0.92,
      ),
      y: clamp(baseY - index * 0.014, 0.06, 0.78),
      vx: (Math.random() - 0.5) * 0.02,
      vy: 0.032 + Math.random() * 0.018,
      ttl: 10 + Math.random() * 3,
    };
  });

  return { pellets, nextId };
}
