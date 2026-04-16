import { missions, scenePrograms, statRows } from "../game/data/scene";
import { copy } from "../game/data/ui";
import type { DecorOption, Translate } from "../game/types";

type RightDockProps = {
  isOpen: boolean;
  onToggle: () => void;
  selectedDecorItems: DecorOption[];
  t: Translate;
};

export function RightDock({
  isOpen,
  onToggle,
  selectedDecorItems,
  t,
}: RightDockProps) {
  return (
    <aside className={`dock ${isOpen ? "open" : "collapsed"}`}>
      <div className="dock-header">
        {isOpen ? (
          <div className="dock-header-copy">
            <p className="eyebrow">{t(copy.rightDockEyebrow)}</p>
            <h2>{t(copy.rightDockTitle)}</h2>
            <p>{t(copy.rightDockDescription)}</p>
          </div>
        ) : (
          <div className="dock-mini-label">{t(copy.rightDockEyebrow)}</div>
        )}

        <button
          type="button"
          className="dock-toggle"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          {isOpen ? t(copy.hideShort) : t(copy.showShort)}
        </button>
      </div>

      {isOpen ? (
        <div className="dock-body">
          <section className="dock-section">
            <div className="section-head">
              <p className="eyebrow">{t(copy.rightDockEyebrow)}</p>
              <h3>{t(copy.statsTitle)}</h3>
            </div>
            <div className="quick-stat-list">
              {statRows.map((stat) => (
                <article className={`quick-stat ${stat.tone}`} key={stat.label.en}>
                  <div className="quick-stat-head">
                    <span>{t(stat.label)}</span>
                    <strong>{stat.value}</strong>
                  </div>
                  <div className="stat-meter" aria-hidden>
                    <div
                      className="stat-meter-fill"
                      style={{ width: `${Number.parseInt(stat.value, 10) || 0}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="dock-section">
            <div className="section-head">
              <p className="eyebrow">{t(copy.rightDockEyebrow)}</p>
              <h3>{t(copy.programsTitle)}</h3>
            </div>
            <div className="program-list">
              {scenePrograms.map((item) => (
                <article
                  className={`program-card ${item.active ? "active" : ""}`}
                  key={item.name.en}
                >
                  <div className="program-card-head">
                    <strong>{t(item.name)}</strong>
                    <span className={`program-state ${item.active ? "active" : "standby"}`}>
                      {item.active ? t(copy.stateLive) : t(copy.stateStandby)}
                    </span>
                  </div>
                  <small>{t(item.detail)}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="dock-section">
            <div className="section-head">
              <p className="eyebrow">{t(copy.rightDockEyebrow)}</p>
              <h3>{t(copy.loadoutTitle)}</h3>
            </div>
            <ul className="loadout-list">
              {selectedDecorItems.map((item) => (
                <li key={item.id}>
                  <span>{t(item.name)}</span>
                  <small>{t(item.effect)}</small>
                </li>
              ))}
            </ul>
          </section>

          <section className="dock-section">
            <div className="section-head">
              <p className="eyebrow">{t(copy.rightDockEyebrow)}</p>
              <h3>{t(copy.missionsTitle)}</h3>
            </div>
            <ul className="mission-list">
              {missions.map((mission, index) => (
                <li key={mission.en}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{t(mission)}</strong>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : null}
    </aside>
  );
}
