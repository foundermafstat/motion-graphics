import React from 'react';
import {CHILD, T} from '../../family/timeline';
import {Avatar, Group, IconSquare, LargeTitle, NavBar, Page, Pulse, Row, Spacer, Tap} from '../../ios/components';
import {AppStore, Cloud, LocationArrow, Plus, Refresh} from '../../ios/icons';
import {ios} from '../../ios/theme';

export const CHILD_COLORS: [string, string] = ['#FFB36B', '#FF6B8A'];

export const FamilyMembers: React.FC = () => (
  <Page>
    <NavBar back />
    <LargeTitle>Family</LargeTitle>
    <Spacer h={8} />
    <Group header="Members" inset={74}>
      <Row height={64} icon={<Avatar initials="JA" size={44} />} title="John Appleseed (Me)" subtitle="Organizer" chevron />
      <Tap at={T.tapEmma} x="40%">
        <Pulse at={T.emmaHighlight}>
          <Row
            height={64}
            icon={<Avatar initials="EA" size={44} colors={CHILD_COLORS} />}
            title={`${CHILD.first} ${CHILD.last}`}
            subtitle={`Child · Age ${CHILD.age}`}
            chevron
          />
        </Pulse>
      </Tap>
      <Row
        height={52}
        icon={
          <div style={{width: 44, display: 'flex', justifyContent: 'center'}}>
            <Plus size={24} color={ios.blue} />
          </div>
        }
        title={<span style={{color: ios.blue}}>Add Member</span>}
      />
    </Group>
    <Spacer h={24} />
    <Group header="Shared with Your Family">
      <Row icon={<IconSquare color={ios.gray}><Refresh /></IconSquare>} title="Subscriptions" chevron />
      <Row icon={<IconSquare color={ios.blue}><AppStore /></IconSquare>} title="Purchase Sharing" chevron />
      <Row icon={<IconSquare color={ios.blue}><Cloud /></IconSquare>} title="iCloud+" chevron />
      <Row icon={<IconSquare color={ios.green}><LocationArrow /></IconSquare>} title="Location Sharing" chevron />
    </Group>
  </Page>
);
