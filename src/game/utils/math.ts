export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function normalizeAngle(angle: number) {
  let next = angle;

  while (next > Math.PI) {
    next -= Math.PI * 2;
  }

  while (next < -Math.PI) {
    next += Math.PI * 2;
  }

  return next;
}

export function turnToward(current: number, target: number, maxTurn: number) {
  const delta = normalizeAngle(target - current);
  const limited = clamp(delta, -maxTurn, maxTurn);
  return normalizeAngle(current + limited);
}
