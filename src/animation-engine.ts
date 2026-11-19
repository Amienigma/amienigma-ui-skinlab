/**
 * AnimationEngine for SkinLab
 * Provides easing functions, keyframe timelines, and skin transition
 * helpers for Harmony / One UI / iOS style phone skins.
 * 
 * @version 1.0.0
 * @date 2026-11-18
 */

export type Easing = (t: number) => number;

export const Easings = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeInOutCubic: (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  easeOutElastic: (t: number) => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },
};

export interface Keyframe {
  time: number; // 0-1
  properties: Record<string, number | string>;
}

export class AnimationEngine {
  private timelines = new Map<string, { keyframes: Keyframe[]; duration: number; easing: Easing }>();

  createTimeline(id: string, durationMs: number, easing: Easing = Easings.easeInOutCubic) {
    this.timelines.set(id, { keyframes: [], duration: durationMs, easing });
    return this;
  }

  addKeyframe(id: string, time: number, properties: Record<string, number | string>) {
    const tl = this.timelines.get(id);
    if (!tl) throw new Error("Timeline not found");
    tl.keyframes.push({ time, properties });
    tl.keyframes.sort((a, b) => a.time - b.time);
    return this;
  }

  sample(id: string, progress: number): Record<string, number | string> {
    const tl = this.timelines.get(id);
    if (!tl || tl.keyframes.length === 0) return {};
    const eased = tl.easing(Math.max(0, Math.min(1, progress)));
    // Find surrounding keyframes
    let prev = tl.keyframes[0];
    let next = tl.keyframes[tl.keyframes.length - 1];
    for (let i = 0; i < tl.keyframes.length - 1; i++) {
      if (eased >= tl.keyframes[i].time && eased <= tl.keyframes[i + 1].time) {
        prev = tl.keyframes[i];
        next = tl.keyframes[i + 1];
        break;
      }
    }
    const span = next.time - prev.time || 1;
    const local = (eased - prev.time) / span;
    const result: Record<string, number | string> = {};
    const allKeys = new Set([...Object.keys(prev.properties), ...Object.keys(next.properties)]);
    allKeys.forEach((key) => {
      const a = prev.properties[key];
      const b = next.properties[key];
      if (typeof a === "number" && typeof b === "number") {
        result[key] = a + (b - a) * local;
      } else {
        result[key] = eased < 0.5 ? a : b;
      }
    });
    return result;
  }

  // Preset skin transitions
  static skinFadeIn() {
    const eng = new AnimationEngine();
    eng.createTimeline("fade", 300)
      .addKeyframe("fade", 0, { opacity: 0, scale: 0.96 })
      .addKeyframe("fade", 1, { opacity: 1, scale: 1 });
    return eng;
  }
}

export default AnimationEngine;
