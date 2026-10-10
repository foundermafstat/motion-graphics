import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {CHILD, T} from '../../family/timeline';
import {ramp} from '../../ios/anim';
import {Body, Flex, OnboardTitle, Page, PrimaryButton, Spacer} from '../../ios/components';
import {ios} from '../../ios/theme';

export const ChildReady: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pop = spring({frame: frame - T.cs6 - 6, fps, config: {damping: 11, stiffness: 160}});
  const draw = ramp(frame, T.cs6 + 14, 14);
  return (
    <Page bg="#fff">
      <Spacer h={120} />
      <div style={{display: 'flex', justifyContent: 'center', flexShrink: 0}}>
        <div style={{width: 110, height: 110, borderRadius: 55, background: ios.green, transform: `scale(${pop})`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
            <path d="M32 56l16 16 32-34" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="72" strokeDashoffset={72 * (1 - draw)} />
          </svg>
        </div>
      </div>
      <Spacer h={30} />
      <OnboardTitle>{CHILD.first} Is Ready</OnboardTitle>
      <Spacer h={12} />
      <Body>
        {CHILD.first} can now sign in on an iPhone or iPad with {CHILD.login}@icloud.com. You’ll manage everything from Family.
      </Body>
      <Flex />
      <PrimaryButton label="Done" tapAt={T.tapDone} />
      <Spacer h={44} />
    </Page>
  );
};
