import React from 'react';
import {T} from '../../family/timeline';
import {Avatar, Group, IconSquare, NavBar, Page, Row, Spacer, Tap} from '../../ios/components';
import {AppStore, Card, Cloud, FindMy, Lock, People, Person, Refresh} from '../../ios/icons';
import {ios} from '../../ios/theme';

export const AppleAccount: React.FC = () => (
  <Page>
    <NavBar back />
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0}}>
      <Avatar initials="JA" size={92} />
      <div style={{fontSize: 26, fontWeight: 700, marginTop: 12}}>John Appleseed</div>
      <div style={{fontSize: 15, color: ios.secondary, marginTop: 2}}>john.appleseed@icloud.com</div>
    </div>
    <Spacer h={24} />
    <Group>
      <Row icon={<IconSquare color={ios.gray}><Person /></IconSquare>} title="Personal Information" chevron />
      <Row icon={<IconSquare color={ios.gray}><Lock /></IconSquare>} title="Sign-In & Security" chevron />
      <Row icon={<IconSquare color={ios.gray}><Card /></IconSquare>} title="Payment & Shipping" chevron />
      <Row icon={<IconSquare color={ios.gray}><Refresh /></IconSquare>} title="Subscriptions" chevron />
    </Group>
    <Spacer h={20} />
    <Group>
      <Row icon={<IconSquare color={ios.blue}><Cloud /></IconSquare>} title="iCloud" detail="50 GB" chevron />
      <Tap at={T.tapFamilySharing} x="40%">
        <Row icon={<IconSquare color={ios.blue}><People /></IconSquare>} title="Family Sharing" detail="Set Up" chevron />
      </Tap>
      <Row icon={<IconSquare color={ios.green}><FindMy /></IconSquare>} title="Find My" chevron />
      <Row icon={<IconSquare color={ios.blue}><AppStore /></IconSquare>} title="Media & Purchases" chevron />
    </Group>
  </Page>
);
