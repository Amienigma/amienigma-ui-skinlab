import { useDevice } from "@/store/device-store";
import { HarmonySkin } from "@/components/os/harmony";
import { OneUiSkin } from "@/components/os/oneui";
import { IosSkin } from "@/components/os/ios";
import { Dimmer } from "@/components/os/shared";
import { cn } from "@/lib/utils";

export function PhoneFrame() {
  const os = useDevice((s) => s.os);
  const theme = useDevice((s) => s.theme);
  const flashlight = useDevice((s) => s.flashlight);
  const lock = useDevice((s) => s.lock);
  const setVolume = useDevice((s) => s.setVolume);
  const volume = useDevice((s) => s.volume);

  return (
    <div className="phone-wrap mx-auto">
      <div className="phone">
        <button
          type="button"
          className="phone-btn phone-btn-vol-up"
          aria-label="Volume up"
          onClick={() => setVolume(volume + 8)}
        />
        <button
          type="button"
          className="phone-btn phone-btn-vol-down"
          aria-label="Volume down"
          onClick={() => setVolume(volume - 8)}
        />
        <button
          type="button"
          className="phone-btn phone-btn-power"
          aria-label="Lock"
          onClick={lock}
        />
        <div className="phone-bezel">
          <div
            className="phone-screen"
            data-skin={os}
            data-theme={theme}
          >
            {os === "ios" ? <div className="island" aria-hidden /> : <div className="punch" aria-hidden />}
            <div className={cn("phone-led", flashlight && "on")} aria-hidden />
            {os === "harmony" && <HarmonySkin />}
            {os === "oneui" && <OneUiSkin />}
            {os === "ios" && <IosSkin />}
            <Dimmer />
          </div>
        </div>
      </div>
    </div>
  );
}
