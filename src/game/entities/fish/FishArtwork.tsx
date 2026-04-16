import type { FishSpec, FishTone, FishVariant } from "../../types";

const fishPalettes: Record<
  FishTone,
  {
    bodyStart: string;
    bodyMid: string;
    bodyEnd: string;
    fin: string;
    line: string;
    glow: string;
  }
> = {
  cyan: {
    bodyStart: "#bdf8ff",
    bodyMid: "#45d3ff",
    bodyEnd: "#174d87",
    fin: "#7de9ff",
    line: "#e9ffff",
    glow: "rgba(64, 217, 255, 0.65)",
  },
  amber: {
    bodyStart: "#fff2a1",
    bodyMid: "#ffb24d",
    bodyEnd: "#8b3414",
    fin: "#ffd36b",
    line: "#fff8d6",
    glow: "rgba(255, 196, 83, 0.62)",
  },
  mint: {
    bodyStart: "#dffff2",
    bodyMid: "#7ee1d4",
    bodyEnd: "#2a6f83",
    fin: "#b6fff8",
    line: "#f2fff8",
    glow: "rgba(133, 245, 225, 0.6)",
  },
  green: {
    bodyStart: "#d5ffba",
    bodyMid: "#62e984",
    bodyEnd: "#165c4a",
    fin: "#b8ff7c",
    line: "#f2ffe6",
    glow: "rgba(117, 245, 128, 0.58)",
  },
};

export function FishArtwork({ fish }: { fish: FishSpec }) {
  const palette = fishPalettes[fish.tone];
  const gradientId = `${fish.id}-body`;
  const finId = `${fish.id}-fin`;
  const sheenId = `${fish.id}-sheen`;
  const shadowId = `${fish.id}-shadow`;

  if (fish.variant === "jelly") {
    return (
      <svg
        className="fish-svg"
        viewBox="0 0 280 180"
        role="img"
        aria-label={fish.name.en}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.bodyStart} />
            <stop offset="52%" stopColor={palette.bodyMid} />
            <stop offset="100%" stopColor={palette.bodyEnd} />
          </linearGradient>
          <radialGradient id={sheenId} cx="35%" cy="24%" r="62%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.88)" />
            <stop offset="35%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="10"
              floodColor={palette.glow}
              floodOpacity="0.24"
            />
          </filter>
        </defs>
        <g filter={`url(#${shadowId})`}>
          <path
            d="M70 94 C72 42, 106 16, 144 16 C182 16, 216 42, 218 94 C206 112, 186 126, 144 126 C102 126, 82 112, 70 94 Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M85 92 C92 54, 118 34, 144 34 C170 34, 196 54, 203 92"
            fill="none"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M102 118 C97 135, 98 150, 104 168"
            fill="none"
            stroke={palette.fin}
            strokeWidth="7"
            strokeLinecap="round"
            strokeOpacity="0.74"
          />
          <path
            d="M126 122 C122 140, 122 157, 126 176"
            fill="none"
            stroke={palette.fin}
            strokeWidth="6"
            strokeLinecap="round"
            strokeOpacity="0.66"
          />
          <path
            d="M146 122 C146 142, 149 158, 155 176"
            fill="none"
            stroke={palette.fin}
            strokeWidth="6"
            strokeLinecap="round"
            strokeOpacity="0.66"
          />
          <path
            d="M168 118 C170 135, 174 151, 184 168"
            fill="none"
            stroke={palette.fin}
            strokeWidth="7"
            strokeLinecap="round"
            strokeOpacity="0.72"
          />
          <ellipse cx="122" cy="62" rx="56" ry="34" fill={`url(#${sheenId})`} />
        </g>
      </svg>
    );
  }

  const paths: Record<
    Exclude<FishVariant, "jelly">,
    {
      tail: string;
      body: string;
      topFin: string;
      bottomFin: string;
      sheen: string;
      stripe: string;
      eyeX: number;
      eyeY: number;
    }
  > = {
    eel: {
      tail: "M200 74 C236 42 272 46 258 82 C271 116 236 120 198 92 Z",
      body: "M38 82 C52 54 96 28 158 30 C186 31 205 39 218 56 C226 66 226 96 218 106 C205 123 184 130 154 132 C96 135 52 111 38 82 Z",
      topFin: "M118 32 C132 18 158 14 178 24 C168 34 146 42 118 32 Z",
      bottomFin: "M110 126 C138 120 164 123 182 138 C160 145 132 142 110 126 Z",
      sheen: "M64 66 C88 44 140 40 182 52 C154 64 112 72 74 78 C64 78 58 74 64 66 Z",
      stripe: "M64 92 C100 80 144 78 188 86",
      eyeX: 72,
      eyeY: 77,
    },
    goldfish: {
      tail: "M170 76 C214 30 270 36 248 84 C270 136 214 142 170 96 Z",
      body: "M34 82 C40 44 74 22 118 22 C154 22 182 42 186 82 C182 122 152 142 118 142 C74 142 40 120 34 82 Z",
      topFin: "M98 22 C112 4 136 2 150 20 C134 28 116 30 98 22 Z",
      bottomFin: "M94 136 C116 130 138 132 154 148 C134 154 112 152 94 136 Z",
      sheen: "M64 50 C92 30 128 30 154 48 C132 60 100 66 72 66 C64 64 60 58 64 50 Z",
      stripe: "M58 94 C88 82 120 82 156 92",
      eyeX: 72,
      eyeY: 76,
    },
    betta: {
      tail: "M174 78 C230 18 282 32 256 84 C284 138 230 150 168 98 Z",
      body: "M40 82 C50 50 82 26 132 26 C166 26 190 44 198 82 C190 120 166 138 132 138 C82 138 50 114 40 82 Z",
      topFin: "M110 24 C136 -4 174 -6 202 18 C176 32 142 38 110 24 Z",
      bottomFin: "M104 140 C142 132 180 138 214 162 C174 168 136 162 104 140 Z",
      sheen: "M68 56 C92 38 132 34 168 48 C148 62 112 70 76 72 C66 72 62 62 68 56 Z",
      stripe: "M62 92 C92 82 124 84 168 94",
      eyeX: 76,
      eyeY: 74,
    },
  };

  const shape = paths[fish.variant];

  return (
    <svg
      className="fish-svg"
      viewBox="0 0 280 164"
      role="img"
      aria-label={fish.name.en}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="18%" x2="100%" y2="88%">
          <stop offset="0%" stopColor={palette.bodyStart} />
          <stop offset="48%" stopColor={palette.bodyMid} />
          <stop offset="100%" stopColor={palette.bodyEnd} />
        </linearGradient>
        <linearGradient id={finId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={palette.fin} stopOpacity="0.95" />
          <stop offset="100%" stopColor={palette.fin} stopOpacity="0.18" />
        </linearGradient>
        <radialGradient id={sheenId} cx="30%" cy="26%" r="66%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="36%" stopColor="rgba(255,255,255,0.34)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <filter id={shadowId} x="-18%" y="-18%" width="136%" height="136%">
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="9"
            floodColor={palette.glow}
            floodOpacity="0.24"
          />
        </filter>
      </defs>
      <g filter={`url(#${shadowId})`}>
        <path d={shape.tail} fill={`url(#${finId})`} />
        <path d={shape.topFin} fill={`url(#${finId})`} />
        <path d={shape.bottomFin} fill={`url(#${finId})`} />
        <path d={shape.body} fill={`url(#${gradientId})`} />
        <path
          d={shape.stripe}
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path d={shape.sheen} fill={`url(#${sheenId})`} />
        <circle cx={shape.eyeX} cy={shape.eyeY} r="8" fill="rgba(7, 16, 28, 0.78)" />
        <circle cx={shape.eyeX - 2} cy={shape.eyeY - 2} r="2.6" fill={palette.line} />
      </g>
    </svg>
  );
}
