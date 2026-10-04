import type { ReactNode } from "react";
import {
  Bluetooth,
  Calculator,
  Camera,
  ChevronRight,
  Flashlight,
  Plane,
  Search,
  Signal,
  Sun,
  Timer,
  User,
  Volume2,
  Wifi,
  Pause,
  Play,
} from "lucide-react";
import {
  APP_BY_ID,
  APPS,
  DOCK_APPS,
  HOME_APPS,
  NOTIFS,
  RIDE,
  TRACK,
} from "@/data/catalog";
import { AppGlyph } from "@/components/icons/glyphs";
import { cn, formatDateLong, formatLockTime } from "@/lib/utils";
import { useClock } from "@/hooks/use-clock";
import { useDevice, type ToggleKey } from "@/store/device-store";
import {
  AppIcon,
  FolderIcon,
  FolderOverlay,
  HomeBar,
  MiniAppStage,
  StatusBar,
  SwipeToUnlock,
  VerticalSlider,
  Wallpaper,
  useAppOpener,
} from "./shared";

export function IosSkin() {
  const screen = useDevice((s) => s.screen);
  const unlock = useDevice((s) => s.unlock);
  const setScreen = useDevice((s) => s.setScreen);

  return (
    <>
      <Wallpaper />
      <div className="relative z-10 flex h-full flex-col pt-12">
        <StatusBar showTime={screen !== "lock"} />
        <div className="relative min-h-0 flex-1">
          {screen === "lock" && <IosLock />}
          {screen === "home" && <IosHome />}
          {screen === "controls" && <IosControls />}
          {screen === "notifications" && <IosNotifications />}
          {screen === "apps" && <IosApps />}
          {screen === "settings" && <IosSettings />}
        </div>
        <HomeBar onHome={() => (screen === "lock" ? unlock() : setScreen("home"))} />
      </div>
      <FolderOverlay os="ios" />
      <MiniAppStage />
    </>
  );
}

function IosLock() {
  const now = useClock();
  const unlock = useDevice((s) => s.unlock);
  const flashlight = useDevice((s) => s.flashlight);
  const toggle = useDevice((s) => s.toggle);
  const setOpenApp = useDevice((s) => s.setOpenApp);
  const playing = useDevice((s) => s.mediaPlaying);

  return (
    <div className="flex h-full flex-col px-6 pt-1">
      <p className="text-center text-os-title font-medium tracking-wide">
        {formatDateLong(now)}
      </p>
      <p className="ios-clock-glass text-center font-semibold tabular-nums tracking-tighter text-clock leading-none">
        {formatLockTime(now)}
      </p>

      <button
        type="button"
        onClick={() => toggle("mediaPlaying")}
        className="liquid-glass mt-6 w-full rounded-[1.6rem] p-3 text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className="grid size-11 place-items-center text-white icon-squircle"
            style={{ background: "var(--swatch-music)" }}
          >
            <AppGlyph id="music" className="size-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-semibold">{TRACK.title}</span>
            <span className="block truncate text-status text-[var(--skin-muted)]">
              {playing ? "Now Playing" : "Paused"} · {TRACK.artist}
            </span>
          </span>
          {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
        </div>
      </button>

      <button
        type="button"
        className="liquid-glass mt-2 flex w-full items-center gap-3 rounded-full px-3 py-2 text-left"
      >
        <span
          className="grid size-8 place-items-center rounded-full text-white"
          style={{ background: "var(--swatch-maps)" }}
        >
          <AppGlyph id="maps" className="size-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-status font-semibold">{RIDE.title}</span>
          <span className="block truncate text-icon-label text-[var(--skin-muted)]">
            {RIDE.subtitle}
          </span>
        </span>
        <span className="text-status font-semibold tabular-nums">{RIDE.eta}</span>
      </button>

      <div className="relative z-40 mt-auto mb-12 flex items-center justify-between px-1">
        <button
          type="button"
          aria-label="Flashlight"
          aria-pressed={flashlight}
          onClick={() => toggle("flashlight")}
          className={cn(
            "grid size-14 place-items-center rounded-full liquid-glass",
            flashlight && "bg-white text-black",
          )}
        >
          <Flashlight className="size-6" />
        </button>
        <button
          type="button"
          aria-label="Camera"
          onClick={() => setOpenApp("camera")}
          className="grid size-14 place-items-center rounded-full liquid-glass"
        >
          <Camera className="size-6" />
        </button>
      </div>

      <SwipeToUnlock onUnlock={unlock} />
    </div>
  );
}

function IosHome() {
  const open = useAppOpener();
  const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
  const setScreen = useDevice((s) => s.setScreen);

  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="liquid-glass rounded-[1.6rem] p-3">
          <p className="text-icon-label font-medium text-[var(--skin-muted)]">Nimbus</p>
          <p className="text-2xl font-semibold">72°</p>
          <p className="text-icon-label text-[var(--skin-muted)]">Dallas · Clear</p>
        </div>
        <div className="liquid-glass rounded-[1.6rem] p-3">
          <p className="text-icon-label font-medium text-[var(--skin-muted)]">Orbit</p>
          <p className="text-sm font-semibold leading-snug">Design review</p>
          <p className="text-icon-label text-[var(--skin-muted)]">Tomorrow 9:30</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-3 gap-y-4">
        {HOME_APPS.ios.map((id) => (
          <AppIcon key={id} app={APP_BY_ID[id]} os="ios" label onPress={open} />
        ))}
        <FolderIcon
          folderId="daily"
          os="ios"
          onPress={() => setExpandedFolder("daily")}
        />
        <FolderIcon
          folderId="create"
          os="ios"
          onPress={() => setExpandedFolder("create")}
        />
        <AppIcon app={APP_BY_ID.settings} os="ios" label onPress={open} />
      </div>

      <div className="mt-auto mb-2 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={() => setScreen("apps")}
          className="liquid-glass flex items-center gap-1.5 rounded-full px-4 py-1.5 text-icon-label font-medium"
        >
          <Search className="size-3" />
          Search
        </button>
        <div className="liquid-glass mx-1 flex w-full justify-around rounded-[2rem] px-2 py-3">
          {DOCK_APPS.ios.map((id) => (
            <AppIcon key={id} app={APP_BY_ID[id]} os="ios" onPress={open} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GlassTile({
  active,
  onClick,
  label,
  children,
  className,
}: {
  active?: boolean;
  onClick?: () => void;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "liquid-glass grid place-items-center rounded-[1.5rem] transition-colors duration-200",
        active && "bg-white text-black",
        className,
      )}
    >
      {children}
    </button>
  );
}

function IosControls() {
  const s = useDevice();
  const t = (key: ToggleKey) => () => s.toggle(key);
  const setOpenApp = useDevice((st) => st.setOpenApp);

  return (
    <div className="flex h-full min-h-0 flex-col gap-3 px-4 pt-2 pb-2">
      <div className="grid grid-cols-2 gap-3">
        <div className="liquid-glass grid grid-cols-2 grid-rows-2 gap-2 rounded-[1.7rem] p-2.5">
          <MiniRound active={s.airplane} onClick={t("airplane")} label="Airplane">
            <Plane className="size-4" />
          </MiniRound>
          <MiniRound active={s.cellular} onClick={t("cellular")} label="Cellular">
            <Signal className="size-4" />
          </MiniRound>
          <MiniRound active={s.wifi} onClick={t("wifi")} label="Wi-Fi">
            <Wifi className="size-4" />
          </MiniRound>
          <MiniRound active={s.bluetooth} onClick={t("bluetooth")} label="Bluetooth">
            <Bluetooth className="size-4" />
          </MiniRound>
        </div>
        <div className="liquid-glass flex flex-col justify-between rounded-[1.7rem] p-3">
          <p className="text-icon-label font-medium text-[var(--skin-muted)]">Drift</p>
          <p className="truncate text-sm font-semibold">{TRACK.title}</p>
          <p className="truncate text-icon-label text-[var(--skin-muted)]">{TRACK.artist}</p>
          <button
            type="button"
            onClick={() => s.toggle("mediaPlaying")}
            className="self-end"
            aria-label={s.mediaPlaying ? "Pause" : "Play"}
          >
            {s.mediaPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
          </button>
        </div>
      </div>

      <div className="grid h-36 grid-cols-2 gap-3">
        <div className="liquid-glass overflow-hidden rounded-[1.7rem]">
          <VerticalSlider
            value={s.brightness}
            onChange={s.setBrightness}
            label="Brightness"
            fillClass="bg-white"
            icon={<Sun className="size-4 text-black/70" />}
          />
        </div>
        <div className="liquid-glass overflow-hidden rounded-[1.7rem]">
          <VerticalSlider
            value={s.volume}
            onChange={s.setVolume}
            label="Volume"
            fillClass="bg-white"
            icon={<Volume2 className="size-4 text-black/70" />}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <GlassTile
          active={s.flashlight}
          onClick={t("flashlight")}
          label="Flashlight"
          className="aspect-square"
        >
          <Flashlight className="size-5" />
        </GlassTile>
        <GlassTile label="Timer" className="aspect-square">
          <Timer className="size-5" />
        </GlassTile>
        <GlassTile
          label="Calculator"
          className="aspect-square"
          onClick={() => setOpenApp("calc")}
        >
          <Calculator className="size-5" />
        </GlassTile>
        <GlassTile
          label="Camera"
          className="aspect-square"
          onClick={() => setOpenApp("camera")}
        >
          <Camera className="size-5" />
        </GlassTile>
      </div>
    </div>
  );
}

function MiniRound({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "relative grid aspect-square place-items-center rounded-full transition-colors duration-200",
        active ? "bg-[var(--skin-accent)] text-white" : "bg-white/10",
      )}
    >
      {children}
    </button>
  );
}

function IosNotifications() {
  const dismissed = useDevice((s) => s.dismissedNotifs);
  const dismiss = useDevice((s) => s.dismissNotif);
  const restore = useDevice((s) => s.restoreNotifs);
  const items = NOTIFS.filter((n) => !dismissed.includes(n.id));

  return (
    <div className="flex h-full flex-col px-4 pt-3">
      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-sm font-semibold text-[var(--skin-muted)]">Notification Center</p>
        {dismissed.length > 0 ? (
          <button type="button" className="text-status text-[var(--skin-accent)]" onClick={restore}>
            Restore
          </button>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto pb-4">
        {items.length === 0 ? (
          <p className="mt-10 text-center text-sm text-[var(--skin-muted)]">No Notifications</p>
        ) : (
          items.map((n) => {
            const app = APP_BY_ID[n.appId];
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => dismiss(n.id)}
                className="liquid-glass flex gap-3 rounded-[1.4rem] p-3 text-left"
              >
                <span
                  className="mt-0.5 grid size-8 shrink-0 place-items-center text-white icon-squircle"
                  style={{ background: `var(--swatch-${app.swatch})` }}
                >
                  <AppGlyph id={app.glyph} className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex justify-between gap-2">
                    <span className="truncate text-sm font-semibold">{n.title}</span>
                    <span className="text-icon-label text-[var(--skin-muted)]">{n.time}</span>
                  </span>
                  <span className="mt-0.5 block text-status leading-snug text-[var(--skin-muted)]">
                    {n.body}
                  </span>
                </span>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

function IosApps() {
  const q = useDevice((s) => s.appSearch);
  const setQ = useDevice((s) => s.setAppSearch);
  const open = useAppOpener();
  const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
  const list = APPS.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="flex h-full flex-col px-4 pt-2">
      <div className="liquid-glass mb-3 flex items-center gap-2 rounded-[0.9rem] px-3 py-2">
        <Search className="size-4 text-[var(--skin-muted)]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="App Library"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 overflow-y-auto pb-3">
        <LibraryCard title="Social" ids={["chat", "mail", "contacts", "phone"]} onOpen={open} />
        <LibraryCard title="Utilities" ids={["calc", "clock", "files", "settings"]} onOpen={open} />
        <button
          type="button"
          className="liquid-glass rounded-[1.6rem] p-3 text-left"
          onClick={() => setExpandedFolder("daily")}
        >
          <p className="mb-2 text-sm font-semibold">Daily</p>
          <div className="grid grid-cols-2 gap-2">
            {["calendar", "notes", "clock", "files"].map((id) => (
              <span
                key={id}
                className="grid aspect-square place-items-center text-white icon-squircle"
                style={{ background: `var(--swatch-${APP_BY_ID[id].swatch})` }}
              >
                <AppGlyph id={APP_BY_ID[id].glyph} className="size-5" />
              </span>
            ))}
          </div>
        </button>
        <LibraryCard title="Media" ids={["music", "gallery", "video", "camera"]} onOpen={open} />
      </div>
      {q ? (
        <div className="grid grid-cols-4 gap-3 pb-3">
          {list.map((app) => (
            <AppIcon key={app.id} app={app} os="ios" label onPress={open} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function LibraryCard({
  title,
  ids,
  onOpen,
}: {
  title: string;
  ids: string[];
  onOpen: (app: (typeof APPS)[number]) => void;
}) {
  return (
    <div className="liquid-glass rounded-[1.6rem] p-3">
      <p className="mb-2 text-sm font-semibold">{title}</p>
      <div className="grid grid-cols-2 gap-2">
        {ids.map((id) => {
          const app = APP_BY_ID[id];
          return (
            <button
              key={id}
              type="button"
              aria-label={app.name}
              onClick={() => onOpen(app)}
              className="grid aspect-square place-items-center text-white icon-squircle"
              style={{ background: `var(--swatch-${app.swatch})` }}
            >
              <AppGlyph id={app.glyph} className="size-5" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function IosSettings() {
  const s = useDevice();
  const q = s.settingsSearch;
  const groups = [
    [
      { label: "Airplane Mode", key: "airplane" as ToggleKey, on: s.airplane },
      { label: "Wi-Fi", key: "wifi" as ToggleKey, on: s.wifi },
      { label: "Bluetooth", key: "bluetooth" as ToggleKey, on: s.bluetooth },
    ],
    [
      { label: "Focus", key: "dnd" as ToggleKey, on: s.dnd },
      { label: "Haptics", key: "haptics" as ToggleKey, on: s.haptics },
    ],
  ];

  return (
    <div className="flex h-full flex-col overflow-y-auto px-4 pt-1 pb-3">
      <p className="mb-3 text-2xl font-bold">Settings</p>
      <div className="liquid-glass mb-3 flex items-center gap-2 rounded-[0.9rem] px-3 py-2">
        <Search className="size-4 text-[var(--skin-muted)]" />
        <input
          value={q}
          onChange={(e) => s.setSettingsSearch(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
        />
      </div>
      <div className="liquid-glass mb-3 flex items-center gap-3 rounded-[1.1rem] p-3">
        <span className="grid size-12 place-items-center rounded-full bg-[var(--skin-accent)] text-white">
          <User className="size-5" />
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold">Ada Voss</p>
          <p className="text-icon-label text-[var(--skin-muted)]">Cloud Account · Crystal 16</p>
        </div>
        <ChevronRight className="size-4 text-[var(--skin-muted)]" />
      </div>
      {groups.map((rows, i) => (
        <div key={i} className="liquid-glass mb-3 overflow-hidden rounded-[1.1rem]">
          {rows
            .filter((r) => r.label.toLowerCase().includes(q.toLowerCase()))
            .map((r, idx, arr) => (
              <div
                key={r.label}
                className={cn(
                  "flex items-center justify-between px-4 py-2.5",
                  idx < arr.length - 1 && "border-b border-white/10",
                )}
              >
                <span className="text-sm">{r.label}</span>
                <button
                  type="button"
                  aria-pressed={r.on}
                  onClick={() => s.toggle(r.key)}
                  className={cn(
                    "h-7 w-12 rounded-full p-0.5 transition-colors duration-200",
                    r.on ? "bg-[#34c759]" : "bg-white/20",
                  )}
                >
                  <span
                    className={cn(
                      "block size-6 rounded-full bg-white transition-transform duration-200",
                      r.on ? "translate-x-5" : "translate-x-0",
                    )}
                  />
                </button>
              </div>
            ))}
        </div>
      ))}
      <div className="liquid-glass flex items-center justify-between rounded-[1.1rem] px-4 py-2.5">
        <span className="text-sm">Appearance</span>
        <button
          type="button"
          onClick={s.toggleTheme}
          className="text-sm font-medium text-[var(--skin-accent)]"
        >
          {s.theme === "dark" ? "Dark" : "Light"}
        </button>
      </div>
      <p className="mt-4 text-center text-icon-label text-[var(--skin-muted)]">
        iOS 26 · SkinLab Device
      </p>
    </div>
  );
}
