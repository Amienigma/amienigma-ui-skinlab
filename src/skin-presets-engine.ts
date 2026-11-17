/**
 * SkinPresetsEngine - Advanced skin presets, customization, and export system for SkinLab
 * Supports Harmony, One UI, iOS skins with dynamic theming and wallpaper integration.
 * 
 * Daily code addition 2026-11-16
 */

export interface SkinPreset {
  id: string;
  name: string;
  os: 'harmony' | 'oneui' | 'ios';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    accent: string;
  };
  wallpaper?: string;
  icons?: Record<string, string>;
  created: number;
}

export class SkinPresetsEngine {
  private presets: Map<string, SkinPreset> = new Map();
  private activePresetId: string | null = null;

  constructor() {
    this.loadDefaultPresets();
  }

  private loadDefaultPresets() {
    this.addPreset({
      id: 'cybercore-night',
      name: 'Cybercore Night',
      os: 'harmony',
      colors: {
        primary: '#164e57',
        secondary: '#c21e6b',
        background: '#0a0a0a',
        surface: '#1a1a1a',
        accent: '#c21e6b'
      },
      created: Date.now()
    });
    this.addPreset({
      id: 'ios-dark',
      name: 'iOS Dark',
      os: 'ios',
      colors: {
        primary: '#007AFF',
        secondary: '#5856D6',
        background: '#000000',
        surface: '#1C1C1E',
        accent: '#FF2D55'
      },
      created: Date.now()
    });
    this.addPreset({
      id: 'oneui-classic',
      name: 'One UI Classic',
      os: 'oneui',
      colors: {
        primary: '#0381FE',
        secondary: '#FF6B6B',
        background: '#F5F5F5',
        surface: '#FFFFFF',
        accent: '#0381FE'
      },
      created: Date.now()
    });
  }

  addPreset(preset: SkinPreset): void {
    this.presets.set(preset.id, preset);
  }

  getPreset(id: string): SkinPreset | undefined {
    return this.presets.get(id);
  }

  listPresets(os?: string): SkinPreset[] {
    const all = Array.from(this.presets.values());
    if (os) return all.filter(p => p.os === os);
    return all;
  }

  setActive(id: string): boolean {
    if (this.presets.has(id)) {
      this.activePresetId = id;
      return true;
    }
    return false;
  }

  getActive(): SkinPreset | null {
    if (!this.activePresetId) return null;
    return this.presets.get(this.activePresetId) || null;
  }

  updatePreset(id: string, updates: Partial<SkinPreset>): SkinPreset | null {
    const existing = this.presets.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...updates, id }; // prevent id change
    this.presets.set(id, updated);
    return updated;
  }

  deletePreset(id: string): boolean {
    if (this.activePresetId === id) this.activePresetId = null;
    return this.presets.delete(id);
  }

  exportPreset(id: string): string {
    const preset = this.presets.get(id);
    if (!preset) throw new Error('Preset not found');
    return JSON.stringify(preset, null, 2);
  }

  importPreset(json: string): SkinPreset {
    const preset = JSON.parse(json) as SkinPreset;
    if (!preset.id || !preset.name || !preset.os) {
      throw new Error('Invalid preset format');
    }
    this.addPreset(preset);
    return preset;
  }

  generateCSS(preset: SkinPreset): string {
    const c = preset.colors;
    return `
      :root {
        --skin-primary: ${c.primary};
        --skin-secondary: ${c.secondary};
        --skin-background: ${c.background};
        --skin-surface: ${c.surface};
        --skin-accent: ${c.accent};
      }
      .skin-bg { background-color: var(--skin-background); }
      .skin-primary { color: var(--skin-primary); }
      .skin-accent { background-color: var(--skin-accent); }
    `;
  }

  clonePreset(id: string, newName: string): SkinPreset | null {
    const original = this.presets.get(id);
    if (!original) return null;
    const cloned: SkinPreset = {
      ...original,
      id: `${id}-clone-${Date.now()}`,
      name: newName,
      created: Date.now()
    };
    this.addPreset(cloned);
    return cloned;
  }

  getStats() {
    const byOs: Record<string, number> = {};
    this.presets.forEach(p => {
      byOs[p.os] = (byOs[p.os] || 0) + 1;
    });
    return {
      total: this.presets.size,
      byOs,
      active: this.activePresetId
    };
  }
}

export function createSkinPresetsEngine(): SkinPresetsEngine {
  return new SkinPresetsEngine();
}

// Color utility helpers
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

export function lightenColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const amount = percent / 100;
  return rgbToHex(
    Math.min(255, rgb.r + (255 - rgb.r) * amount),
    Math.min(255, rgb.g + (255 - rgb.g) * amount),
    Math.min(255, rgb.b + (255 - rgb.b) * amount)
  );
}

export function darkenColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const amount = 1 - percent / 100;
  return rgbToHex(rgb.r * amount, rgb.g * amount, rgb.b * amount);
}

// End of SkinPresetsEngine
