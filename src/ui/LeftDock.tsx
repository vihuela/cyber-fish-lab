import { copy } from "../game/data/ui";
import {
  decorGroups,
  getDecorOptionsBySlot,
} from "../game/data/decor";
import type { DecorSelection, DecorSlot, Translate } from "../game/types";

type LeftDockProps = {
  isOpen: boolean;
  onToggle: () => void;
  selectedDecor: DecorSelection;
  onSelect: (slot: DecorSlot, id: string) => void;
  t: Translate;
};

export function LeftDock({
  isOpen,
  onToggle,
  selectedDecor,
  onSelect,
  t,
}: LeftDockProps) {
  const decorGroupsWithOptions = decorGroups.map((group) => ({
    group,
    options: getDecorOptionsBySlot(group.slot),
  }));

  return (
    <aside className={`dock ${isOpen ? "open" : "collapsed"}`}>
      <div className="dock-header">
        {isOpen ? (
          <div className="dock-header-copy">
            <p className="eyebrow">{t(copy.leftDockEyebrow)}</p>
            <h2>{t(copy.leftDockTitle)}</h2>
            <p>{t(copy.leftDockDescription)}</p>
          </div>
        ) : (
          <div className="dock-mini-label">{t(copy.leftDockEyebrow)}</div>
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
          {decorGroupsWithOptions.map(({ group, options }) => (
            <section className="dock-section" key={group.slot}>
              <div className="section-head">
                <p className="eyebrow">{t(copy.leftDockEyebrow)}</p>
                <div className="section-title-row">
                  <h3>{t(group.title)}</h3>
                  <span className="section-count">
                    {String(options.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="catalog-grid">
                {options.map((item) => {
                  const active = selectedDecor[group.slot] === item.id;

                  return (
                    <button
                      type="button"
                      className={`catalog-card ${item.accent} ${active ? "active" : ""}`}
                      key={item.id}
                      onClick={() => onSelect(group.slot, item.id)}
                    >
                      <div className="catalog-card-top">
                        <span>{t(item.kind)}</span>
                        <i className="catalog-card-dot" aria-hidden />
                      </div>
                      <strong>{t(item.name)}</strong>
                      <small>{t(item.effect)}</small>
                      <div className="catalog-card-bottom">
                        <em>{active ? t(copy.currentSelection) : t(copy.swapReady)}</em>
                        <div className={`catalog-preview ${item.accent}`} aria-hidden />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </aside>
  );
}
