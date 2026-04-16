import { copy, localeOptions } from "../game/data/ui";
import type { Locale, Translate } from "../game/types";

type TopBarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  t: Translate;
};

export function TopBar({ locale, onLocaleChange, t }: TopBarProps) {
  return (
    <header className="topbar">
      <div className="brand-block">
        <p className="eyebrow">{t(copy.brandEyebrow)}</p>
        <h1>{t(copy.appTitle)}</h1>
      </div>

      <div className="topbar-meta">
        <div>
          <span className="meta-label">{t(copy.tankLabel)}</span>
          <strong>{t(copy.tankName)}</strong>
        </div>
        <div>
          <span className="meta-label">{t(copy.creditsLabel)}</span>
          <strong>12,480</strong>
        </div>
        <div className="locale-switch-block">
          <span className="meta-label">{t(copy.localeLabel)}</span>
          <div className="locale-switch" role="group" aria-label={t(copy.localeLabel)}>
            {localeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`locale-button ${locale === option.value ? "active" : ""}`}
                onClick={() => onLocaleChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mode-badge">{t(copy.liveEdit)}</div>
      </div>
    </header>
  );
}
