import { create } from "zustand";

export type OsId = "harmony" | "oneui" | "ios";
export type ScreenId =
  | "lock"
  | "home"
  | "controls"
  | "notifications"
  | "apps"
  | "settings";
export type ThemeId = "light" | "dark";

export type ToggleKey =
  | "wifi"
  | "cellular"
  | "bluetooth"
  | "airplane"
  | "dnd"
  | "flashlight"
  | "rotationLock"
  | "hotspot"
  | "batterySaver"
  | "haptics"
  | "aod"
  | "mediaPlaying";

export const OS_META: Record<
  OsId,
  { name: string; version: string; line: string }
> = {
  harmony: {
    name: "Harmony",
    version: "5.0",
    line: "Glowing spatial cards and Super Device chips",
  },
  oneui: {
    name: "One UI",
    version: "7",
    line: "Circular icons, split panels, Now Bar",
  },
  ios: {
    name: "iOS",
    version: "26",
    line: "Liquid Glass squircles and a floating dock",
  },
};

export const SCREENS: { id: ScreenId; label: string }[] = [
  { id: "lock", label: "Lock" },
  { id: "home", label: "Home" },
  { id: "controls", label: "Controls" },
  { id: "notifications", label: "Alerts" },
  { id: "apps", label: "Apps" },
  { id: "settings", label: "Settings" },
];

export interface DeviceState {
  os: OsId;
  screen: ScreenId;
  theme: ThemeId;
  brightness: number;
  volume: number;
  wifi: boolean;
  cellular: boolean;
  bluetooth: boolean;
  airplane: boolean;
  dnd: boolean;
  flashlight: boolean;
  rotationLock: boolean;
  hotspot: boolean;
  batterySaver: boolean;
  haptics: boolean;
  aod: boolean;
  mediaPlaying: boolean;
  battery: number;
  expandedFolder: string | null;
  dismissedNotifs: string[];
  appSearch: string;
  settingsSearch: string;
  openApp: string | null;
  nearby: Record<string, boolean>;
  setOs: (os: OsId) => void;
  setScreen: (screen: ScreenId) => void;
  setTheme: (theme: ThemeId) => void;
  toggleTheme: () => void;
  setBrightness: (n: number) => void;
  setVolume: (n: number) => void;
  toggle: (key: ToggleKey) => void;
  setExpandedFolder: (id: string | null) => void;
  dismissNotif: (id: string) => void;
  restoreNotifs: () => void;
  setAppSearch: (q: string) => void;
  setSettingsSearch: (q: string) => void;
  setOpenApp: (id: string | null) => void;
  toggleNearby: (id: string) => void;
  lock: () => void;
  unlock: () => void;
}

export const useDevice = create<DeviceState>((set) => ({
  os: "harmony",
  screen: "lock",
  theme: "dark",
  brightness: 78,
  volume: 54,
  wifi: true,
  cellular: true,
  bluetooth: true,
  airplane: false,
  dnd: false,
  flashlight: false,
  rotationLock: false,
  hotspot: false,
  batterySaver: false,
  haptics: true,
  aod: true,
  mediaPlaying: true,
  battery: 74,
  expandedFolder: null,
  dismissedNotifs: [],
  appSearch: "",
  settingsSearch: "",
  openApp: null,
  nearby: { lamp: true, speaker: false, tablet: false, watch: true },
  setOs: (os) =>
    set({
      os,
      expandedFolder: null,
      openApp: null,
      appSearch: "",
      settingsSearch: "",
    }),
  setScreen: (screen) =>
    set({ screen, expandedFolder: null, openApp: null }),
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),
  setBrightness: (n) => set({ brightness: Math.min(100, Math.max(4, n)) }),
  setVolume: (n) => set({ volume: Math.min(100, Math.max(0, n)) }),
  toggle: (key) =>
    set((s) => {
      if (key === "airplane") {
        const next = !s.airplane;
        if (next) {
          return {
            airplane: true,
            wifi: false,
            bluetooth: false,
            cellular: false,
            hotspot: false,
          };
        }
        return { airplane: false, wifi: true, cellular: true };
      }
      if (key === "wifi" && !s.wifi && s.airplane) {
        return { wifi: true, airplane: false };
      }
      if (key === "cellular" && !s.cellular && s.airplane) {
        return { cellular: true, airplane: false };
      }
      if (key === "bluetooth" && !s.bluetooth && s.airplane) {
        return { bluetooth: true, airplane: false };
      }
      return { [key]: !s[key] } as Partial<DeviceState>;
    }),
  setExpandedFolder: (id) => set({ expandedFolder: id }),
  dismissNotif: (id) =>
    set((s) => ({ dismissedNotifs: [...s.dismissedNotifs, id] })),
  restoreNotifs: () => set({ dismissedNotifs: [] }),
  setAppSearch: (q) => set({ appSearch: q }),
  setSettingsSearch: (q) => set({ settingsSearch: q }),
  setOpenApp: (id) => set({ openApp: id, expandedFolder: null }),
  toggleNearby: (id) =>
    set((s) => ({ nearby: { ...s.nearby, [id]: !s.nearby[id] } })),
  lock: () =>
    set({
      screen: "lock",
      expandedFolder: null,
      openApp: null,
    }),
  unlock: () =>
    set({
      screen: "home",
      expandedFolder: null,
      openApp: null,
    }),
}));
