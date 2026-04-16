import type { LocaleText, SceneProgram, StatRow } from "../types";

export const statRows: StatRow[] = [
  {
    label: { zh: "信号稳定度", en: "Signal Stability" },
    value: "82%",
    tone: "strong",
  },
  {
    label: { zh: "舒适度", en: "Comfort" },
    value: "76%",
    tone: "warm",
  },
  {
    label: { zh: "光照平衡", en: "Light Balance" },
    value: "63%",
    tone: "cool",
  },
  {
    label: { zh: "观赏值", en: "Beauty" },
    value: "91%",
    tone: "accent",
  },
];

export const scenePrograms: SceneProgram[] = [
  {
    name: { zh: "微泡流", en: "Micro Bubbles" },
    detail: { zh: "低频背景粒子已开启", en: "Ambient particles enabled" },
    active: true,
  },
  {
    name: { zh: "体积高光", en: "Volumetric Sheen" },
    detail: { zh: "鱼体边缘有湿润高光", en: "Wet rim highlights on fish bodies" },
    active: true,
  },
  {
    name: { zh: "镜面反射", en: "Specular Pass" },
    detail: { zh: "玻璃罩前层反射增强", en: "Front glass reflections boosted" },
  },
  {
    name: { zh: "异色辉光", en: "Iridescent Bloom" },
    detail: { zh: "稀有鱼可获得虹彩边辉", en: "Rare fish gain angle-tinted glow" },
  },
];

export const missions: LocaleText[] = [
  {
    zh: "再放置 1 个实验室标签装饰，解锁幽路鬼鳐",
    en: "Place 1 more lab-tag decoration to unlock Ghost Circuit Ray",
  },
  {
    zh: "让信号稳定度保持在 80 以上 10 分钟，触发霓虹孵化",
    en: "Keep signal above 80 for 10 minutes to trigger neon hatch",
  },
  {
    zh: "将铬光斗鱼提升到二阶段成长，解锁图鉴条目",
    en: "Raise Chrome Betta to phase-02 growth for the codex entry",
  },
];

export const waterParticleIds = Array.from({ length: 10 }, (_, index) => index + 1);
