/**
 * ExportEngine for Amienigma UI SkinLab
 * Exports skins as JSON, CSS variables, themes, and shareable configs.
 */

export interface SkinExport {
  name: string;
  version: string;
  colors: Record<string, string>;
  fonts: Record<string, string>;
  components: Record<string, any>;
  metadata: Record<string, any>;
}

export class ExportEngine {
  exportToJSON(skin: any): string {
    const exportData: SkinExport = {
      name: skin.name || 'Custom Skin',
      version: '1.0',
      colors: skin.colors || {},
      fonts: skin.fonts || {},
      components: skin.components || {},
      metadata: {
        exportedAt: new Date().toISOString(),
        generator: 'SkinLab ExportEngine'
      }
    };
    return JSON.stringify(exportData, null, 2);
  }

  exportToCSS(skin: any): string {
    let css = ':root {\n';
    const colors = skin.colors || {};
    for (const [key, value] of Object.entries(colors)) {
      css += `  --color-${key}: ${value};\n`;
    }
    const fonts = skin.fonts || {};
    for (const [key, value] of Object.entries(fonts)) {
      css += `  --font-${key}: ${value};\n`;
    }
    css += '}\n';
    return css;
  }

  exportTheme(skin: any) {
    return {
      colors: skin.colors,
      typography: skin.fonts,
      spacing: skin.spacing || {},
      radii: skin.radii || {}
    };
  }

  generateShareLink(skin: any): string {
    const data = btoa(JSON.stringify(this.exportToJSON(skin)));
    return `https://skinlab.amienigma.app/share?data=${data.slice(0, 100)}...`;
  }

  importFromJSON(json: string): any {
    try {
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  validateExport(data: any): boolean {
    return data && typeof data === 'object' && data.name && data.colors;
  }

  // Advanced
  exportBatch(skins: any[]): string {
    return JSON.stringify(skins.map(s => JSON.parse(this.exportToJSON(s))), null, 2);
  }

  minifyExport(skin: any): string {
    return JSON.stringify(JSON.parse(this.exportToJSON(skin)));
  }

  diffSkins(a: any, b: any): string[] {
    const diffs: string[] = [];
    const keys = new Set([...Object.keys(a.colors || {}), ...Object.keys(b.colors || {})]);
    for (const k of keys) {
      if ((a.colors || {})[k] !== (b.colors || {})[k]) {
        diffs.push(`color.${k}`);
      }
    }
    return diffs;
  }

  // Utils
  listExportFormats(): string[] {
    return ['json', 'css', 'theme', 'share'];
  }

  // End of ExportEngine
}

export function createExportEngine(): ExportEngine {
  return new ExportEngine();
}

export default ExportEngine;
