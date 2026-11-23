/**
 * ColorEngine for SkinLab
 * Advanced color manipulation, palette generation, contrast checking, and gradient creation.
 * Supports Harmony, One UI, and iOS aesthetic color systems.
 * Added 2026-11-22 as daily code addition.
 */

export interface Color {
  r: number;
  g: number;
  b: number;
  a?: number;
  hex: string;
  hsl: { h: number; s: number; l: number };
}

export interface Palette {
  id: string;
  name: string;
  colors: Color[];
  primary: Color;
  secondary: Color;
  accent: Color;
}

export class ColorEngine {
  private palettes: Map<string, Palette> = new Map();
  private history: string[] = [];
  private maxHistory = 50;

  constructor() {
    this.init();
  }

  private init() {
    this.loadDefaultPalettes();
    console.log('ColorEngine initialized');
  }

  private loadDefaultPalettes() {
    this.createPalette('harmony-night', 'Harmony Night', [
      this.hexToColor('#007DFF'),
      this.hexToColor('#00C4FF'),
      this.hexToColor('#FF6B9D'),
      this.hexToColor('#1A1A1A'),
      this.hexToColor('#FFFFFF')
    ]);
    this.createPalette('oneui-dark', 'One UI Dark', [
      this.hexToColor('#1A73E8'),
      this.hexToColor('#BB86FC'),
      this.hexToColor('#03DAC6'),
      this.hexToColor('#121212'),
      this.hexToColor('#E8EAED')
    ]);
    this.createPalette('ios-dark', 'iOS Dark', [
      this.hexToColor('#0A84FF'),
      this.hexToColor('#FF375F'),
      this.hexToColor('#30D158'),
      this.hexToColor('#000000'),
      this.hexToColor('#FFFFFF')
    ]);
  }

  hexToColor(hex: string): Color {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.substr(0, 2), 16);
    const g = parseInt(clean.substr(2, 2), 16);
    const b = parseInt(clean.substr(4, 2), 16);
    return {
      r, g, b,
      hex: `#${clean.toUpperCase()}`,
      hsl: this.rgbToHsl(r, g, b)
    };
  }

  rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  hslToHex(h: number, s: number, l: number): string {
    s /= 100; l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
  }

  createPalette(id: string, name: string, colors: Color[]): Palette {
    const palette: Palette = {
      id,
      name,
      colors,
      primary: colors[0] || this.hexToColor('#000000'),
      secondary: colors[1] || colors[0] || this.hexToColor('#000000'),
      accent: colors[2] || colors[0] || this.hexToColor('#000000')
    };
    this.palettes.set(id, palette);
    this.addToHistory(id);
    return palette;
  }

  generateComplementary(baseHex: string): Color[] {
    const base = this.hexToColor(baseHex);
    const complementaryHue = (base.hsl.h + 180) % 360;
    return [
      base,
      this.hexToColor(this.hslToHex(complementaryHue, base.hsl.s, base.hsl.l)),
      this.hexToColor(this.hslToHex(complementaryHue, base.hsl.s * 0.7, base.hsl.l * 1.1))
    ];
  }

  generateAnalogous(baseHex: string, count = 5): Color[] {
    const base = this.hexToColor(baseHex);
    const colors: Color[] = [];
    const step = 30;
    for (let i = -Math.floor(count / 2); i <= Math.floor(count / 2); i++) {
      const hue = (base.hsl.h + i * step + 360) % 360;
      colors.push(this.hexToColor(this.hslToHex(hue, base.hsl.s, base.hsl.l)));
    }
    return colors;
  }

  generateTriadic(baseHex: string): Color[] {
    const base = this.hexToColor(baseHex);
    return [
      base,
      this.hexToColor(this.hslToHex((base.hsl.h + 120) % 360, base.hsl.s, base.hsl.l)),
      this.hexToColor(this.hslToHex((base.hsl.h + 240) % 360, base.hsl.s, base.hsl.l))
    ];
  }

  checkContrast(color1: string, color2: string): number {
    const c1 = this.hexToColor(color1);
    const c2 = this.hexToColor(color2);
    const l1 = this.relativeLuminance(c1);
    const l2 = this.relativeLuminance(c2);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  private relativeLuminance(color: Color): number {
    const rs = color.r / 255;
    const gs = color.g / 255;
    const bs = color.b / 255;
    const r = rs <= 0.03928 ? rs / 12.92 : Math.pow((rs + 0.055) / 1.055, 2.4);
    const g = gs <= 0.03928 ? gs / 12.92 : Math.pow((gs + 0.055) / 1.055, 2.4);
    const b = bs <= 0.03928 ? bs / 12.92 : Math.pow((bs + 0.055) / 1.055, 2.4);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  isAccessible(fg: string, bg: string, level: 'AA' | 'AAA' = 'AA'): boolean {
    const ratio = this.checkContrast(fg, bg);
    return level === 'AAA' ? ratio >= 7 : ratio >= 4.5;
  }

  createGradient(color1: string, color2: string, steps = 5): string[] {
    const c1 = this.hexToColor(color1);
    const c2 = this.hexToColor(color2);
    const gradient: string[] = [];
    for (let i = 0; i < steps; i++) {
      const factor = i / (steps - 1);
      const r = Math.round(c1.r + (c2.r - c1.r) * factor);
      const g = Math.round(c1.g + (c2.g - c1.g) * factor);
      const b = Math.round(c1.b + (c2.b - c1.b) * factor);
      gradient.push(`#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase());
    }
    return gradient;
  }

  getPalette(id: string): Palette | undefined {
    return this.palettes.get(id);
  }

  listPalettes(): Palette[] {
    return Array.from(this.palettes.values());
  }

  private addToHistory(id: string) {
    this.history.unshift(id);
    if (this.history.length > this.maxHistory) this.history.pop();
  }

  getHistory(): string[] {
    return [...this.history];
  }

  getStats() {
    return {
      paletteCount: this.palettes.size,
      historyLength: this.history.length
    };
  }

  version = '1.0.0';
  description = 'Advanced color and palette system for SkinLab';
}

export default ColorEngine;
