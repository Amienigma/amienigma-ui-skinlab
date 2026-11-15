/**
 * SkinEngine for SkinLab
 * Dynamic skin application, wallpaper blending, and device chrome simulation.
 * Daily addition 2026-11-14.
 */

export interface Skin {
  id: string;
  name: string;
  platform: 'harmony' | 'oneui' | 'ios';
  wallpaper: string;
  accent: string;
  dark: boolean;
}

export class SkinEngine {
  private skins: Map<string, Skin> = new Map();
  private activeSkin: Skin | null = null;

  constructor() {
    this.loadDefaultSkins();
  }

  private loadDefaultSkins() {
    this.addSkin({
      id: 'harmony-dark',
      name: 'Harmony Night',
      platform: 'harmony',
      wallpaper: '/wallpapers/harmony-dark.jpg',
      accent: '#164e57',
      dark: true
    });
    this.addSkin({
      id: 'oneui-cyber',
      name: 'One UI Cyber',
      platform: 'oneui',
      wallpaper: '/wallpapers/oneui-cyber.jpg',
      accent: '#c21e6b',
      dark: true
    });
    this.addSkin({
      id: 'ios-darkromantic',
      name: 'iOS Dark Romantic',
      platform: 'ios',
      wallpaper: '/wallpapers/ios-gothic.jpg',
      accent: '#8b0000',
      dark: true
    });
  }

  addSkin(skin: Skin) {
    this.skins.set(skin.id, skin);
  }

  applySkin(id: string) {
    const skin = this.skins.get(id);
    if (!skin) return;
    this.activeSkin = skin;
    document.documentElement.style.setProperty('--accent', skin.accent);
    document.body.classList.toggle('dark', skin.dark);
    // Apply wallpaper to device frame
  }

  blendWallpaper(url: string, opacity: number) {
    // CSS blend mode simulation
  }

  getActive() {
    return this.activeSkin;
  }

  listSkins() {
    return Array.from(this.skins.values());
  }
}

export const skinEngine = new SkinEngine();
