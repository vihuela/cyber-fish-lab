import { copy } from "../game/data/ui";
import type { Translate } from "../game/types";

type TankSummaryProps = {
  t: Translate;
};

export function TankSummary({ t }: TankSummaryProps) {
  return (
    <div className="tank-summary">
      <div className="tank-summary-copy">
        <p className="eyebrow">{t(copy.stageEyebrow)}</p>
        <h2>{t(copy.stageTitle)}</h2>
        <p>{t(copy.stageDescription)}</p>
      </div>
      <div className="tank-summary-actions">
        <div className="signal-pill">{t(copy.signalPill)}</div>
        <div className="feed-hint">{t(copy.feedHint)}</div>
      </div>
    </div>
  );
}
