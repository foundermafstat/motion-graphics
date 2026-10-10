import React from 'react';
import {CHILD, T} from '../../family/timeline';
import {BackButton, Body, Flex, Group, IconCircle, NavBar, OnboardTitle, Page, PrimaryButton, Row, Spacer} from '../../ios/components';
import {Shield} from '../../ios/icons';
import {ios} from '../../ios/theme';

export const ParentConsent: React.FC = () => (
  <Page bg="#fff">
    <NavBar top={8} left={<BackButton />} />
    <Spacer h={24} />
    <div style={{display: 'flex', justifyContent: 'center', flexShrink: 0}}>
      <IconCircle colors={['#5AC8FA', '#007AFF']} size={88}>
        <Shield size={50} />
      </IconCircle>
    </div>
    <Spacer h={22} />
    <OnboardTitle>Parent/Guardian Consent</OnboardTitle>
    <Spacer h={12} />
    <Body>
      Confirm that you’re {CHILD.first}’s parent or legal guardian and agree to the Parent Privacy Disclosure.
    </Body>
    <Spacer h={24} />
    <Group cellBg={ios.bg}>
      <Row title={<span style={{color: ios.blue}}>Parent Privacy Disclosure</span>} chevron />
    </Group>
    <Flex />
    <PrimaryButton label="Agree" tapAt={T.tapAgree} />
    <Spacer h={16} />
    <div style={{textAlign: 'center', fontSize: 17, color: ios.blue, flexShrink: 0}}>Don’t Agree</div>
    <Spacer h={36} />
  </Page>
);
