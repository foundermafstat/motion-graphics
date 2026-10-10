import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {ramp} from './anim';

export const PUSH_DURATION = 16;

export type StackStep = {at: number; transition: 'push' | 'none'; node: React.ReactNode};

// Навигационный стек iOS: новый экран въезжает справа, предыдущий уходит на 30% влево
export const Stack: React.FC<{steps: StackStep[]}> = ({steps}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill>
      {steps.map((step, i) => {
        const next = steps[i + 1];
        if (frame < step.at) return null;
        if (next && frame >= next.at + PUSH_DURATION) return null;
        const enter = step.transition === 'push' ? ramp(frame, step.at, PUSH_DURATION) : 1;
        const exit = next?.transition === 'push' ? ramp(frame, next.at, PUSH_DURATION) : 0;
        return (
          <AbsoluteFill
            key={i}
            style={{
              transform: `translateX(${(1 - enter) * 100 - exit * 30}%)`,
              boxShadow: enter < 1 ? '-10px 0 30px rgba(0,0,0,0.15)' : undefined,
            }}
          >
            {step.node}
            {exit > 0 && <AbsoluteFill style={{background: '#000', opacity: exit * 0.08}} />}
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};
