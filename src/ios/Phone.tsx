import React from 'react';
import {interpolateColors} from 'remotion';
import {H, ios, STATUS_H, W} from './theme';

const B = 13; // толщина рамки вокруг экрана
export const PHONE_W = W + B * 2;
export const PHONE_H = H + B * 2;

const StatusBar: React.FC<{light: number}> = ({light}) => {
  const c = interpolateColors(light, [0, 1], ['#000', '#fff']);
  const side: React.CSSProperties = {width: 134, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 4};
  return (
    <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: STATUS_H, display: 'flex', justifyContent: 'space-between', zIndex: 20, fontFamily: ios.font, color: c}}>
      <div style={{...side, fontSize: 17, fontWeight: 600, letterSpacing: -0.2}}>9:41</div>
      <div style={{...side, gap: 6}}>
        <svg width="18" height="12" viewBox="0 0 18 12">
          {[3, 5.5, 8, 11].map((h, i) => (
            <rect key={i} x={i * 4.8} y={12 - h} width="3.2" height={h} rx="1" fill={c} />
          ))}
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M1.5 4.2a10 10 0 0 1 14 0M4 6.9a6.4 6.4 0 0 1 9 0" stroke={c} strokeWidth="1.9" strokeLinecap="round" />
          <path d="M6.6 9.5a2.7 2.7 0 0 1 3.8 0L8.5 11.4z" fill={c} />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.8" stroke={c} strokeOpacity="0.4" />
          <rect x="2" y="2" width="18" height="9" rx="2.4" fill={c} />
          <path d="M25 4.5v4a2 2 0 0 0 0-4z" fill={c} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
};

const SideButton: React.FC<{side: 'left' | 'right'; top: number; h: number}> = ({side, top, h}) => (
  <div
    style={{
      position: 'absolute',
      [side]: -3,
      top,
      width: 4,
      height: h,
      borderRadius: 2,
      background: 'linear-gradient(90deg, #2a2a2e, #5a5a60)',
    }}
  />
);

export const Phone: React.FC<{children: React.ReactNode; scale: number; statusLight?: number}> = ({children, scale, statusLight = 0}) => (
  <div style={{width: PHONE_W * scale, height: PHONE_H * scale, position: 'relative'}}>
    <div style={{position: 'absolute', left: 0, top: 0, width: PHONE_W, height: PHONE_H, transform: `scale(${scale})`, transformOrigin: '0 0'}}>
      <SideButton side="left" top={150} h={30} />
      <SideButton side="left" top={212} h={60} />
      <SideButton side="left" top={284} h={60} />
      <SideButton side="right" top={240} h={96} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          boxSizing: 'border-box',
          borderRadius: 68,
          padding: 3,
          background: 'linear-gradient(145deg, #5a5a60 0%, #1d1d20 28%, #2c2c30 72%, #5a5a60 100%)',
          boxShadow: '0 50px 100px rgba(0,0,0,0.55)',
        }}
      >
        <div style={{width: '100%', height: '100%', boxSizing: 'border-box', borderRadius: 65, background: '#000', padding: B - 3}}>
          <div style={{position: 'relative', width: W, height: H, borderRadius: 55, overflow: 'hidden', background: '#000'}}>
            {children}
            <StatusBar light={statusLight} />
            <div style={{position: 'absolute', top: 11, left: (W - 125) / 2, width: 125, height: 37, borderRadius: 19, background: '#000', zIndex: 21}} />
            <div style={{position: 'absolute', bottom: 8, left: (W - 139) / 2, width: 139, height: 5, borderRadius: 3, background: '#000', zIndex: 21}} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
