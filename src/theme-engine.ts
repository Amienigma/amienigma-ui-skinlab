/**
 * ThemeEngine for SkinLab - Dynamic theme generation, color extraction, and skin application
 */

export interface Theme {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  radius: number;
  shadows: boolean;
  metadata: Record<string, any>;
}

export class ThemeEngine {
  private themes: Map<string, Theme> = new Map();
  private activeTheme: string | null = null;
  private listeners: Set<(theme: Theme) => void> = new Set();

  constructor() {
    this.loadDefaultThemes();
  }

  createTheme(base: Partial<Theme>): string {
    const id = base.id || `theme_${Date.now()}`;
    const theme: Theme = {
      id,
      name: base.name || 'Untitled',
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
        background: '#0f172a',
        surface: '#1e293b',
        text: '#f8fafc',
        textSecondary: '#94a3b8',
        ...base.colors
      },
      fonts: {
        heading: 'Inter',
        body: 'Inter',
        ...base.fonts
      },
      radius: base.radius ?? 12,
      shadows: base.shadows ?? true,
      metadata: base.metadata || {}
    };
    this.themes.set(id, theme);
    return id;
  }

  applyTheme(id: string) {
    const theme = this.themes.get(id);
    if (!theme) return;
    this.activeTheme = id;
    this.applyToDOM(theme);
    this.notify(theme);
  }

  private applyToDOM(theme: Theme) {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    root.style.setProperty('--font-heading', theme.fonts.heading);
    root.style.setProperty('--font-body', theme.fonts.body);
    root.style.setProperty('--radius', `${theme.radius}px`);
  }

  extractFromImage(imageData: ImageData): Partial<Theme['colors']> {
    // Simplified color extraction from canvas ImageData
    const colors = this.quantizeColors(imageData, 5);
    return {
      primary: colors[0] || '#6366f1',
      secondary: colors[1] || '#8b5cf6',
      accent: colors[2] || '#ec4899',
      background: colors[3] || '#0f172a',
      surface: colors[4] || '#1e293b'
    };
  }

  private quantizeColors(data: ImageData, count: number): string[] {
    const buckets: Record<string, number> = {};
    for (let i = 0; i < data.data.length; i += 16) { // sample
      const r = data.data[i];
      const g = data.data[i + 1];
      const b = data.data[i + 2];
      const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
      buckets[hex] = (buckets[hex] || 0) + 1;
    }
    return Object.entries(buckets)
      .sort((a, b) => b[1] - a[1])
      .slice(0, count)
      .map(([hex]) => hex);
  }

  generateHarmony(baseColor: string): Theme['colors'] {
    // Generate complementary / analogous colors
    return {
      primary: baseColor,
      secondary: this.shiftHue(baseColor, 30),
      accent: this.shiftHue(baseColor, 180),
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc',
      textSecondary: '#94a3b8'
    };
  }

  private shiftHue(hex: string, degrees: number): string {
    // Simplified HSL shift placeholder
    return hex; // In real impl use color library
  }

  getActive(): Theme | null {
    return this.activeTheme ? this.themes.get(this.activeTheme) || null : null;
  }

  listThemes(): Theme[] {
    return Array.from(this.themes.values());
  }

  deleteTheme(id: string) {
    this.themes.delete(id);
    if (this.activeTheme === id) this.activeTheme = null;
  }

  subscribe(listener: (theme: Theme) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(theme: Theme) {
    this.listeners.forEach(l => l(theme));
  }

  private loadDefaultThemes() {
    this.createTheme({
      name: 'Midnight',
      colors: { primary: '#6366f1', background: '#0f172a' }
    });
    this.createTheme({
      name: 'Aurora',
      colors: { primary: '#06b6d4', accent: '#a855f7', background: '#0c4a6e' }
    });
    this.createTheme({
      name: 'Ember',
      colors: { primary: '#f97316', secondary: '#ef4444', background: '#1c1917' }
    });
  }

  exportTheme(id: string): string {
    const theme = this.themes.get(id);
    return theme ? JSON.stringify(theme, null, 2) : '';
  }

  importTheme(json: string): string {
    try {
      const theme = JSON.parse(json) as Theme;
      return this.createTheme(theme);
    } catch {
      return '';
    }
  }
}

export default ThemeEngine;
