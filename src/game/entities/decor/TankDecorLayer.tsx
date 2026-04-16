import { copy } from "../../data/ui";
import type { DecorOption, Translate } from "../../types";

type TankDecorLayerProps = {
  selectedDecorItems: DecorOption[];
  t: Translate;
};

export function TankDecorLayer({ selectedDecorItems, t }: TankDecorLayerProps) {
  const flora = selectedDecorItems.find((item) => item.slot === "flora");
  const lamp = selectedDecorItems.find((item) => item.slot === "lamp");
  const purifier = selectedDecorItems.find((item) => item.slot === "purifier");

  return (
    <>
      <div className="decor tower">
        <span className="decor-label">{t(copy.signalMast)}</span>
      </div>

      {flora ? (
        <div className={`decor coral-tree ${flora.tankClass}`}>
          <span className="decor-label">{t(flora.name)}</span>
        </div>
      ) : null}

      {lamp ? (
        <div className={`decor lamp ${lamp.tankClass}`}>
          <span className="decor-label">{t(lamp.name)}</span>
        </div>
      ) : null}

      {purifier ? (
        <div className={`decor pipes ${purifier.tankClass}`}>
          <span className="decor-label">{t(purifier.name)}</span>
        </div>
      ) : null}
    </>
  );
}
