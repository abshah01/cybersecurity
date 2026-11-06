import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{ink:"#070C16",steel:"#0F1A2B",line:"#1E2D45",signal:"#38E1F0",bone:"#E8EEF7",mute:"#93A4BD"},
fontFamily:{display:["var(--f-display)","Impact","sans-serif"],sans:["var(--f-body)","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
