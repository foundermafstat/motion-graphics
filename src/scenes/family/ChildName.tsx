import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CHILD, T} from '../../family/timeline';
import {typed} from '../../ios/anim';
import {BackButton, Body, FieldRow, GlassPill, Group, NavBar, OnboardTitle, Page, Row, Spacer, Tap} from '../../ios/components';
import {ios} from '../../ios/theme';

export const ChildName: React.FC = () => {
  const frame = useCurrentFrame();
  const first = typed(CHILD.first, T.typeFirst, frame);
  const last = typed(CHILD.last, T.typeLast, frame);
  const birthdaySet = frame >= T.birthdaySet;
  return (
    <Page>
      <NavBar
        top={8}
        left={<BackButton />}
        right={
          <Tap at={T.tapNext1} radius={22}>
            <GlassPill color={birthdaySet ? ios.blue : ios.tertiary}>Next</GlassPill>
          </Tap>
        }
      />
      <Spacer h={10} />
      <OnboardTitle>Child’s Name & Birthday</OnboardTitle>
      <Spacer h={10} />
      <Body>Enter your child’s name and date of birth. The birthday can’t be changed later.</Body>
      <Spacer h={26} />
      <Group inset={20}>
        <Tap at={T.tapFirst} highlight={false} x="45%">
          <FieldRow label="First" value={first} placeholder="Required" active={frame >= T.tapFirst && frame < T.tapLast} />
        </Tap>
        <Tap at={T.tapLast} highlight={false} x="45%">
          <FieldRow label="Last" value={last} placeholder="Required" active={frame >= T.tapLast && frame < T.tapBirthday} />
        </Tap>
        <Tap at={T.tapBirthday} x="70%">
          <div style={{padding: '0 4px'}}>
            <Row title="Birthday" detail={<span style={{color: birthdaySet ? ios.blue : ios.tertiary}}>{birthdaySet ? CHILD.birthday : 'Required'}</span>} />
          </div>
        </Tap>
      </Group>
    </Page>
  );
};
