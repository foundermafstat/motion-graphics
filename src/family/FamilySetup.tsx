import {loadFont} from '@remotion/google-fonts/Inter';
import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {ramp} from '../ios/anim';
import {Keyboard} from '../ios/Keyboard';
import {Phone, PHONE_W} from '../ios/Phone';
import {Stack, StackStep} from '../ios/Stack';
import {brand} from '../ios/theme';
import {AppleAccount} from '../scenes/family/AppleAccount';
import {ChildAccount, PASSWORD_KEYS} from '../scenes/family/ChildAccount';
import {ChildDetail} from '../scenes/family/ChildDetail';
import {ChildIntro} from '../scenes/family/ChildIntro';
import {ChildName} from '../scenes/family/ChildName';
import {ChildReady} from '../scenes/family/ChildReady';
import {FamilyMembers} from '../scenes/family/FamilyMembers';
import {FamilySharingIntro} from '../scenes/family/FamilySharingIntro';
import {InviteMembers} from '../scenes/family/InviteMembers';
import {ParentalControls} from '../scenes/family/ParentalControls';
import {ParentConsent} from '../scenes/family/ParentConsent';
import {ScreenTime} from '../scenes/family/ScreenTime';
import {SettingsRoot} from '../scenes/family/SettingsRoot';
import {Captions} from './Captions';
import {CHILD, T} from './timeline';

const {fontFamily: inter} = loadFont('normal', {weights: ['400', '600', '700'], subsets: ['latin']});

const PHONE_SCALE = 1.7;
const PHONE_TOP = 390;

const PAGES: StackStep[] = [
  {at: 0, transition: 'none', node: <SettingsRoot />},
  {at: T.p2, transition: 'push', node: <AppleAccount />},
  {at: T.p3, transition: 'push', node: <FamilySharingIntro />},
  {at: T.p4, transition: 'push', node: <InviteMembers />},
  // Подменяем экран, пока его закрывает модальное окно
  {at: T.p5, transition: 'none', node: <FamilyMembers />},
  {at: T.p6, transition: 'push', node: <ChildDetail />},
  {at: T.p7, transition: 'push', node: <ScreenTime />},
];

const SHEET: StackStep[] = [
  {at: T.sheetIn, transition: 'none', node: <ChildIntro />},
  {at: T.cs2, transition: 'push', node: <ChildName />},
  {at: T.cs3, transition: 'push', node: <ParentConsent />},
  {at: T.cs4, transition: 'push', node: <ChildAccount />},
  {at: T.cs5, transition: 'push', node: <ParentalControls />},
  {at: T.cs6, transition: 'push', node: <ChildReady />},
];

const KEYBOARD_WINDOWS = [
  {show: T.kb1In, hide: T.kb1Out},
  {show: T.kb2In, hide: T.kb2Out},
];

const TYPING_RUNS = [
  {start: T.typeFirst, text: CHILD.first},
  {start: T.typeLast, text: CHILD.last},
  {start: T.typeEmail, text: CHILD.login},
  {start: T.typePassword, text: PASSWORD_KEYS},
];

export const FamilySetup: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width} = useVideoConfig();
  const enter = spring({frame: frame - 4, fps, config: {damping: 200}, durationInFrames: 34});
  const sheet = ramp(frame, T.sheetIn, 18) - ramp(frame, T.sheetOut, 16);

  return (
    <AbsoluteFill style={{background: brand.bg}}>
      <AbsoluteFill style={{background: 'radial-gradient(ellipse 65% 42% at 50% 64%, rgba(255,90,31,0.20), rgba(255,90,31,0) 70%)'}} />
      <Captions fontFamily={inter} />
      <div
        style={{
          position: 'absolute',
          left: (width - PHONE_W * PHONE_SCALE) / 2,
          top: PHONE_TOP + 240 * (1 - enter),
          opacity: enter,
        }}
      >
        <Phone scale={PHONE_SCALE} statusLight={sheet}>
          {/* Основной стек; при открытии модального окна он уменьшается и уходит вниз */}
          <AbsoluteFill
            style={{
              transformOrigin: '50% 0%',
              transform: `translateY(${47 * sheet}px) scale(${1 - 0.075 * sheet})`,
              borderRadius: 38 * sheet,
              overflow: 'hidden',
            }}
          >
            <Stack steps={PAGES} />
            <AbsoluteFill style={{background: '#000', opacity: 0.25 * sheet, pointerEvents: 'none'}} />
          </AbsoluteFill>
          {sheet > 0 && (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 58,
                bottom: 0,
                transform: `translateY(${(1 - sheet) * 110}%)`,
                borderTopLeftRadius: 38,
                borderTopRightRadius: 38,
                overflow: 'hidden',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
              }}
            >
              <Stack steps={SHEET} />
            </div>
          )}
          <Keyboard windows={KEYBOARD_WINDOWS} runs={TYPING_RUNS} />
        </Phone>
      </div>
    </AbsoluteFill>
  );
};
