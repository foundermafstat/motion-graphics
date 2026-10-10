import {Easing, interpolate} from 'remotion';

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

// 0 → 1 за dur кадров начиная с start
export const ramp = (frame: number, start: number, dur: number, easing = easeOut) =>
  interpolate(frame, [start, start + dur], [0, 1], {...clamp, easing});

// Набор текста: по символу каждые per кадров
export const typed = (text: string, start: number, frame: number, per = 3) =>
  frame < start ? '' : text.slice(0, Math.min(text.length, Math.floor((frame - start) / per) + 1));
