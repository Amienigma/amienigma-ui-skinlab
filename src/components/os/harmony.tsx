import type { ReactNode } from "react";
import {
  Bluetooth,
  Flashlight,
  Pause,
  Plane,
  Play,
  RotateCw,
  Sun,
  Volume2,
  Wifi,
  BellOff,
  Signal,
  Lamp,
  Speaker,
  Tablet,
  Watch,
  ChevronRight,
  Search,
  User,
} from "lucide-react";
import {
  APP_BY_ID,
  APPS,
  DOCK_APPS,
  HOME_APPS,
  NEARBY,
  NOTIFS,
  RIDE,
  TRACK,
} from "@/data/catalog";
import { AppGlyph } from "@/components/icons/glyphs";
import { cn, formatDateLong, formatLockTime, formatTime } from "@/lib/utils";
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

function TogglePad({
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
      aria-pressed={active}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "grid aspect-square place-items-center rounded-full transition-[background,box-shadow,transform] duration-200 ease-[var(--ease-smooth-out)] app-press",
        active
          ? "bg-[var(--skin-accent)] text-[#073033] shadow-[0_0_22px_var(--skin-glow)]"
          : "spatial-card text-[var(--skin-text)]",
      )}
    >
      {children}
    </button>
  );
}

export function HarmonySkin() {
  const screen = useDevice((s) => s.screen);
  const unlock = useDevice((s) => s.unlock);
  const setScreen = useDevice((s) => s.setScreen);

  return (
    <>
      <Wallpaper />
      <div className="relative z-10 flex h-full flex-col pt-11">
        <StatusBar showTime={screen !== "lock"} />
        <div className="relative min-h-0 flex-1">
          {screen === "lock" && <HarmonyLock />}
          {screen === "home" && <HarmonyHome />}
          {screen === "controls" && <HarmonyControls />}
          {screen === "notifications" && <HarmonyNotifications />}
          {screen === "apps" && <HarmonyApps />}
          {screen === "settings" && <HarmonySettings />}
        </div>
        <HomeBar onHome={() => (screen === "lock" ? unlock() : setScreen("home"))} />
      </div>
      <FolderOverlay os="harmony" />
      <MiniAppStage />
    </>
  );
}

function HarmonyLock() {
  const now = useClock();
  const unlock = useDevice((s) => s.unlock);
  const mediaPlaying = useDevice((s) => s.mediaPlaying);
  const toggle = useDevice((s) => s.toggle);

  return (
    <div className="flex h-full flex-col px-5 pt-1">
      <p className="text-center text-status font-medium tracking-wide text-[var(--skin-muted)]">
        {formatDateLong(now)}
      </p>
      <p className="mt-1 text-center font-light tabular-nums tracking-tight text-clock leading-none">
        {formatLockTime(now)}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="spatial-card col-span-2 rounded-[1.6rem] p-4">
          <p className="text-icon-label uppercase tracking-wider text-[var(--skin-muted)]">
            Nimbus
          </p>
          <p className="mt-1 text-2xl font-medium">Dallas 72°</p>
          <p className="text-status text-[var(--skin-muted)]">Clear · Light breeze</p>
        </div>
        <button
          type="button"
          className="spatial-card rounded-[1.6rem] p-3 text-left app-press"
          onClick={() => toggle("mediaPlaying")}
        >
          <p className="text-icon-label uppercase tracking-wider text-[var(--skin-muted)]">
            Drift
          </p>
          <p className="mt-1 truncate text-sm font-medium">{TRACK.title}</p>
          <p className="truncate text-icon-label text-[var(--skin-muted)]">
            {mediaPlaying ? "Playing" : "Paused"} · {TRACK.artist}
          </p>
        </button>
        <div className="spatial-card rounded-[1.6rem] p-3">
          <p className="text-icon-label uppercase tracking-wider text-[var(--skin-muted)]">
            Orbit
          </p>
          <p className="mt-1 text-sm font-medium">Review 9:30</p>
          <p className="text-icon-label text-[var(--skin-muted)]">Studio B</p>
        </div>
      </div>

      <div className="mt-3 spatial-card flex items-center gap-3 rounded-full px-4 py-2.5">
        <span className="grid size-8 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]">
          <Signal className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{RIDE.title} live window</p>
          <p className="truncate text-icon-label text-[var(--skin-muted)]">
            {RIDE.subtitle}
          </p>
        </div>
        <span className="text-status font-semibold tabular-nums">{RIDE.eta}</span>
      </div>

      <SwipeToUnlock onUnlock={unlock} />
    </div>
  );
}

function HarmonyHome() {
  const open = useAppOpener();
  const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
  const setScreen = useDevice((s) => s.setScreen);
  const now = useClock();

  return (
    <div className="flex h-full flex-col px-5 pt-2">
      <button
        type="button"
        onClick={() => setScreen("controls")}
        className="spatial-card mb-4 w-full rounded-[1.5rem] p-4 text-left"
      >
        <p className="text-icon-label uppercase tracking-wider text-[var(--skin-muted)]">
          Dallas
        </p>
        <div className="mt-1 flex items-end justify-between">
          <p className="text-3xl font-medium">72°</p>
          <p className="text-status text-[var(--skin-muted)]">
            {formatTime(now)} · Clear
          </p>
        </div>
      </button>

      <div className="grid grid-cols-4 gap-x-3 gap-y-4">
        {HOME_APPS.harmony.map((id) => (
          <AppIcon key={id} app={APP_BY_ID[id]} os="harmony" label onPress={open} />
        ))}
        <FolderIcon
          folderId="daily"
          os="harmony"
          onPress={() => setExpandedFolder("daily")}
        />
        <FolderIcon
          folderId="create"
          os="harmony"
          onPress={() => setExpandedFolder("create")}
        />
        <AppIcon app={APP_BY_ID.settings} os="harmony" label onPress={open} />
      </div>

      <div className="mt-auto mb-2 flex justify-around rounded-[1.8rem] spatial-card px-2 py-3">
        {DOCK_APPS.harmony.map((id) => (
          <AppIcon key={id} app={APP_BY_ID[id]} os="harmony" onPress={open} />
        ))}
      </div>
    </div>
  );
}

function HarmonyControls() {
  const s = useDevice();
  const t = (key: ToggleKey) => () => s.toggle(key);
  const kindIcon = {
    lamp: Lamp,
    speaker: Speaker,
    tablet: Tablet,
    watch: Watch,
  } as const;

  return (
    <div className="flex h-full min-h-0 flex-col gap-2.5 px-4 pt-1 pb-2">
      <div className="spatial-card flex items-center gap-3 rounded-[1.4rem] px-4 py-3">
        <span className="grid size-9 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]">
          <Signal className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">Live service window</p>
          <p className="truncate text-icon-label text-[var(--skin-muted)]">
            {RIDE.title} · {RIDE.subtitle}
          </p>
        </div>
      </div>

      <div className="spatial-card flex items-center gap-3 rounded-[1.4rem] px-3 py-2.5">
        <span
          className="grid size-11 shrink-0 place-items-center rounded-full text-white"
          style={{ background: "var(--swatch-music)" }}
        >
          <AppGlyph id="music" className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{TRACK.title}</p>
          <p className="truncate text-icon-label text-[var(--skin-muted)]">{TRACK.artist}</p>
        </div>
        <button
          type="button"
          aria-label={s.mediaPlaying ? "Pause" : "Play"}
          onClick={() => s.toggle("mediaPlaying")}
          className="grid size-10 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]"
        >
          {s.mediaPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[1fr_4.4rem_4.4rem] gap-2.5">
        <div className="grid h-full grid-cols-2 grid-rows-3 gap-2.5">
          <TogglePad active={s.wifi} onClick={t("wifi")} label="Wi-Fi">
            <Wifi className="size-5" />
          </TogglePad>
          <TogglePad active={s.bluetooth} onClick={t("bluetooth")} label="Bluetooth">
            <Bluetooth className="size-5" />
          </TogglePad>
          <TogglePad active={s.airplane} onClick={t("airplane")} label="Airplane">
            <Plane className="size-5" />
          </TogglePad>
          <TogglePad active={s.dnd} onClick={t("dnd")} label="Do not disturb">
            <BellOff className="size-5" />
          </TogglePad>
          <TogglePad active={s.flashlight} onClick={t("flashlight")} label="Flashlight">
            <Flashlight className="size-5" />
          </TogglePad>
          <TogglePad
            active={s.rotationLock}
            onClick={t("rotationLock")}
            label="Rotation lock"
          >
            <RotateCw className="size-5" />
          </TogglePad>
        </div>

        <div className="spatial-card overflow-hidden rounded-full">
          <VerticalSlider
            value={s.brightness}
            onChange={s.setBrightness}
            label="Brightness"
            fillClass="bg-[var(--skin-accent)]"
            icon={<Sun className="size-5 text-[#073033]" />}
          />
        </div>
        <div className="spatial-card overflow-hidden rounded-full">
          <VerticalSlider
            value={s.volume}
            onChange={s.setVolume}
            label="Volume"
            fillClass="bg-white"
            icon={<Volume2 className="size-5 text-[#163038]" />}
          />
        </div>
      </div>

      <div>
        <p className="mb-2 px-1 text-icon-label font-medium uppercase tracking-wider text-[var(--skin-muted)]">
          Super Device
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {NEARBY.map((d) => {
            const Icon = kindIcon[d.kind];
            const on = s.nearby[d.id];
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => s.toggleNearby(d.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-icon-label font-medium transition-transform duration-150 app-press",
                  on
                    ? "bg-[var(--skin-accent)] text-[#073033] shadow-[0_0_16px_var(--skin-glow)]"
                    : "spatial-card",
                )}
              >
                <Icon className="size-3.5" />
                {d.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function HarmonyNotifications() {
  const dismissed = useDevice((s) => s.dismissedNotifs);
  const dismiss = useDevice((s) => s.dismissNotif);
  const restore = useDevice((s) => s.restoreNotifs);
  const items = NOTIFS.filter((n) => !dismissed.includes(n.id));

  return (
    <div className="flex h-full flex-col px-4 pt-2">
      <div className="mb-3 flex items-center justify-between px-1">
        <p className="text-os-title font-semibold">Notifications</p>
        {dismissed.length > 0 ? (
          <button type="button" className="text-status text-[var(--skin-accent)]" onClick={restore}>
            Restore
          </button>
        ) : null}
      </div>
      <div className="flex flex-col gap-2.5 overflow-y-auto pb-4">
        {items.length === 0 ? (
          <p className="mt-10 text-center text-sm text-[var(--skin-muted)]">All clear.</p>
        ) : (
          items.map((n) => {
            const app = APP_BY_ID[n.appId];
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => dismiss(n.id)}
                className="spatial-card flex gap-3 rounded-[1.4rem] p-3 text-left"
              >
                <span
                  className="icon-harmony mt-0.5 grid size-9 shrink-0 place-items-center text-white"
                  style={{ background: `var(--swatch-${app.swatch})` }}
                >
                  <AppGlyph id={app.glyph} className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-2">
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

function HarmonyApps() {
  const q = useDevice((s) => s.appSearch);
  const setQ = useDevice((s) => s.setAppSearch);
  const open = useAppOpener();
  const list = APPS.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="flex h-full flex-col px-4 pt-1">
      <div className="spatial-card mb-3 flex items-center gap-2 rounded-full px-3 py-2">
        <Search className="size-4 text-[var(--skin-muted)]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search apps"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
        />
      </div>
      <div className="grid grid-cols-4 gap-x-3 gap-y-4 overflow-y-auto pb-4">
        {list.map((app) => (
          <AppIcon key={app.id} app={app} os="harmony" label onPress={open} />
        ))}
      </div>
    </div>
  );
}

function HarmonySettings() {
  const s = useDevice();
  const q = s.settingsSearch;
  const rows = [
    { id: "wifi", label: "Wi-Fi", on: s.wifi, key: "wifi" as ToggleKey },
    { id: "bt", label: "Bluetooth", on: s.bluetooth, key: "bluetooth" as ToggleKey },
    { id: "air", label: "Airplane mode", on: s.airplane, key: "airplane" as ToggleKey },
    { id: "dnd", label: "Do Not Disturb", on: s.dnd, key: "dnd" as ToggleKey },
    { id: "aod", label: "Always-On Display", on: s.aod, key: "aod" as ToggleKey },
    { id: "haptics", label: "Haptics", on: s.haptics, key: "haptics" as ToggleKey },
  ].filter((r) => r.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="flex h-full flex-col overflow-y-auto px-4 pt-1 pb-3">
      <p className="mb-3 px-1 text-xl font-semibold">Settings</p>
      <div className="spatial-card mb-3 flex items-center gap-2 rounded-full px-3 py-2">
        <Search className="size-4 text-[var(--skin-muted)]" />
        <input
          value={q}
          onChange={(e) => s.setSettingsSearch(e.target.value)}
          placeholder="Search settings"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
        />
      </div>
      <div className="spatial-card mb-3 flex items-center gap-3 rounded-[1.4rem] p-3">
        <span className="grid size-11 place-items-center rounded-full bg-[var(--skin-accent)] text-[#073033]">
          <User className="size-5" />
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold">Ada Voss</p>
          <p className="text-icon-label text-[var(--skin-muted)]">Harmony 5.0 · Nova Pulse</p>
        </div>
        <ChevronRight className="size-4 text-[var(--skin-muted)]" />
      </div>
      <div className="spatial-card divide-y divide-white/10 overflow-hidden rounded-[1.4rem]">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center justify-between px-4 py-3">
            <span className="text-sm">{r.label}</span>
            <button
              type="button"
              aria-pressed={r.on}
              onClick={() => s.toggle(r.key)}
              className={cn(
                "h-7 w-12 rounded-full p-0.5 transition-colors duration-200",
                r.on ? "bg-[var(--skin-accent)]" : "bg-white/20",
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
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm">Appearance</span>
          <button
            type="button"
            onClick={s.toggleTheme}
            className="rounded-full bg-white/15 px-3 py-1 text-icon-label font-medium"
          >
            {s.theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </div>
  );
}
