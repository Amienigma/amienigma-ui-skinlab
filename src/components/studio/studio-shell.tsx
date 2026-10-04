import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { PhoneFrame } from "./phone-frame";
import { OS_META, SCREENS, useDevice, type OsId } from "@/store/device-store";

const OS_ORDER: OsId[] = ["harmony", "oneui", "ios"];

export function StudioShell() {
  const os = useDevice((s) => s.os);
  const screen = useDevice((s) => s.screen);
  const theme = useDevice((s) => s.theme);
  const setOs = useDevice((s) => s.setOs);
  const setScreen = useDevice((s) => s.setScreen);
  const toggleTheme = useDevice((s) => s.toggleTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const meta = OS_META[os];

  return (
    <main className="studio-spot min-h-dvh" data-theme={theme}>
      <div className="mx-auto flex min-h-dvh max-w-5xl flex-col px-3 pb-3 pt-3 md:px-8 md:pb-6 md:pt-5">
        <header className="mb-2.5 flex items-center justify-between gap-2 md:mb-4 md:items-start">
          <div className="min-w-0">
            <p className="font-display text-xl font-semibold tracking-tight md:text-3xl">
              SkinLab
            </p>
            <p className="mt-0.5 hidden max-w-xs text-sm text-muted md:block">{meta.line}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="seg">
              {OS_ORDER.map((id) => (
                <button
                  key={id}
                  type="button"
                  data-active={os === id}
                  onClick={() => setOs(id)}
                >
                  {OS_META[id].name}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-fg app-press md:size-11"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          </div>
        </header>

        <div className="chip-row mb-3 md:mb-4">
          {SCREENS.map((sc) => (
            <button
              key={sc.id}
              type="button"
              data-active={screen === sc.id}
              onClick={() => setScreen(sc.id)}
            >
              {sc.label}
            </button>
          ))}
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <PhoneFrame />
          <p className="mt-3 hidden text-center text-status text-muted md:block">
            {meta.name} {meta.version}
            <span className="mx-1.5 text-subtle">·</span>
            {meta.line}
          </p>
        </div>
      </div>
    </main>
  );
}
