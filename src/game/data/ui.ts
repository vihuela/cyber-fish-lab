import type { LocaleOption, LocaleText } from "../types";

export const copy = {
  appTitle: { zh: "赛博鱼缸实验室", en: "Cyber Fish Lab" },
  brandEyebrow: { zh: "湿霓虹收藏养成", en: "Wet Neon Collection Sim" },
  tankLabel: { zh: "鱼缸", en: "Tank" },
  tankName: { zh: "工业观测缸 03", en: "Industrial Observation 03" },
  creditsLabel: { zh: "积分", en: "Credits" },
  liveEdit: { zh: "直接点击左侧换装", en: "Click left to swap live" },
  localeLabel: { zh: "语言", en: "Language" },
  leftDockEyebrow: { zh: "装饰仓", en: "Decor Bay" },
  leftDockTitle: { zh: "左侧直接改装", en: "Edit directly from the left" },
  leftDockDescription: {
    zh: "不需要切到编辑模式。点一下植物、观景灯或净化器，主缸会立刻换成对应造型。",
    en: "No separate edit mode needed. Tap a plant, lamp, or purifier and the main tank updates instantly.",
  },
  rightDockEyebrow: { zh: "场景控制", en: "Scene Control" },
  rightDockTitle: { zh: "右侧看状态与特效", en: "Monitor stats and FX on the right" },
  rightDockDescription: {
    zh: "这里用来挂接当前参数、粒子程序和已装配件，想专注看鱼时可以直接收起来。",
    en: "Use this side for live stats, particle programs, and mounted parts. Collapse it when you want an uninterrupted tank view.",
  },
  hideShort: { zh: "收起", en: "Hide" },
  showShort: { zh: "展开", en: "Show" },
  stageEyebrow: { zh: "主缸预览", en: "Main Tank Preview" },
  stageTitle: { zh: "放大主缸，让鱼成为主角", en: "A larger tank puts the fish front and center" },
  stageDescription: {
    zh: "这版把鱼缸本体扩大了，两边是可以隐藏的菜单。鱼会更自然地巡游，而且可以直接在主缸里左键投喂。",
    en: "The main tank is larger, the side menus can collapse, fish now cruise more naturally, and left click drops food directly into the tank.",
  },
  feedHint: { zh: "左键投喂", en: "Left Click Feed" },
  signalPill: { zh: "信号稳定 / 082", en: "Signal stable / 082" },
  signalMast: { zh: "信号桅杆", en: "Signal mast" },
  occupancyLabel: { zh: "生物占用", en: "Occupancy" },
  occupancyValue: { zh: "04 / 08 条鱼", en: "04 / 08 fish" },
  slotsLabel: { zh: "装饰槽位", en: "Decor Slots" },
  slotsValue: { zh: "07 / 10 启用", en: "07 / 10 active" },
  mutationLabel: { zh: "异变窗口", en: "Mutation Window" },
  mutationValue: { zh: "18 分钟后关闭", en: "18m remaining" },
  sheenLabel: { zh: "高光层", en: "Highlight Layer" },
  sheenValue: { zh: "已启用", en: "Enabled" },
  currentSelection: { zh: "当前选中", en: "Current Selection" },
  swapReady: { zh: "可立即切换", en: "Swap Ready" },
  statsTitle: { zh: "参数面板", en: "Tank Stats" },
  programsTitle: { zh: "特效程序", en: "FX Programs" },
  loadoutTitle: { zh: "已装配件", en: "Mounted Items" },
  missionsTitle: { zh: "当前任务", en: "Current Missions" },
  stateLive: { zh: "在线", en: "Live" },
  stateStandby: { zh: "待命", en: "Standby" },
} satisfies Record<string, LocaleText>;

export const localeOptions: LocaleOption[] = [
  { value: "zh", label: "中文" },
  { value: "en", label: "EN" },
];

export const storageKeys = {
  locale: "cyber-fish-lab.locale",
  leftDock: "cyber-fish-lab.left-dock",
  rightDock: "cyber-fish-lab.right-dock",
} as const;
