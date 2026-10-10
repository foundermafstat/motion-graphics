import React from 'react';
import {T} from '../../family/timeline';
import {Body, Flex, GlassPill, IconCircle, NavBar, OnboardTitle, Page, PrimaryButton, Spacer} from '../../ios/components';
import {Person} from '../../ios/icons';

export const ChildIntro: React.FC = () => (
  <Page bg="#fff">
    <NavBar top={8} left={<GlassPill>Cancel</GlassPill>} />
    <Spacer h={36} />
    <div style={{display: 'flex', justifyContent: 'center', flexShrink: 0}}>
      <IconCircle colors={['#64D2FF', '#30B0C7']} size={104}>
        <Person size={60} />
      </IconCircle>
    </div>
    <Spacer h={26} />
    <OnboardTitle>Create a Child Account</OnboardTitle>
    <Spacer h={12} />
    <Body>Children under 13 can’t create an Apple Account on their own. Create one for your child and manage it with parental controls.</Body>
    <Flex />
    <PrimaryButton label="Continue" tapAt={T.tapContinue} />
    <Spacer h={44} />
  </Page>
);
