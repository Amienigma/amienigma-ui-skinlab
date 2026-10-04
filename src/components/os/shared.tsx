import { useCallback, useRef, type PointerEvent, type ReactNode } from "react";
import {
  APP_BY_ID,
  FOLDER_BY_ID,
  getApp,
  type AppDef,
  type GlyphId,
} from "@/data/catalog";
import { AppGlyph } from "@/components/icons/glyphs";
import { cn, clamp } from "@/lib/utils";
import { useClock } from "@/hooks/use-clock";
import { useDevice, type OsId } from "@/store/device-store";
import {
  Bluetooth,
  Signal,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Plane,
} from "lucide-react";

export function Wallpaper() {
  const os = useDevice((s) => s.os);
  const theme = useDevice((s) => s.theme);
  const src = `/wallpapers/${os}-${theme}.jpg`;
  return (
    <div
      className="wallpaper"
      style={{ backgroundImage: `url(${src})` }}
      aria-hidden
    />
  );
}

export function Dimmer() {
  const brightness = useDevice((s) => s.brightness);
  const opacity = (1 - brightness / 100) * 0.72;
  return <div className="dimmer" style={{ opacity }} aria-hidden />;
}

export function StatusBar({
  showTime = true,
  light,
}: {
  showTime?: boolean;
  light?: boolean;
}) {
  const now = useClock();
  const wifi = useDevice((s) => s.wifi);
  const cellular = useDevice((s) => s.cellular);
  const airplane = useDevice((s) => s.airplane);
  const battery = useDevice((s) => s.battery);
  const os = useDevice((s) => s.os);
  const color = light ? "text-black/80" : "text-white";

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 text-status font-medium tabular-nums",
        color,
        os === "ios" ? "pt-3.5 h-12" : "pt-3 h-11",
      )}
    >
      <span className={cn("min-w-10", os === "ios" && "pl-1")}>
        {showTime
          ? `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`
          : ""}
      </span>
      <div className="flex items-center gap-1">
        {airplane ? (
          <Plane className="size-3.5" strokeWidth={2.4} />
        ) : (
          <Signal className="size-3.5" strokeWidth={2.4} />
        )}
        {wifi ? (
          <Wifi className="size-3.5" strokeWidth={2.4} />
        ) : (
          <WifiOff className="size-3.5" strokeWidth={2.4} />
        )}
        {!airplane && cellular ? null : null}
        <span className="ml-0.5 text-[0.65rem]">{battery}%</span>
        {battery > 20 ? (
          <Battery className="size-4" strokeWidth={2.2} />
        ) : (
          <BatteryCharging className="size-4" strokeWidth={2.2} />
        )}
      </div>
    </div>
  );
}

export function HomeBar({ onHome }: { onHome?: () => void }) {
  return (
    <button
      type="button"
      aria-label="Home"
      className="relative z-20 flex w-full justify-center pb-1 pt-1"
      onClick={onHome}
    >
      <span className="home-bar" />
    </button>
  );
}

export function AppIcon({
  app,
  os,
  size = "md",
  label,
  onPress,
}: {
  app: AppDef;
  os: OsId;
  size?: "sm" | "md" | "lg";
  label?: boolean;
  onPress?: (app: AppDef) => void;
}) {
  const dim =
    size === "sm" ? "size-8" : size === "lg" ? "size-16" : "h-14 w-14";
  const glyph = size === "sm" ? "size-4" : "size-7";
  const shape =
    os === "ios" ? "icon-squircle" : os === "oneui" ? "icon-circle" : "icon-harmony";

  return (
    <button
      type="button"
      onClick={() => onPress?.(app)}
      className="app-press flex flex-col items-center gap-1 transition-transform duration-150 ease-out"
      aria-label={app.name}
    >
      <span
        className={cn(
          "grid place-items-center text-white shadow-sm",
          dim,
          shape,
        )}
        style={{ background: `var(--swatch-${app.swatch})` }}
      >
        <AppGlyph id={app.glyph} className={glyph} />
      </span>
      {label ? (
        <span className="w-14 truncate text-center text-icon-label font-medium leading-tight drop-shadow-sm">
          {app.name}
        </span>
      ) : null}
    </button>
  );
}

export function FolderIcon({
  folderId,
  os,
  label = true,
  onPress,
}: {
  folderId: string;
  os: OsId;
  label?: boolean;
  onPress?: () => void;
}) {
  const folder = FOLDER_BY_ID[folderId];
  if (!folder) return null;
  const apps = folder.appIds.slice(0, 4).map((id) => APP_BY_ID[id]).filter(Boolean);
  const shape =
    os === "ios"
      ? "icon-squircle"
      : os === "oneui"
        ? "icon-circle"
        : "icon-harmony";

  return (
    <button
      type="button"
      onClick={onPress}
      className="app-press flex flex-col items-center gap-1 transition-transform duration-150 ease-out"
      aria-label={`${folder.name} folder`}
    >
      <span
        className={cn(
          "grid h-14 w-14 grid-cols-2 gap-0.5 p-1.5",
          shape,
          os === "harmony" ? "spatial-card" : os === "ios" ? "liquid-glass" : "oneui-sheet",
        )}
      >
        {apps.map((a) => (
          <span
            key={a.id}
            className={cn(
              "grid place-items-center text-white",
              os === "oneui" ? "rounded-full" : "rounded-[5px]",
            )}
            style={{ background: `var(--swatch-${a.swatch})` }}
          >
            <AppGlyph id={a.glyph} className="size-3" />
          </span>
        ))}
      </span>
      {label ? (
        <span className="w-14 truncate text-center text-icon-label font-medium leading-tight drop-shadow-sm">
          {folder.name}
        </span>
      ) : null}
    </button>
  );
}

export function useAppOpener() {
  const setScreen = useDevice((s) => s.setScreen);
  const setOpenApp = useDevice((s) => s.setOpenApp);
  const toggle = useDevice((s) => s.toggle);
  const setExpandedFolder = useDevice((s) => s.setExpandedFolder);

  return useCallback(
    (app: AppDef) => {
      setExpandedFolder(null);
      if (app.id === "settings") {
        setScreen("settings");
        return;
      }
      if (app.id === "music") {
        toggle("mediaPlaying");
        return;
      }
      setOpenApp(app.id);
    },
    [setExpandedFolder, setOpenApp, setScreen, toggle],
  );
}

export function VerticalSlider({
  value,
  onChange,
  label,
  icon,
  fillClass,
  className,
}: {
  value: number;
  onChange: (n: number) => void;
  label: string;
  icon?: ReactNode;
  fillClass?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const apply = (clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const t = 1 - (clientY - rect.top) / rect.height;
    onChange(Math.round(clamp(t, 0, 1) * 100));
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    apply(e.clientY);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    apply(e.clientY);
  };

  return (
    <div
      ref={ref}
      role="slider"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      tabIndex={0}
      className={cn("vslider h-full w-full rounded-[1.6rem]", className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div
        className={cn("vslider-fill", fillClass ?? "bg-white")}
        style={{ height: `${value}%` }}
      />
      {icon ? (
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
          {icon}
        </div>
      ) : null}
    </div>
  );
}

export function HorizontalSlider({
  value,
  onChange,
  label,
  icon,
  className,
}: {
  value: number;
  onChange: (n: number) => void;
  label: string;
  icon?: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const apply = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const t = (clientX - rect.left) / rect.width;
    onChange(Math.round(clamp(t, 0, 1) * 100));
  };
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    apply(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    apply(e.clientX);
  };

  return (
    <div
      ref={ref}
      role="slider"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      tabIndex={0}
      className={cn("relative h-12 min-w-0 overflow-hidden rounded-full", className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div
        className="absolute inset-y-0 left-0 bg-white"
        style={{ width: `${value}%` }}
      />
      {icon ? (
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
          {icon}
        </div>
      ) : null}
    </div>
  );
}

export function SwipeToUnlock({
  onUnlock,
  hint = true,
}: {
  onUnlock: () => void;
  hint?: boolean;
}) {
  const startY = useRef<number | null>(null);
  const lastDy = useRef(0);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    startY.current = e.clientY;
    lastDy.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (startY.current == null) return;
    lastDy.current = e.clientY - startY.current;
  };
  const onPointerUp = () => {
    if (lastDy.current < -56) onUnlock();
    startY.current = null;
    lastDy.current = 0;
  };

  return (
    <div
      className="absolute inset-x-0 bottom-0 z-30 flex h-16 flex-col items-center justify-end pb-5"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {hint ? (
        <div className="unlock-hint text-status font-medium tracking-wide opacity-80">
          Swipe up to open
        </div>
      ) : (
        <span className="sr-only">Swipe up to open</span>
      )}
    </div>
  );
}

export function FolderOverlay({ os }: { os: OsId }) {
  const expandedFolder = useDevice((s) => s.expandedFolder);
  const setExpandedFolder = useDevice((s) => s.setExpandedFolder);
  const open = useAppOpener();
  if (!expandedFolder) return null;
  const folder = FOLDER_BY_ID[expandedFolder];
  if (!folder) return null;
  const apps = folder.appIds.map((id) => APP_BY_ID[id]).filter(Boolean);

  return (
    <div
      className="folder-scrim absolute inset-0 z-40 flex items-center justify-center px-6"
      onClick={() => setExpandedFolder(null)}
      role="presentation"
    >
      <div
        className={cn(
          "w-full max-w-64 p-5",
          os === "harmony" && "spatial-card rounded-[2rem]",
          os === "oneui" && "oneui-sheet rounded-[2.2rem]",
          os === "ios" && "liquid-glass rounded-[1.75rem]",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-4 text-center text-os-title font-semibold">{folder.name}</p>
        <div className="grid grid-cols-3 gap-x-3 gap-y-4">
          {apps.map((app) => (
            <AppIcon key={app.id} app={app} os={os} label onPress={open} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function MiniAppStage() {
  const openApp = useDevice((s) => s.openApp);
  const setOpenApp = useDevice((s) => s.setOpenApp);
  const os = useDevice((s) => s.os);
  if (!openApp) return null;
  const app = getApp(openApp);

  return (
    <div className="absolute inset-0 z-40 flex flex-col bg-black/80 backdrop-blur-2xl">
      <div
        className="flex items-end px-5 pb-3 pt-12"
        style={{ background: `var(--swatch-${app.swatch})` }}
      >
        <div className="flex items-center gap-3 text-white">
          <AppGlyph id={app.glyph as GlyphId} className="size-7" />
          <p className="text-lg font-semibold">{app.name}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center text-white">
        <p className="text-os-body text-white/80">
          A preview surface for {app.name}. Full apps live outside the lab.
        </p>
        <button
          type="button"
          onClick={() => setOpenApp(null)}
          className={cn(
            "mt-2 px-5 py-2.5 text-sm font-medium text-white app-press",
            os === "oneui" ? "rounded-full" : "rounded-2xl",
            os === "ios" ? "liquid-glass" : os === "harmony" ? "spatial-card" : "bg-white/15",
          )}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function SignalCluster() {
  const wifi = useDevice((s) => s.wifi);
  const bluetooth = useDevice((s) => s.bluetooth);
  return (
    <div className="flex items-center gap-1.5">
      {wifi ? <Wifi className="size-3.5" /> : null}
      {bluetooth ? <Bluetooth className="size-3.5" /> : null}
    </div>
  );
}
