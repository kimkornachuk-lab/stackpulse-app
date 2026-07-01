"use client";

import { useCallback, useRef } from "react";

interface SwipeHandlers {
  onSwipeUp?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeDown?: () => void;
}

interface SwipeConfig {
  threshold?: number;
  preventScroll?: boolean;
}

/**
 * Custom hook for touch swipe gesture detection.
 * Lightweight alternative when Framer Motion drag is overkill.
 */
export function useSwipeGesture(
  handlers: SwipeHandlers,
  config: SwipeConfig = {}
) {
  const { threshold = 50, preventScroll = true } = config;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (preventScroll) {
        e.preventDefault();
      }
    },
    [preventScroll]
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return;

      const deltaX = e.changedTouches[0].clientX - touchStart.current.x;
      const deltaY = e.changedTouches[0].clientY - touchStart.current.y;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX < threshold && absY < threshold) return;

      if (absY > absX) {
        if (deltaY < 0) handlers.onSwipeUp?.();
        else handlers.onSwipeDown?.();
      } else {
        if (deltaX < 0) handlers.onSwipeLeft?.();
        else handlers.onSwipeRight?.();
      }

      touchStart.current = null;
    },
    [handlers, threshold]
  );

  return { onTouchStart, onTouchMove, onTouchEnd };
}
