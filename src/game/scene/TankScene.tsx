import type { PointerEventHandler, RefObject } from "react";
import { fishSpecs, initialFishMotion } from "../data/fish";
import { waterParticleIds } from "../data/scene";
import type { DecorOption, FeedPellet, FishMotion, Translate } from "../types";
import { TankDecorLayer } from "../entities/decor/TankDecorLayer";
import { FishEntity } from "../entities/fish/FishEntity";

type TankSceneProps = {
  tankRef: RefObject<HTMLDivElement | null>;
  onFeed: PointerEventHandler<HTMLDivElement>;
  fishMotion: FishMotion[];
  feedPellets: FeedPellet[];
  selectedDecorItems: DecorOption[];
  t: Translate;
};

export function TankScene({
  tankRef,
  onFeed,
  fishMotion,
  feedPellets,
  selectedDecorItems,
  t,
}: TankSceneProps) {
  return (
    <div className="tank-glass" ref={tankRef} onPointerDown={onFeed}>
      <div className="tank-gloss" />
      <div className="tank-grid" />
      <div className="scanline scanline-one" />
      <div className="scanline scanline-two" />
      <div className="light-column light-column-left" />
      <div className="light-column light-column-right" />

      {feedPellets.map((pellet) => (
        <div
          key={pellet.id}
          className="feed-pellet"
          style={{
            left: `${pellet.x * 100}%`,
            top: `${pellet.y * 100}%`,
          }}
        />
      ))}

      {waterParticleIds.map((id) => (
        <div className={`water-particle wp-${id}`} key={id} />
      ))}

      <div className="bubble bubble-a" />
      <div className="bubble bubble-b" />
      <div className="bubble bubble-c" />

      <TankDecorLayer selectedDecorItems={selectedDecorItems} t={t} />

      {fishSpecs.map((fish, index) => (
        <FishEntity
          key={fish.id}
          fish={fish}
          motion={fishMotion[index] ?? initialFishMotion[index]}
          t={t}
        />
      ))}
    </div>
  );
}
