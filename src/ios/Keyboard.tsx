import React from 'react';
import {useCurrentFrame} from 'remotion';
import {ramp} from './anim';
import {ios} from './theme';

export const KEYBOARD_H = 291;

export type TypingRun = {start: number; text: string; per?: number};
export type KeyboardWindow = {show: number; hide: number};

const KEY_W = 33.3;

const Key: React.FC<{label: React.ReactNode; width?: number; dark?: boolean; pressed?: boolean; small?: boolean; flex?: boolean}> = ({
  label,
  width = KEY_W,
  dark,
  pressed,
  small,
  flex,
}) => (
  <div
    style={{
      position: 'relative',
      width: flex ? undefined : width,
      flex: flex ? 1 : undefined,
      height: 42,
      borderRadius: 7,
      background: dark ? '#ABB0BC' : '#fff',
      boxShadow: '0 1px 0 rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: small ? 16 : 23,
      color: '#000',
    }}
  >
    {label}
    {pressed && (
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: -9,
          right: -9,
          height: 96,
          background: '#fff',
          borderRadius: 10,
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 10,
          fontSize: 34,
        }}
      >
        {label}
      </div>
    )}
  </div>
);

const Shift = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3 3 10.5h4V17h6v-6.5h4z" stroke="#000" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const Delete = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
    <path d="M8 2h13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8L1.5 9z" stroke="#000" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M11.5 6l6 6M17.5 6l-6 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Клавиатура iOS: выезжает в окнах windows, подсвечивает клавиши по ходу набора runs
export const Keyboard: React.FC<{windows: KeyboardWindow[]; runs: TypingRun[]}> = ({windows, runs}) => {
  const frame = useCurrentFrame();
  let y = 1;
  for (const w of windows) {
    if (frame >= w.show && frame < w.hide + 14) y = 1 - ramp(frame, w.show, 12) + ramp(frame, w.hide, 12);
  }
  if (y >= 1) return null;

  let pressed: string | null = null;
  for (const r of runs) {
    const per = r.per ?? 3;
    const d = frame - r.start;
    if (d < 0) continue;
    const i = Math.floor(d / per);
    if (i < r.text.length && d % per < 2) pressed = r.text[i].toLowerCase();
  }

  const row = (keys: string) => keys.split('').map((k) => <Key key={k} label={k} pressed={pressed === k} />);
  const rowStyle: React.CSSProperties = {display: 'flex', justifyContent: 'center', gap: 6, padding: '0 3px'};

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: KEYBOARD_H,
        background: '#D2D5DB',
        transform: `translateY(${y * 100}%)`,
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        fontFamily: ios.font,
        zIndex: 15,
      }}
    >
      <div style={rowStyle}>{row('qwertyuiop')}</div>
      <div style={rowStyle}>{row('asdfghjkl')}</div>
      <div style={{...rowStyle, justifyContent: 'space-between'}}>
        <Key label={<Shift />} width={42} dark />
        <div style={{display: 'flex', gap: 6}}>{row('zxcvbnm')}</div>
        <Key label={<Delete />} width={42} dark />
      </div>
      <div style={{...rowStyle, justifyContent: 'space-between'}}>
        <Key label="123" width={88} dark small />
        <Key label="space" flex small />
        <Key label="return" width={88} dark small />
      </div>
    </div>
  );
};
