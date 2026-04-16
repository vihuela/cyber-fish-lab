import { CSSProperties, useEffect, useState } from "react";
import { defaultDecorSelection, getSelectedDecorItems } from "./game/data/decor";
import { fishSpecs, initialFishMotion } from "./game/data/fish";
import { storageKeys } from "./game/data/ui";
import { useTankSimulation } from "./game/hooks/useTankSimulation";
import type { DecorSelection, DecorSlot, Locale, LocaleText } from "./game/types";
import { TankScene } from "./game/scene/TankScene";
import { LeftDock } from "./ui/LeftDock";
import { RightDock } from "./ui/RightDock";
import { TankSummary } from "./ui/TankSummary";
import { TopBar } from "./ui/TopBar";

function readStoredLocale() {
  if (typeof window === "undefined") {
    return "zh" as Locale;
  }

  return window.localStorage.getItem(storageKeys.locale) === "en" ? "en" : "zh";
}

function readStoredDockState(key: string) {
  if (typeof window === "undefined") {
    return true;
  }

  return window.localStorage.getItem(key) !== "0";
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(readStoredLocale);
  const [leftDockOpen, setLeftDockOpen] = useState(() =>
    readStoredDockState(storageKeys.leftDock),
  );
  const [rightDockOpen, setRightDockOpen] = useState(() =>
    readStoredDockState(storageKeys.rightDock),
  );
  const [selectedDecor, setSelectedDecor] =
    useState<DecorSelection>(defaultDecorSelection);

  const { tankRef, fishMotion, feedPellets, handleTankFeed } =
    useTankSimulation({
      fishSpecs,
      initialFishMotion,
    });

  const selectedDecorItems = getSelectedDecorItems(selectedDecor);

  const t = (value: LocaleText) => value[locale];

  useEffect(() => {
    window.localStorage.setItem(storageKeys.locale, locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.title = locale === "zh" ? "赛博鱼缸实验室" : "Cyber Fish Lab";
  }, [locale]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.leftDock, leftDockOpen ? "1" : "0");
  }, [leftDockOpen]);

  useEffect(() => {
    window.localStorage.setItem(storageKeys.rightDock, rightDockOpen ? "1" : "0");
  }, [rightDockOpen]);

  const layoutStyle = {
    "--left-dock-width": leftDockOpen ? "278px" : "68px",
    "--right-dock-width": rightDockOpen ? "278px" : "68px",
  } as CSSProperties;

  const handleDecorSelect = (slot: DecorSlot, id: string) => {
    setSelectedDecor((current) => ({
      ...current,
      [slot]: id,
    }));
  };

  return (
    <div className={`shell locale-${locale}`}>
      <div className="noise" />

      <TopBar locale={locale} onLocaleChange={setLocale} t={t} />

      <main className="play-stage" style={layoutStyle}>
        <LeftDock
          isOpen={leftDockOpen}
          onToggle={() => setLeftDockOpen((value) => !value)}
          selectedDecor={selectedDecor}
          onSelect={handleDecorSelect}
          t={t}
        />

        <section className="tank-stage">
          <TankSummary t={t} />
          <TankScene
            tankRef={tankRef}
            onFeed={handleTankFeed}
            fishMotion={fishMotion}
            feedPellets={feedPellets}
            selectedDecorItems={selectedDecorItems}
            t={t}
          />
        </section>

        <RightDock
          isOpen={rightDockOpen}
          onToggle={() => setRightDockOpen((value) => !value)}
          selectedDecorItems={selectedDecorItems}
          t={t}
        />
      </main>
    </div>
  );
}
