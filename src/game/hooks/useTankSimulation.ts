import { PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import type { FeedPellet, FishMotion, FishSpec } from "../types";
import { createFeedPellets, stepTankSimulation } from "../systems/tankSimulation";
import { clamp } from "../utils/math";

type UseTankSimulationOptions = {
  fishSpecs: FishSpec[];
  initialFishMotion: FishMotion[];
};

export function useTankSimulation({
  fishSpecs,
  initialFishMotion,
}: UseTankSimulationOptions) {
  const tankRef = useRef<HTMLDivElement | null>(null);
  const pelletIdRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  const [fishMotion, setFishMotion] = useState<FishMotion[]>(initialFishMotion);
  const [feedPellets, setFeedPellets] = useState<FeedPellet[]>([]);

  const fishMotionRef = useRef<FishMotion[]>(initialFishMotion);
  const feedPelletsRef = useRef<FeedPellet[]>([]);

  useEffect(() => {
    fishMotionRef.current = fishMotion;
  }, [fishMotion]);

  useEffect(() => {
    feedPelletsRef.current = feedPellets;
  }, [feedPellets]);

  useEffect(() => {
    const updateFrame = (time: number) => {
      const previousTime = lastTimeRef.current || time;
      const dt = Math.min((time - previousTime) / 1000, 0.033);
      const timeSeconds = time / 1000;

      lastTimeRef.current = time;

      const nextState = stepTankSimulation({
        fishStates: fishMotionRef.current,
        pellets: feedPelletsRef.current,
        fishSpecs,
        dt,
        timeSeconds,
      });

      fishMotionRef.current = nextState.fishStates;
      feedPelletsRef.current = nextState.pellets;
      setFishMotion(nextState.fishStates);
      setFeedPellets(nextState.pellets);

      frameRef.current = window.requestAnimationFrame(updateFrame);
    };

    frameRef.current = window.requestAnimationFrame(updateFrame);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [fishSpecs]);

  const handleTankFeed = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || !tankRef.current) {
      return;
    }

    const rect = tankRef.current.getBoundingClientRect();
    const baseX = clamp((event.clientX - rect.left) / rect.width, 0.08, 0.92);
    const baseY = clamp((event.clientY - rect.top) / rect.height, 0.08, 0.72);

    const { pellets, nextId } = createFeedPellets(
      baseX,
      baseY,
      pelletIdRef.current,
    );

    pelletIdRef.current = nextId;

    const nextPellets = [...feedPelletsRef.current, ...pellets].slice(-18);
    feedPelletsRef.current = nextPellets;
    setFeedPellets(nextPellets);
  };

  return {
    tankRef,
    fishMotion,
    feedPellets,
    handleTankFeed,
  };
}
