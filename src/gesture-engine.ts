/**
 * GestureEngine for SkinLab
 * Multi-touch gesture recognition, swipe detection, and pinch-zoom
 * for interactive phone skin studio controls.
 */

export interface GestureEvent {
  type: 'swipe' | 'pinch' | 'tap' | 'longpress' | 'rotate';
  direction?: 'up' | 'down' | 'left' | 'right';
  deltaX?: number;
  deltaY?: number;
  scale?: number;
  rotation?: number;
  velocity?: number;
  timestamp: number;
}

export class GestureEngine {
  private element: HTMLElement | null = null;
  private startTouches: Touch[] = [];
  private lastTouches: Touch[] = [];
  private listeners: ((e: GestureEvent) => void)[] = [];
  private longPressTimer: number | null = null;
  private isPinching = false;

  attach(element: HTMLElement) {
    this.element = element;
    element.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: true });
    element.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: true });
    element.addEventListener('touchend', this.onTouchEnd.bind(this), { passive: true });
  }

  detach() {
    if (!this.element) return;
    this.element.removeEventListener('touchstart', this.onTouchStart.bind(this));
    this.element.removeEventListener('touchmove', this.onTouchMove.bind(this));
    this.element.removeEventListener('touchend', this.onTouchEnd.bind(this));
    this.element = null;
  }

  on(callback: (e: GestureEvent) => void) {
    this.listeners.push(callback);
  }

  private emit(event: GestureEvent) {
    this.listeners.forEach(l => l(event));
  }

  private onTouchStart(e: TouchEvent) {
    this.startTouches = Array.from(e.touches);
    this.lastTouches = Array.from(e.touches);
    if (e.touches.length === 1) {
      this.longPressTimer = window.setTimeout(() => {
        this.emit({ type: 'longpress', timestamp: Date.now() });
      }, 500);
    }
  }

  private onTouchMove(e: TouchEvent) {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
    const touches = Array.from(e.touches);
    if (touches.length === 2 && this.startTouches.length === 2) {
      this.handlePinch(touches);
    }
    this.lastTouches = touches;
  }

  private onTouchEnd(e: TouchEvent) {
    if (this.longPressTimer) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
    if (this.startTouches.length === 1 && e.changedTouches.length === 1) {
      this.handleSwipe(e.changedTouches[0]);
    }
    this.startTouches = [];
    this.isPinching = false;
  }

  private handleSwipe(touch: Touch) {
    if (this.startTouches.length === 0) return;
    const start = this.startTouches[0];
    const dx = touch.clientX - start.clientX;
    const dy = touch.clientY - start.clientY;
    const dist = Math.hypot(dx, dy);
    if (dist < 30) {
      this.emit({ type: 'tap', timestamp: Date.now() });
      return;
    }
    let direction: GestureEvent['direction'] = 'right';
    if (Math.abs(dx) > Math.abs(dy)) {
      direction = dx > 0 ? 'right' : 'left';
    } else {
      direction = dy > 0 ? 'down' : 'up';
    }
    this.emit({
      type: 'swipe',
      direction,
      deltaX: dx,
      deltaY: dy,
      velocity: dist / 200,
      timestamp: Date.now()
    });
  }

  private handlePinch(touches: Touch[]) {
    const startDist = this.distance(this.startTouches[0], this.startTouches[1]);
    const currentDist = this.distance(touches[0], touches[1]);
    const scale = currentDist / startDist;
    this.isPinching = true;
    this.emit({
      type: 'pinch',
      scale,
      timestamp: Date.now()
    });
  }

  private distance(a: Touch, b: Touch): number {
    return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  }

  // Additional gesture utilities
  simulateSwipe(direction: 'up' | 'down' | 'left' | 'right') {
    this.emit({
      type: 'swipe',
      direction,
      deltaX: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      deltaY: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
      timestamp: Date.now()
    });
  }

  getListenerCount(): number {
    return this.listeners.length;
  }

  clearListeners() {
    this.listeners = [];
  }
}

export function createGestureEngine(): GestureEngine {
  return new GestureEngine();
}

export default GestureEngine;
