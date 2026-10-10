import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CHILD, T} from '../../family/timeline';
import {typed} from '../../ios/anim';
import {BackButton, Body, FieldRow, GlassPill, Group, NavBar, OnboardTitle, Page, Spacer, Tap} from '../../ios/components';
import {ios} from '../../ios/theme';

export const PASSWORD_KEYS = 'sunshine';

export const ChildAccount: React.FC = () => {
  const frame = useCurrentFrame();
  const email = typed(CHILD.login, T.typeEmail, frame);
  const dots = typed(PASSWORD_KEYS, T.typePassword, frame).length;
  const ready = dots === PASSWORD_KEYS.length;
  return (
    <Page>
      <NavBar
        top={8}
        left={<BackButton />}
        right={
          <Tap at={T.tapNext2} radius={22}>
            <GlassPill color={ready ? ios.blue : ios.tertiary}>Next</GlassPill>
          </Tap>
        }
      />
      <Spacer h={10} />
      <OnboardTitle>Create Apple Account</OnboardTitle>
      <Spacer h={10} />
      <Body>{CHILD.first} will use this email address to sign in to iCloud, the App Store, and more.</Body>
      <Spacer h={26} />
      <Group inset={20} footer="Use at least 8 characters, including a number and both uppercase and lowercase letters.">
        <Tap at={T.tapEmail} highlight={false} x="45%">
          <FieldRow label="Email" value={email} placeholder="name" suffix="@icloud.com" active={frame >= T.tapEmail && frame < T.tapPassword} />
        </Tap>
        <Tap at={T.tapPassword} highlight={false} x="45%">
          <FieldRow label="Password" value={'•'.repeat(dots)} placeholder="Required" active={frame >= T.tapPassword && frame < T.kb2Out} />
        </Tap>
      </Group>
    </Page>
  );
};
