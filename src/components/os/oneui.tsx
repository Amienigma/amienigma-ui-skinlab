import type { ReactNode } from "react";
import {
  Battery,
  Bluetooth,
  Camera,
  Cast,
  ChevronRight,
  Flashlight,
  Lock,
  MapPin,
  Moon,
  MoreHorizontal,
  Music2,
  Nfc,
  Pause,
  Pencil,
  Plane,
  Play,
  Power,
  RotateCw,
  Search,
  Settings,
  Share2,
  Signal,
  SkipBack,
  SkipForward,
  Sun,
  User,
  Volume2,
  Wifi,
} from "lucide-react";
import {
  APP_BY_ID,
  APPS,
  DOCK_APPS,
  HOME_APPS,
  NOTIFS,
  TRACK,
} from "@/data/catalog";
import { AppGlyph } from "@/components/icons/glyphs";
import { cn, formatDateShort, formatLockTime, lockTimeParts } from "@/lib/utils";
import { useClock } from "@/hooks/use-clock";
import { useDevice, type ToggleKey } from "@/store/device-store";
import {
  AppIcon,
  FolderIcon,
  FolderOverlay,
  HomeBar,
  HorizontalSlider,
  MiniAppStage,
  StatusBar,
  SwipeToUnlock,
  Wallpaper,
  useAppOpener,
} from "./shared";

export function OneUiSkin() {
  const screen = useDevice((s) => s.screen);
  const unlock = useDevice((s) => s.unlock);
  const setScreen = useDevice((s) => s.setScreen);

  return (
    <>
      <Wallpaper />
      <div className="relative z-10 flex h-full flex-col pt-11">
        <StatusBar showTime={screen !== "lock"} />
        <div className="relative min-h-0 flex-1">
          {screen === "lock" && <OneUiLock />}
          {screen === "home" && <OneUiHome />}
          {screen === "controls" && <OneUiControls />}
          {screen === "notifications" && <OneUiNotifications />}
          {screen === "apps" && <OneUiApps />}
          {screen === "settings" && <OneUiSettings />}
        </div>
        <HomeBar onHome={() => (screen === "lock" ? unlock() : setScreen("home"))} />
      </div>
      <FolderOverlay os="oneui" />
      <MiniAppStage />
    </>
  );
}

function OneUiLock() {
  const now = useClock();
  const unlock = useDevice((s) => s.unlock);
  const playing = useDevice((s) => s.mediaPlaying);
  const toggle = useDevice((s) => s.toggle);
  const setOpenApp = useDevice((s) => s.setOpenApp);
  const { h, m } = lockTimeParts(now);

  return (
    <div className="flex h-full flex-col px-5 pt-1">
      <div className="text-center">
        <p className="clock-stack">{h}</p>
        <p className="clock-stack">{m}</p>
        <p className="mt-2 text-sm font-medium text-[var(--skin-muted)]">
          {formatDateShort(now)}
        </p>
      </div>

      <div className="mt-auto flex flex-col items-center gap-3 pb-1">
        <p className="unlock-hint text-status font-medium tracking-wide opacity-80">
          Swipe to unlock
        </p>
        <div className="relative z-40 flex w-full items-center gap-2.5 px-1">
          <button
            type="button"
            aria-label="Phone"
            onClick={() => setOpenApp("phone")}
            className="grid size-12 shrink-0 place-items-center rounded-full oneui-soft"
          >
            <AppGlyph id="phone" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => toggle("mediaPlaying")}
            className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-full oneui-soft py-1 pl-1 pr-3"
            aria-label="Now Bar"
          >
            <span
              className="grid size-10 shrink-0 place-items-center rounded-full text-white"
              style={{ background: "var(--swatch-music)" }}
            >
              <AppGlyph id="music" className="size-4" />
            </span>
            <span className="min-w-0 flex-1 text-left">
              <span className="block truncate text-status font-semibold">{TRACK.title}</span>
              <span className="block truncate text-icon-label text-[var(--skin-muted)]">
                {TRACK.artist}
              </span>
            </span>
            <SkipBack className="size-3.5 shrink-0" />
            {playing ? <Pause className="size-4 shrink-0" /> : <Play className="size-4 shrink-0" />}
            <SkipForward className="size-3.5 shrink-0" />
          </button>
          <button
            type="button"
            aria-label="Camera"
            onClick={() => setOpenApp("camera")}
            className="grid size-12 shrink-0 place-items-center rounded-full oneui-soft"
          >
            <Camera className="size-5" />
          </button>
        </div>
      </div>

      <SwipeToUnlock onUnlock={unlock} hint={false} />
    </div>
  );
}

function OneUiHome() {
  const open = useAppOpener();
  const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
  const setScreen = useDevice((s) => s.setScreen);
  const now = useClock();

  return (
    <div className="flex h-full flex-col px-4 pt-2">
      <div className="mb-3 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => setScreen("notifications")}
          className="rounded-[1.7rem] p-3.5 text-left text-white"
          style={{ background: "var(--swatch-weather)" }}
        >
          <Sun className="mb-2 size-7" />
          <p className="text-3xl font-semibold leading-none">72°</p>
          <p className="mt-1 text-status opacity-90">Dallas</p>
          <p className="text-icon-label opacity-80">Clear</p>
        </button>
        <button
          type="button"
          onClick={() => setScreen("notifications")}
          className="rounded-[1.7rem] oneui-soft p-3.5 text-left"
        >
          <p className="text-icon-label text-[var(--skin-muted)]">{formatDateShort(now)}</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums leading-none">
            {formatLockTime(now)}
          </p>
          <p className="mt-3 text-sm font-medium leading-snug">Design review</p>
          <p className="text-icon-label text-[var(--skin-muted)]">Tomorrow 9:30</p>
        </button>
      </div>

      <button
        type="button"
        onClick={() => setScreen("apps")}
        className="oneui-soft mb-4 flex w-full items-center gap-2 rounded-full px-4 py-2.5"
      >
        <Search className="size-4 text-[var(--skin-muted)]" />
        <span className="text-sm text-[var(--skin-muted)]">Search</span>
      </button>

      <div className="grid grid-cols-4 gap-x-2 gap-y-5">
        {HOME_APPS.oneui.map((id) => (
          <AppIcon key={id} app={APP_BY_ID[id]} os="oneui" label onPress={open} />
        ))}
        <FolderIcon
          folderId="daily"
          os="oneui"
          onPress={() => setExpandedFolder("daily")}
        />
        <FolderIcon
          folderId="create"
          os="oneui"
          onPress={() => setExpandedFolder("create")}
        />
        <AppIcon app={APP_BY_ID.clock} os="oneui" label onPress={open} />
        <AppIcon app={APP_BY_ID.settings} os="oneui" label onPress={open} />
      </div>

      <div className="mt-auto flex flex-col items-center gap-2 pb-1">
        <div className="flex gap-1.5">
          <span className="size-1.5 rounded-full bg-white" />
          <span className="size-1.5 rounded-full bg-white/35" />
        </div>
        <div className="flex w-full justify-around px-1 py-1">
          {DOCK_APPS.oneui.map((id) => (
            <AppIcon key={id} app={APP_BY_ID[id]} os="oneui" onPress={open} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SoftPill({
  children,
  className,
  onClick,
  label,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "oneui-soft flex min-w-0 items-center gap-2 overflow-hidden rounded-full px-2.5 py-2.5 text-left text-status font-medium",
        className,
      )}
    >
      {children}
    </button>
  );
}

function DotToggle({
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
        "grid size-11 place-items-center rounded-full transition-colors duration-200",
        active ? "oneui-on" : "bg-white/10 text-[var(--skin-text)]",
      )}
    >
      {children}
    </button>
  );
}

function OneUiControls() {
  const s = useDevice();
  const t = (key: ToggleKey) => () => s.toggle(key);
  const setScreen = useDevice((st) => st.setScreen);

  return (
    <div className="flex h-full min-h-0 flex-col gap-2 overflow-x-hidden overflow-y-auto px-3 pt-1 pb-2">
      <div className="flex items-center justify-end gap-2 px-1">
        <button type="button" aria-label="Edit" className="grid size-8 place-items-center rounded-full oneui-soft">
          <Pencil className="size-3.5" />
        </button>
        <button type="button" aria-label="Power" className="grid size-8 place-items-center rounded-full oneui-soft">
          <Power className="size-3.5" />
        </button>
        <button
          type="button"
          aria-label="Settings"
          className="grid size-8 place-items-center rounded-full oneui-soft"
          onClick={() => setScreen("settings")}
        >
          <Settings className="size-3.5" />
        </button>
      </div>

      <div className="grid min-w-0 grid-cols-2 gap-2">
        <button
          type="button"
          aria-pressed={s.wifi}
          onClick={t("wifi")}
          className={cn(
            "flex min-w-0 items-center gap-2 rounded-full px-2.5 py-2.5 text-left",
            s.wifi ? "oneui-on" : "oneui-soft",
          )}
        >
          <Wifi className="size-5 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate text-status font-semibold">Wi-Fi</span>
            <span className="block truncate text-icon-label opacity-80">
              {s.wifi ? "Studio" : "Off"}
            </span>
          </span>
        </button>
        <button
          type="button"
          aria-pressed={s.bluetooth}
          onClick={t("bluetooth")}
          className={cn(
            "flex min-w-0 items-center gap-2 rounded-full px-2.5 py-2.5 text-left",
            s.bluetooth ? "oneui-on" : "oneui-soft",
          )}
        >
          <Bluetooth className="size-5 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate text-status font-semibold">Bluetooth</span>
            <span className="block truncate text-icon-label opacity-80">
              {s.bluetooth ? "On" : "Off"}
            </span>
          </span>
        </button>
      </div>

      <div className="oneui-soft grid grid-cols-4 gap-3 rounded-[1.7rem] px-3 py-3">
        <DotToggle active={!s.rotationLock} onClick={t("rotationLock")} label="Auto rotate">
          <RotateCw className="size-4" />
        </DotToggle>
        <DotToggle active={s.airplane} onClick={t("airplane")} label="Airplane">
          <Plane className="size-4" />
        </DotToggle>
        <DotToggle active={s.flashlight} onClick={t("flashlight")} label="Flashlight">
          <Flashlight className="size-4" />
        </DotToggle>
        <DotToggle active={s.cellular} onClick={t("cellular")} label="Mobile data">
          <Signal className="size-4" />
        </DotToggle>
        <DotToggle active={s.haptics} onClick={t("haptics")} label="NFC">
          <Nfc className="size-4" />
        </DotToggle>
        <DotToggle active={s.batterySaver} onClick={t("batterySaver")} label="Power saving">
          <Battery className="size-4" />
        </DotToggle>
        <DotToggle active={s.aod} onClick={t("aod")} label="Location">
          <MapPin className="size-4" />
        </DotToggle>
        <DotToggle active={s.hotspot} onClick={t("hotspot")} label="Hotspot">
          <Share2 className="size-4" />
        </DotToggle>
      </div>

      <div className="oneui-soft flex min-w-0 flex-col gap-2.5 rounded-[1.7rem] px-3 py-3">
        <div className="flex items-center gap-2">
          <HorizontalSlider
            value={s.brightness}
            onChange={s.setBrightness}
            label="Brightness"
            className="h-10 min-w-0 flex-1 bg-white/10"
            icon={<Sun className="size-4 text-black/70" />}
          />
          <button
            type="button"
            aria-label="Dark mode"
            aria-pressed={s.theme === "dark"}
            onClick={s.toggleTheme}
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-full",
              s.theme === "dark" ? "oneui-on" : "bg-white/10",
            )}
          >
            <Moon className="size-4" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <HorizontalSlider
            value={s.volume}
            onChange={s.setVolume}
            label="Volume"
            className="h-10 min-w-0 flex-1 bg-white/10"
            icon={<Music2 className="size-4 text-black/70" />}
          />
          <button
            type="button"
            aria-label="Mute"
            onClick={() => s.setVolume(s.volume > 0 ? 0 : 54)}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10"
          >
            <Volume2 className="size-4" />
          </button>
        </div>
      </div>

      <div className="oneui-soft flex items-center justify-between rounded-full px-3 py-2">
        <button
          type="button"
          className="flex items-center gap-2 text-status font-medium"
          onClick={() => s.toggle("mediaPlaying")}
        >
          {s.mediaPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
          {s.mediaPlaying ? TRACK.title : "Play last song"}
        </button>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-icon-label text-[var(--skin-muted)]">
          Media output
        </span>
      </div>

      <div className="grid min-w-0 grid-cols-2 gap-2">
        <SoftPill label="Nearby devices">
          <Share2 className="size-4" />
          Nearby devices
        </SoftPill>
        <SoftPill label="Device control">
          <Cast className="size-4" />
          Device control
        </SoftPill>
        <SoftPill label="Smart View">
          <Cast className="size-4" />
          <span>
            <span className="block">Smart View</span>
            <span className="block text-icon-label font-normal text-[var(--skin-muted)]">
              Mirror screen
            </span>
          </span>
        </SoftPill>
        <SoftPill label="Modes">
          <Moon className="size-4" />
          Modes
        </SoftPill>
      </div>
    </div>
  );
}

function OneUiNotifications() {
  const dismissed = useDevice((s) => s.dismissedNotifs);
  const dismiss = useDevice((s) => s.dismissNotif);
  const restore = useDevice((s) => s.restoreNotifs);
  const now = useClock();
  const items = NOTIFS.filter((n) => !dismissed.includes(n.id));

  return (
    <div className="flex h-full flex-col px-4 pt-1">
      <div className="mb-3 flex items-end justify-between px-1">
        <div>
          <p className="text-3xl font-semibold tabular-nums leading-none">{formatLockTime(now)}</p>
          <p className="mt-1 text-status text-[var(--skin-muted)]">{formatDateShort(now)}</p>
        </div>
        <div className="flex gap-2">
          {dismissed.length > 0 ? (
            <button type="button" className="text-status text-[var(--skin-accent)]" onClick={restore}>
              Restore
            </button>
          ) : (
            <button type="button" className="text-status text-[var(--skin-muted)]" onClick={restore}>
              Clear
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto pb-3">
        {items.length === 0 ? (
          <p className="mt-10 text-center text-sm text-[var(--skin-muted)]">No notifications</p>
        ) : (
          items.map((n) => {
            const app = APP_BY_ID[n.appId];
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => dismiss(n.id)}
                className="oneui-soft flex gap-3 rounded-[1.6rem] p-3.5 text-left"
              >
                <span
                  className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full text-white"
                  style={{ background: `var(--swatch-${app.swatch})` }}
                >
                  <AppGlyph id={app.glyph} className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex justify-between gap-2">
                    <span className="truncate text-sm font-semibold">{n.title}</span>
                    <span className="text-icon-label text-[var(--skin-muted)]">{n.time}</span>
                  </span>
                  <span className="mt-0.5 block text-status text-[var(--skin-muted)]">
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

function OneUiApps() {
  const q = useDevice((s) => s.appSearch);
  const setQ = useDevice((s) => s.setAppSearch);
  const open = useAppOpener();
  const list = APPS.filter((a) => a.name.toLowerCase().includes(q.toLowerCase())).sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="flex h-full flex-col px-4 pt-1">
      <div className="min-h-0 flex-1 overflow-y-auto pb-2">
        <div className="grid grid-cols-4 gap-x-3 gap-y-5 pt-1">
          {list.map((app) => (
            <AppIcon key={app.id} app={app} os="oneui" label onPress={open} />
          ))}
        </div>
      </div>
      <div className="oneui-soft mb-1 flex items-center gap-2 rounded-full px-3 py-2.5">
        <Search className="size-4 text-[var(--skin-muted)]" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
        />
        <MoreHorizontal className="size-4 text-[var(--skin-muted)]" />
      </div>
    </div>
  );
}

function OneUiSettings() {
  const s = useDevice();
  const q = s.settingsSearch;
  const rows = [
    { label: "Connections", sub: s.wifi ? "Wi-Fi · Bluetooth" : "Wi-Fi off", swatch: "mail" as const, Icon: Wifi },
    { label: "Notifications", sub: s.dnd ? "Do not disturb" : "On", swatch: "calendar" as const, Icon: Moon },
    { label: "Display", sub: s.theme === "dark" ? "Dark" : "Light", swatch: "browser" as const, Icon: Sun },
    { label: "Sounds and vibration", sub: s.haptics ? "Haptics on" : "Haptics off", swatch: "clock" as const, Icon: Volume2 },
    { label: "Battery", sub: `${s.battery}%`, swatch: "phone" as const, Icon: Battery },
    { label: "Security", sub: "Lock screen", swatch: "files" as const, Icon: Lock },
  ].filter((r) => r.label.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="flex h-full flex-col overflow-y-auto px-4 pt-1 pb-3">
      <p className="mb-3 text-2xl font-semibold">Settings</p>
      <div className="oneui-soft mb-3 flex items-center gap-2 rounded-full px-3 py-2">
        <Search className="size-4 text-[var(--skin-muted)]" />
        <input
          value={q}
          onChange={(e) => s.setSettingsSearch(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--skin-muted)]"
        />
      </div>
      <div className="oneui-soft mb-3 flex items-center gap-3 rounded-[1.4rem] p-3">
        <span className="grid size-12 place-items-center rounded-full bg-[var(--skin-accent)] text-white">
          <User className="size-5" />
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold">Ada Voss</p>
          <p className="text-icon-label text-[var(--skin-muted)]">One UI 7 · Aether 9</p>
        </div>
        <ChevronRight className="size-4 text-[var(--skin-muted)]" />
      </div>
      <div className="mb-3 flex justify-around px-1">
        {[
          { label: "Connections", Icon: Wifi, swatch: "mail" },
          { label: "Display", Icon: Sun, swatch: "browser" },
          { label: "Battery", Icon: Battery, swatch: "phone" },
          { label: "Sound", Icon: Volume2, swatch: "clock" },
        ].map((c) => (
          <span key={c.label} className="flex flex-col items-center gap-1">
            <span
              className="grid size-12 place-items-center rounded-full text-white"
              style={{ background: `var(--swatch-${c.swatch})` }}
            >
              <c.Icon className="size-5" />
            </span>
            <span className="text-[0.6rem] text-[var(--skin-muted)]">{c.label}</span>
          </span>
        ))}
      </div>
      <div className="oneui-soft overflow-hidden rounded-[1.4rem]">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5",
              i > 0 && "border-t border-white/10",
            )}
          >
            <span
              className="grid size-9 place-items-center rounded-full text-white"
              style={{ background: `var(--swatch-${r.swatch})` }}
            >
              <r.Icon className="size-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm">{r.label}</span>
              <span className="block text-icon-label text-[var(--skin-muted)]">{r.sub}</span>
            </span>
            <ChevronRight className="size-4 text-[var(--skin-muted)]" />
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
          <span className="text-sm">Dark mode</span>
          <button
            type="button"
            aria-pressed={s.theme === "dark"}
            onClick={s.toggleTheme}
            className={cn(
              "h-7 w-12 rounded-full p-0.5 transition-colors duration-200",
              s.theme === "dark" ? "bg-[var(--skin-on)]" : "bg-black/20",
            )}
          >
            <span
              className={cn(
                "block size-6 rounded-full bg-white transition-transform duration-200",
                s.theme === "dark" ? "translate-x-5" : "translate-x-0",
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
