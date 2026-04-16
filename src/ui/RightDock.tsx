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
                  <span>{t(stat.label)}</span>
                  <strong>{stat.value}</strong>
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
                  <strong>{t(item.name)}</strong>
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
                  {t(item.name)} · {t(item.effect)}
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
              {missions.map((mission) => (
                <li key={mission.en}>{t(mission)}</li>
              ))}
            </ul>
          </section>
        </div>
      ) : null}
    </aside>
  );
}
