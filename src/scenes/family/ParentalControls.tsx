import React from 'react';
import {CHILD, T} from '../../family/timeline';
import {BackButton, Body, Flex, Group, IconSquare, NavBar, OnboardTitle, Page, PrimaryButton, Row, Spacer, Tap, Toggle} from '../../ios/components';
import {Cart, Hourglass, LocationArrow, Shield} from '../../ios/icons';
import {ios} from '../../ios/theme';

const ToggleTap: React.FC<{at: number}> = ({at}) => (
  <Tap at={at} highlight={false}>
    <Toggle at={at} />
  </Tap>
);

export const ParentalControls: React.FC = () => (
  <Page>
    <NavBar top={8} left={<BackButton />} />
    <Spacer h={10} />
    <OnboardTitle>Parental Controls</OnboardTitle>
    <Spacer h={10} />
    <Body>Choose what to turn on for {CHILD.first}. You can change these settings at any time.</Body>
    <Spacer h={26} />
    <Group>
      <Row height={66} icon={<IconSquare color={ios.pink}><Shield /></IconSquare>} title="Age-Appropriate Content" subtitle="Apps, movies, and books rated 9+" accessory={<ToggleTap at={T.toggle1} />} />
      <Row height={66} icon={<IconSquare color={ios.indigo}><Hourglass /></IconSquare>} title="Screen Time" subtitle="Downtime and app limits" accessory={<ToggleTap at={T.toggle2} />} />
      <Row height={66} icon={<IconSquare color={ios.orange}><Cart /></IconSquare>} title="Ask to Buy" subtitle="Approve purchases and downloads" accessory={<ToggleTap at={T.toggle3} />} />
      <Row height={66} icon={<IconSquare color={ios.green}><LocationArrow /></IconSquare>} title="Location Sharing" subtitle={`See ${CHILD.first} in Find My`} accessory={<ToggleTap at={T.toggle4} />} />
    </Group>
    <Flex />
    <PrimaryButton label="Continue" tapAt={T.tapContinue2} />
    <Spacer h={44} />
  </Page>
);
