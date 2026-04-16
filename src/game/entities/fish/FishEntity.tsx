import type { CSSProperties } from "react";
import { fishVariantSize } from "../../data/fish";
import type { FishMotion, FishSpec, Translate } from "../../types";
import { FishArtwork } from "./FishArtwork";

const fishParticleIds = [1, 2, 3, 4];

type FishEntityProps = {
  fish: FishSpec;
  motion: FishMotion;
  t: Translate;
};

export function FishEntity({ fish, motion, t }: FishEntityProps) {
  const facing = Math.cos(motion.heading) >= 0 ? 1 : -1;
  const variantSize = fishVariantSize[fish.variant];

  const style = {
    left: `${motion.x * 100}%`,
    top: `${motion.y * 100}%`,
    width: `${variantSize.width}px`,
    height: `${variantSize.height}px`,
    transform: `translate(-50%, -50%) scale(${motion.size}) scaleX(${facing}) rotate(${motion.lean}deg)`,
  } as CSSProperties;

  return (
    <div className={`${fish.className} tone-${fish.tone}`} style={style}>
      <div className="fish-shadow" />
      <div className="fish-shell">
        <FishArtwork fish={fish} />
        <div className="fish-particles">
          {fishParticleIds.map((id) => (
            <span className={`fish-particle fp-${id}`} key={`${fish.id}-particle-${id}`} />
          ))}
        </div>
      </div>

      <div className="fish-tag">
        <span>{t(fish.tag)}</span>
        <strong>{t(fish.name)}</strong>
        <small>
          {t(fish.glow)} · {t(fish.depth)}
        </small>
      </div>
    </div>
  );
}
