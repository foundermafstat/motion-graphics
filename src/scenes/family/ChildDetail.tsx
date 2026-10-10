import React from 'react';
import {CHILD, T} from '../../family/timeline';
import {Avatar, Group, IconSquare, NavBar, Page, Row, Spacer, Tap} from '../../ios/components';
import {Cart, Hourglass, LocationArrow, Lock, People, Refresh} from '../../ios/icons';
import {ios} from '../../ios/theme';
import {CHILD_COLORS} from './FamilyMembers';

export const ChildDetail: React.FC = () => (
  <Page>
    <NavBar back />
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0}}>
      <Avatar initials="EA" size={92} colors={CHILD_COLORS} />
      <div style={{fontSize: 26, fontWeight: 700, marginTop: 12}}>
        {CHILD.first} {CHILD.last}
      </div>
      <div style={{fontSize: 15, color: ios.secondary, marginTop: 2}}>
        Child · Age {CHILD.age} · {CHILD.login}@icloud.com
      </div>
    </div>
    <Spacer h={24} />
    <Group>
      <Tap at={T.tapScreenTime} x="40%">
        <Row icon={<IconSquare color={ios.indigo}><Hourglass /></IconSquare>} title="Screen Time" detail="On" chevron />
      </Tap>
      <Row icon={<IconSquare color={ios.orange}><Cart /></IconSquare>} title="Ask to Buy" detail="On" chevron />
      <Row icon={<IconSquare color={ios.green}><LocationArrow /></IconSquare>} title="Location Sharing" detail="On" chevron />
      <Row icon={<IconSquare color={ios.gray}><Refresh /></IconSquare>} title="Subscriptions" chevron />
    </Group>
    <Spacer h={20} />
    <Group>
      <Row icon={<IconSquare color={ios.gray}><Lock /></IconSquare>} title="Apple Account & Password" chevron />
      <Row icon={<IconSquare color={ios.gray}><People /></IconSquare>} title="Parent/Guardian" detail="John" chevron />
    </Group>
  </Page>
);
