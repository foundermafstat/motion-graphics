import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {ramp} from '../ios/anim';
import {brand} from '../ios/theme';
import {Caption, CAPTIONS, TOTAL_STEPS} from './timeline';

const CaptionBlock: React.FC<{c: Caption; enter: number; subEnter: number; exit: number; fontFamily: string}> = ({c, enter, subEnter, exit, fontFamily}) => (
  <AbsoluteFill
    style={{
      top: 70,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 70px',
      fontFamily,
      color: brand.text,
      opacity: 1 - exit,
      transform: `translateY(${-30 * exit}px)`,
    }}
  >
    {c.step !== undefined && (
      <div style={{fontSize: 26, fontWeight: 700, letterSpacing: 5, color: brand.accent, marginBottom: 18, opacity: enter, transform: `translateY(${20 * (1 - enter)}px)`}}>
        STEP {c.step} OF {TOTAL_STEPS}
      </div>
    )}
    <div
      style={{
        fontSize: c.step === undefined ? 72 : 62,
        fontWeight: 700,
        letterSpacing: -1.5,
        lineHeight: 1.05,
        opacity: enter,
        transform: `translateY(${36 * (1 - enter)}px)`,
      }}
    >
      {c.title}
    </div>
    <div style={{fontSize: 34, marginTop: 16, color: 'rgba(245,245,240,0.62)', opacity: subEnter, transform: `translateY(${30 * (1 - subEnter)}px)`}}>
      {c.sub}
    </div>
  </AbsoluteFill>
);

export const Captions: React.FC<{fontFamily: string}> = ({fontFamily}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  let idx = 0;
  CAPTIONS.forEach((c, i) => {
    if (c.at <= frame) idx = i;
  });
  const cur = CAPTIONS[idx];
  const prev = idx > 0 ? CAPTIONS[idx - 1] : null;
  // Новая подпись появляется после того, как старая ушла
  const delay = prev ? 6 : 0;
  const sp = (d: number) => spring({frame: frame - cur.at - delay - d, fps, config: {damping: 200}, durationInFrames: 20});
  const prevExit = ramp(frame, cur.at, 8);
  return (
    <>
      {prev && prevExit < 1 && <CaptionBlock c={prev} enter={1} subEnter={1} exit={prevExit} fontFamily={fontFamily} />}
      <CaptionBlock c={cur} enter={sp(0)} subEnter={sp(4)} exit={0} fontFamily={fontFamily} />
    </>
  );
};
