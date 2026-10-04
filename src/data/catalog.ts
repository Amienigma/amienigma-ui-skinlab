export type GlyphId =
  | "phone"
  | "chat"
  | "camera"
  | "gallery"
  | "maps"
  | "music"
  | "weather"
  | "notes"
  | "calendar"
  | "clock"
  | "files"
  | "mail"
  | "browser"
  | "health"
  | "wallet"
  | "settings"
  | "calc"
  | "store"
  | "video"
  | "contacts";

export type SwatchId = GlyphId;

export interface AppDef {
  id: string;
  name: string;
  glyph: GlyphId;
  swatch: SwatchId;
}

export interface FolderDef {
  id: string;
  name: string;
  appIds: string[];
}

export interface NotifDef {
  id: string;
  appId: string;
  title: string;
  body: string;
  time: string;
}

export interface NearbyDef {
  id: string;
  name: string;
  kind: "lamp" | "speaker" | "tablet" | "watch";
}

export const APPS: AppDef[] = [
  { id: "phone", name: "Phone", glyph: "phone", swatch: "phone" },
  { id: "chat", name: "Pulse", glyph: "chat", swatch: "chat" },
  { id: "camera", name: "Lens", glyph: "camera", swatch: "camera" },
  { id: "gallery", name: "Lumen", glyph: "gallery", swatch: "gallery" },
  { id: "maps", name: "Atlas", glyph: "maps", swatch: "maps" },
  { id: "music", name: "Drift", glyph: "music", swatch: "music" },
  { id: "weather", name: "Nimbus", glyph: "weather", swatch: "weather" },
  { id: "notes", name: "Quill", glyph: "notes", swatch: "notes" },
  { id: "calendar", name: "Orbit", glyph: "calendar", swatch: "calendar" },
  { id: "clock", name: "Meridian", glyph: "clock", swatch: "clock" },
  { id: "files", name: "Vault", glyph: "files", swatch: "files" },
  { id: "mail", name: "Parcel", glyph: "mail", swatch: "mail" },
  { id: "browser", name: "Harbor", glyph: "browser", swatch: "browser" },
  { id: "health", name: "Vital", glyph: "health", swatch: "health" },
  { id: "wallet", name: "Ledger", glyph: "wallet", swatch: "wallet" },
  { id: "settings", name: "Settings", glyph: "settings", swatch: "settings" },
  { id: "calc", name: "Sum", glyph: "calc", swatch: "calc" },
  { id: "store", name: "Bazaar", glyph: "store", swatch: "store" },
  { id: "video", name: "Reel", glyph: "video", swatch: "video" },
  { id: "contacts", name: "Folio", glyph: "contacts", swatch: "contacts" },
];

export const APP_BY_ID: Record<string, AppDef> = Object.fromEntries(
  APPS.map((a) => [a.id, a]),
);

export const FOLDERS: FolderDef[] = [
  { id: "daily", name: "Daily", appIds: ["calendar", "notes", "clock", "files"] },
  { id: "create", name: "Create", appIds: ["camera", "gallery", "video"] },
];

export const FOLDER_BY_ID: Record<string, FolderDef> = Object.fromEntries(
  FOLDERS.map((f) => [f.id, f]),
);

export const NOTIFS: NotifDef[] = [
  {
    id: "n1",
    appId: "chat",
    title: "Maya Chen",
    body: "Running ten minutes late — start the review without me.",
    time: "2m",
  },
  {
    id: "n2",
    appId: "weather",
    title: "Nimbus",
    body: "Light rain starting at 4:15. Bring a jacket.",
    time: "18m",
  },
  {
    id: "n3",
    appId: "calendar",
    title: "Design review",
    body: "Tomorrow 9:30 · Studio B · 8 invited",
    time: "1h",
  },
  {
    id: "n4",
    appId: "mail",
    title: "Northline Transit",
    body: "Your weekly pass renews Friday. Tap to manage.",
    time: "3h",
  },
  {
    id: "n5",
    appId: "maps",
    title: "Leave by 5:05",
    body: "Atlas: 22 min to Harbor Atelier with light traffic.",
    time: "4h",
  },
];

export const NEARBY: NearbyDef[] = [
  { id: "lamp", name: "Desk Lamp", kind: "lamp" },
  { id: "speaker", name: "Studio Spk", kind: "speaker" },
  { id: "tablet", name: "Canvas Tab", kind: "tablet" },
  { id: "watch", name: "Pulse Watch", kind: "watch" },
];

export const TRACK = {
  title: "Afterimage",
  artist: "Lumen Drift",
  album: "Glass Harbor",
};

export const RIDE = {
  title: "Northline",
  subtitle: "Driver 6 min away",
  eta: "6 min",
};

export function getApp(id: string): AppDef {
  return APP_BY_ID[id] ?? APPS[0];
}

export const HOME_APPS = {
  harmony: ["weather", "maps", "music", "mail", "browser", "health", "store", "calc"],
  oneui: ["gallery", "maps", "mail", "weather", "calendar", "notes", "health", "video"],
  ios: ["chat", "mail", "maps", "weather", "health", "wallet", "store", "calc"],
} as const;

export const DOCK_APPS = {
  harmony: ["phone", "chat", "browser", "camera"],
  oneui: ["phone", "chat", "browser", "camera"],
  ios: ["phone", "chat", "browser", "music"],
} as const;
