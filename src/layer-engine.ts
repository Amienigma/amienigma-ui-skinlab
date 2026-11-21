/**
 * LayerEngine for SkinLab
 * Manages layered skin elements: base, overlays, icons, status bar,
 * with blending modes, opacity, and ordering.
 *
 * @module LayerEngine
 * @version 1.0.0
 * @date 2026-11-20
 */

export interface Layer {
  id: string;
  name: string;
  type: 'base' | 'overlay' | 'icon' | 'status' | 'custom';
  opacity: number;
  blendMode: string;
  visible: boolean;
  zIndex: number;
  data: any;
}

export class LayerEngine {
  private layers: Map<string, Layer> = new Map();
  private order: string[] = [];

  addLayer(layer: Omit<Layer, 'zIndex'> & { zIndex?: number }): Layer {
    const full: Layer = {
      zIndex: this.order.length,
      ...layer,
    };
    this.layers.set(full.id, full);
    this.order.push(full.id);
    this.reorder();
    return full;
  }

  removeLayer(id: string) {
    this.layers.delete(id);
    this.order = this.order.filter(i => i !== id);
    this.reorder();
  }

  updateLayer(id: string, updates: Partial<Layer>) {
    const layer = this.layers.get(id);
    if (layer) {
      Object.assign(layer, updates);
    }
  }

  setOpacity(id: string, opacity: number) {
    this.updateLayer(id, { opacity: Math.max(0, Math.min(1, opacity)) });
  }

  setBlendMode(id: string, mode: string) {
    this.updateLayer(id, { blendMode: mode });
  }

  setVisible(id: string, visible: boolean) {
    this.updateLayer(id, { visible });
  }

  moveLayer(id: string, direction: 'up' | 'down') {
    const idx = this.order.indexOf(id);
    if (idx === -1) return;
    if (direction === 'up' && idx < this.order.length - 1) {
      [this.order[idx], this.order[idx + 1]] = [this.order[idx + 1], this.order[idx]];
    } else if (direction === 'down' && idx > 0) {
      [this.order[idx], this.order[idx - 1]] = [this.order[idx - 1], this.order[idx]];
    }
    this.reorder();
  }

  private reorder() {
    this.order.forEach((id, i) => {
      const layer = this.layers.get(id);
      if (layer) layer.zIndex = i;
    });
  }

  getVisibleLayers(): Layer[] {
    return this.order
      .map(id => this.layers.get(id)!)
      .filter(l => l.visible)
      .sort((a, b) => a.zIndex - b.zIndex);
  }

  getAllLayers(): Layer[] {
    return this.order.map(id => this.layers.get(id)!);
  }

  clear() {
    this.layers.clear();
    this.order = [];
  }

  export() {
    return {
      layers: this.getAllLayers(),
      order: [...this.order],
    };
  }

  import(data: { layers: Layer[]; order: string[] }) {
    this.clear();
    data.layers.forEach(l => this.layers.set(l.id, l));
    this.order = data.order;
    this.reorder();
  }

  getStats() {
    return {
      total: this.layers.size,
      visible: this.getVisibleLayers().length,
    };
  }
}

export default LayerEngine;
