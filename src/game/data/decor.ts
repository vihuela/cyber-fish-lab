import type { DecorGroup, DecorOption, DecorSelection, DecorSlot } from "../types";

export const decorOptions: DecorOption[] = [
  {
    id: "flora-spectral",
    slot: "flora",
    name: { zh: "幽谱藻树", en: "Spectral Algae Tree" },
    kind: { zh: "生化植物", en: "Bio Flora" },
    effect: { zh: "+14 观赏值", en: "+14 beauty" },
    accent: "cyan",
    tankClass: "flora-spectral",
  },
  {
    id: "flora-crimson",
    slot: "flora",
    name: { zh: "绯红水枝", en: "Crimson Kelp Branch" },
    kind: { zh: "深海植物", en: "Deep Flora" },
    effect: { zh: "+11 氛围", en: "+11 ambience" },
    accent: "amber",
    tankClass: "flora-crimson",
  },
  {
    id: "flora-ring",
    slot: "flora",
    name: { zh: "悬浮藤环", en: "Floating Vine Ring" },
    kind: { zh: "实验藤体", en: "Lab Vine" },
    effect: { zh: "+8 舒适度", en: "+8 comfort" },
    accent: "green",
    tankClass: "flora-ring",
  },
  {
    id: "lamp-observation",
    slot: "lamp",
    name: { zh: "观景灯", en: "Observation Lamp" },
    kind: { zh: "照明装置", en: "Light Module" },
    effect: { zh: "+8 信号", en: "+8 signal" },
    accent: "amber",
    tankClass: "lamp-observation",
  },
  {
    id: "lamp-crescent",
    slot: "lamp",
    name: { zh: "月弧冷灯", en: "Crescent Cold Lamp" },
    kind: { zh: "冷色投射", en: "Cold Beam" },
    effect: { zh: "+9 边缘高光", en: "+9 rim sheen" },
    accent: "cyan",
    tankClass: "lamp-crescent",
  },
  {
    id: "lamp-amber",
    slot: "lamp",
    name: { zh: "琥珀顶灯", en: "Amber Canopy Lamp" },
    kind: { zh: "暖光罩灯", en: "Warm Lamp" },
    effect: { zh: "+7 暖域氛围", en: "+7 warm glow" },
    accent: "amber",
    tankClass: "lamp-amber",
  },
  {
    id: "purifier-pipes",
    slot: "purifier",
    name: { zh: "积水管簇", en: "Flooded Pipe Cluster" },
    kind: { zh: "工业净化", en: "Industrial Filter" },
    effect: { zh: "+6 舒适度", en: "+6 comfort" },
    accent: "steel",
    tankClass: "purifier-pipes",
  },
  {
    id: "purifier-column",
    slot: "purifier",
    name: { zh: "净化柱芯", en: "Purifier Core Column" },
    kind: { zh: "垂直净化器", en: "Core Column" },
    effect: { zh: "+10 清澈度", en: "+10 clarity" },
    accent: "green",
    tankClass: "purifier-column",
  },
  {
    id: "purifier-disc",
    slot: "purifier",
    name: { zh: "涡流净化盘", en: "Vortex Purifier Disc" },
    kind: { zh: "盘式净化器", en: "Disc Filter" },
    effect: { zh: "+8 微粒稳定", en: "+8 particle control" },
    accent: "cyan",
    tankClass: "purifier-disc",
  },
];

export const decorGroups: DecorGroup[] = [
  { slot: "flora", title: { zh: "植物", en: "Flora" } },
  { slot: "lamp", title: { zh: "观景灯", en: "Lamp" } },
  { slot: "purifier", title: { zh: "净化器", en: "Purifier" } },
];

export const defaultDecorSelection: DecorSelection = {
  flora: "flora-spectral",
  lamp: "lamp-observation",
  purifier: "purifier-pipes",
};

export function getDecorOptionsBySlot(slot: DecorSlot) {
  return decorOptions.filter((option) => option.slot === slot);
}

export function getSelectedDecorItems(selection: DecorSelection) {
  return decorGroups.map(({ slot }) =>
    decorOptions.find((option) => option.id === selection[slot])!,
  );
}
