import type { SVGProps, JSX } from "react";
import type { GlyphId } from "@/data/catalog";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    ...props,
  };
}

export function GlyphPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M8.2 3.4h7.6c1.2 0 2.2 1 2.2 2.2v12.8c0 1.2-1 2.2-2.2 2.2H8.2c-1.2 0-2.2-1-2.2-2.2V5.6c0-1.2 1-2.2 2.2-2.2Zm3.8 14.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"
      />
    </svg>
  );
}

export function GlyphChat(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M5 5.2h9.5A3.3 3.3 0 0 1 17.8 8.5v4.2A3.3 3.3 0 0 1 14.5 16H11l-3.4 2.6c-.6.45-1.5 0-1.5-.7V16h-.6A3.3 3.3 0 0 1 2.2 12.7V8.5A3.3 3.3 0 0 1 5.5 5.2H5Zm10.2 12.1h.7v1.6c0 .7.9 1.15 1.5.7L20 18h.5a2.8 2.8 0 0 0 2.8-2.8V12a2.8 2.8 0 0 0-2-2.68V12.7A4.5 4.5 0 0 1 16.8 17.2h-1.6Z"
      />
    </svg>
  );
}

export function GlyphCamera(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M9.1 5.2 10 4h4l.9 1.2h2.6A2.5 2.5 0 0 1 20 7.7v9.6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.3V7.7a2.5 2.5 0 0 1 2.5-2.5h2.6ZM12 9.2a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 1.7a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Z"
      />
    </svg>
  );
}

export function GlyphGallery(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v13A2.5 2.5 0 0 1 16.5 21h-9A2.5 2.5 0 0 1 5 18.5v-13Zm3.2 2.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM7 17.8l3.3-4.2a1 1 0 0 1 1.6 0L13.2 16l1.3-1.5a1 1 0 0 1 1.5.05L18 17.4v1.1c0 .2-.2.5-.5.5h-9.9c-.4 0-.6-.3-.6-.5v-.7Z"
      />
    </svg>
  );
}

export function GlyphMaps(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M12 3.2c3.6 0 6.4 2.7 6.4 6.3 0 4.2-5 9.5-6.1 10.6-.2.2-.4.2-.6 0C10.6 19 5.6 13.7 5.6 9.5c0-3.6 2.8-6.3 6.4-6.3Zm0 4.1a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6Z"
      />
    </svg>
  );
}

export function GlyphMusic(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M9 5.2v9.05a3.1 3.1 0 1 0 1.8 2.85V8.4l8.2-1.5v7.55a3.1 3.1 0 1 0 1.8 2.85V4.2L9 5.2Z"
      />
    </svg>
  );
}

export function GlyphWeather(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M8.6 10.2a4.4 4.4 0 0 1 8.4 1.3 3.7 3.7 0 1 1 .5 7.3H8.2a4.4 4.4 0 0 1-.4-8.7 4.6 4.6 0 0 1 .8.1Z"
      />
    </svg>
  );
}

export function GlyphNotes(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M7 3.4h7.2L19.6 9v11.1A1.5 1.5 0 0 1 18.1 21.6H7A1.5 1.5 0 0 1 5.4 20.1V4.9A1.5 1.5 0 0 1 7 3.4Zm7.4 1.4v4.4h4.3L14.4 4.8ZM8.4 12.2h7.2v1.4H8.4v-1.4Zm0 3.2h7.2v1.4H8.4V15.4Z"
      />
    </svg>
  );
}

export function GlyphCalendar(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M8 3.2a.9.9 0 0 1 .9.9V5h6.2V4.1a.9.9 0 1 1 1.8 0V5H18.4A2.2 2.2 0 0 1 20.6 7.2v11.2A2.2 2.2 0 0 1 18.4 20.6H5.6A2.2 2.2 0 0 1 3.4 18.4V7.2A2.2 2.2 0 0 1 5.6 5h.9V4.1A.9.9 0 0 1 8 3.2ZM5.2 9.2v9.2c0 .2.2.4.4.4h13c.2 0 .4-.2.4-.4V9.2H5.2Zm3.2 2.4h2.2v2.2H8.4v-2.2Zm4.2 0h2.2v2.2h-2.2v-2.2Z"
      />
    </svg>
  );
}

export function GlyphClock(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M12 3.2a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Zm.7 4.2h-1.6v5.1l3.6 2.2.8-1.3-2.8-1.7V7.4Z"
      />
    </svg>
  );
}

export function GlyphFiles(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M4.4 6.4A2.2 2.2 0 0 1 6.6 4.2h4.1l1.8 1.8h6.9A2.2 2.2 0 0 1 21.6 8.2v9.6a2.2 2.2 0 0 1-2.2 2.2H6.6A2.2 2.2 0 0 1 4.4 17.8V6.4Z"
      />
    </svg>
  );
}

export function GlyphMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M4.4 6.2h15.2A2.2 2.2 0 0 1 21.8 8.4v9.2a2.2 2.2 0 0 1-2.2 2.2H4.4a2.2 2.2 0 0 1-2.2-2.2V8.4A2.2 2.2 0 0 1 4.4 6.2Zm.4 1.8 7.2 5.2 7.2-5.2H4.8Z"
      />
    </svg>
  );
}

export function GlyphBrowser(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M12 3.2a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Zm0 1.7a7.1 7.1 0 0 0-6.9 5.6h13.8A7.1 7.1 0 0 0 12 4.9Zm-7.1 7.3A7.1 7.1 0 0 0 12 19.1a7.1 7.1 0 0 0 7.1-6.9H4.9Z"
      />
    </svg>
  );
}

export function GlyphHealth(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M12 20.4 4.7 13a4.8 4.8 0 0 1 6.8-6.8L12 7.7l.5-1.5a4.8 4.8 0 0 1 6.8 6.8L12 20.4Z"
      />
    </svg>
  );
}

export function GlyphWallet(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M4.6 6.2h14.8A2.2 2.2 0 0 1 21.6 8.4v9.4a2.2 2.2 0 0 1-2.2 2.2H4.6A2.2 2.2 0 0 1 2.4 17.8V8.4A2.2 2.2 0 0 1 4.6 6.2Zm11.6 6.1a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"
      />
    </svg>
  );
}

export function GlyphSettings(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M10.4 3.4h3.2l.5 2.1a6.8 6.8 0 0 1 1.7 1l2-.9 1.6 2.8-1.5 1.5c.1.5.2 1 .2 1.5s-.1 1-.2 1.5l1.5 1.5-1.6 2.8-2-.9a6.8 6.8 0 0 1-1.7 1l-.5 2.1h-3.2l-.5-2.1a6.8 6.8 0 0 1-1.7-1l-2 .9-1.6-2.8 1.5-1.5A7 7 0 0 1 6.6 12c0-.5.1-1 .2-1.5L5.3 9l1.6-2.8 2 .9a6.8 6.8 0 0 1 1.7-1l.5-2.1ZM12 9.4A2.6 2.6 0 1 0 12 14.6 2.6 2.6 0 0 0 12 9.4Z"
      />
    </svg>
  );
}

export function GlyphCalc(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M7 3.4h10A2.2 2.2 0 0 1 19.2 5.6v12.8A2.2 2.2 0 0 1 17 20.6H7a2.2 2.2 0 0 1-2.2-2.2V5.6A2.2 2.2 0 0 1 7 3.4Zm1.6 2.8v3.2h6.8V6.2H8.6ZM8 12.2h2v2H8v-2Zm3.2 0h2v2h-2v-2Zm3.2 0h2v2h-2v-2ZM8 15.6h2v2H8v-2Zm3.2 0h2v2h-2v-2Zm3.2 0h2v2h-2v-2Z"
      />
    </svg>
  );
}

export function GlyphStore(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M5 6.2 6.4 3.8h11.2L19 6.2h1.2v2.2h-1.1l-.8 11.2A2 2 0 0 1 16.3 21.4H7.7a2 2 0 0 1-2-1.8L4.9 8.4H3.8V6.2H5Zm5.2 4.2v7.2h1.6v-7.2H10.2Zm3.6 0v7.2h1.6v-7.2h-1.6Z"
      />
    </svg>
  );
}

export function GlyphVideo(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M4.6 6.6h10.2A2.2 2.2 0 0 1 17 8.8v6.4a2.2 2.2 0 0 1-2.2 2.2H4.6A2.2 2.2 0 0 1 2.4 15.2V8.8A2.2 2.2 0 0 1 4.6 6.6Zm13 2.3 4.2-2.2c.6-.3 1.4.1 1.4.8v8.9c0 .7-.8 1.1-1.4.8l-4.2-2.2V8.9Z"
      />
    </svg>
  );
}

export function GlyphContacts(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path
        fill="currentColor"
        d="M12 3.6a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2ZM5.2 19.2c.6-3.4 3.4-5.4 6.8-5.4s6.2 2 6.8 5.4c.1.6-.3 1.2-1 1.2H6.2c-.7 0-1.1-.6-1-1.2Z"
      />
    </svg>
  );
}

const MAP: Record<GlyphId, (p: IconProps) => JSX.Element> = {
  phone: GlyphPhone,
  chat: GlyphChat,
  camera: GlyphCamera,
  gallery: GlyphGallery,
  maps: GlyphMaps,
  music: GlyphMusic,
  weather: GlyphWeather,
  notes: GlyphNotes,
  calendar: GlyphCalendar,
  clock: GlyphClock,
  files: GlyphFiles,
  mail: GlyphMail,
  browser: GlyphBrowser,
  health: GlyphHealth,
  wallet: GlyphWallet,
  settings: GlyphSettings,
  calc: GlyphCalc,
  store: GlyphStore,
  video: GlyphVideo,
  contacts: GlyphContacts,
};

export function AppGlyph({
  id,
  className,
}: {
  id: GlyphId;
  className?: string;
}) {
  const Cmp = MAP[id];
  return <Cmp className={className} />;
}
