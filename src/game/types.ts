export type Locale = "zh" | "en";

export type LocaleText = Record<Locale, string>;

export type Translate = (value: LocaleText) => string;

export type FishVariant = "eel" | "goldfish" | "jelly" | "betta";

export type FishTone = "cyan" | "amber" | "mint" | "green";

export type FishSpec = {
  id: string;
  name: LocaleText;
  className: string;
  variant: FishVariant;
  tone: FishTone;
  glow: LocaleText;
  depth: LocaleText;
  tag: LocaleText;
};

export type FishMotion = {
  id: string;
  x: number;
  y: number;
  heading: number;
  targetHeading: number;
  speed: number;
  size: number;
  wanderTimer: number;
  phase: number;
  sway: number;
  lean: number;
};

export type FeedPellet = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  ttl: number;
};

export type FishSize = {
  width: number;
  height: number;
};

export type DecorSlot = "flora" | "lamp" | "purifier";

export type DecorOption = {
  id: string;
  slot: DecorSlot;
  name: LocaleText;
  kind: LocaleText;
  effect: LocaleText;
  accent: string;
  tankClass: string;
};

export type DecorGroup = {
  slot: DecorSlot;
  title: LocaleText;
};

export type DecorSelection = Record<DecorSlot, string>;

export type StatRow = {
  label: LocaleText;
  value: string;
  tone: string;
};

export type SceneProgram = {
  name: LocaleText;
  detail: LocaleText;
  active?: boolean;
};

export type LocaleOption = {
  value: Locale;
  label: string;
};
