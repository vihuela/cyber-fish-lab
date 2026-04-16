import type { PointerEventHandler, RefObject } from "react";
import { fishSpecs, initialFishMotion } from "../data/fish";
import { waterParticleIds } from "../data/scene";
import { copy } from "../data/ui";
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
  const fishOccupancy = `${String(fishSpecs.length).padStart(2, "0")} / 08`;
  const mountedItems = `${String(selectedDecorItems.length).padStart(2, "0")} / 03`;

  return (
    <div className="tank-glass" ref={tankRef} onPointerDown={onFeed}>
      <div className="tank-frame" />
      <div className="tank-gloss" />
      <div className="tank-grid" />
      <div className="tank-waterline" />
      <div className="scanline scanline-one" />
      <div className="scanline scanline-two" />
      <div className="light-column light-column-left" />
      <div className="light-column light-column-right" />
      <div className="tank-corner-tag tank-corner-tag-left">{t(copy.tankName)}</div>
      <div className="tank-corner-tag tank-corner-tag-right">{t(copy.signalPill)}</div>

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

      <div className="tank-console">
        <div className="tank-console-item">
          <span>{t(copy.occupancyLabel)}</span>
          <strong>{fishOccupancy}</strong>
        </div>
        <div className="tank-console-item">
          <span>{t(copy.slotsLabel)}</span>
          <strong>{mountedItems}</strong>
        </div>
        <div className="tank-console-item">
          <span>{t(copy.mutationLabel)}</span>
          <strong>{t(copy.mutationValue)}</strong>
        </div>
        <div className="tank-console-item">
          <span>{t(copy.sheenLabel)}</span>
          <strong>{t(copy.sheenValue)}</strong>
        </div>
      </div>
    </div>
  );
}
