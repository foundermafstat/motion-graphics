import React from 'react';
import {T} from '../../family/timeline';
import {Body, Group, IconCircle, IconSquare, NavBar, OnboardTitle, Page, Row, Spacer, Tap} from '../../ios/components';
import {People, Person, PersonPlus} from '../../ios/icons';
import {ios} from '../../ios/theme';

export const InviteMembers: React.FC = () => (
  <Page>
    <NavBar back />
    <Spacer h={16} />
    <div style={{display: 'flex', justifyContent: 'center', flexShrink: 0}}>
      <IconCircle colors={['#5AC8FA', '#007AFF']} size={84}>
        <People size={48} />
      </IconCircle>
    </div>
    <Spacer h={20} />
    <OnboardTitle>Add Family Members</OnboardTitle>
    <Spacer h={10} />
    <Body>Invite people who already have an Apple Account, or create an account for a younger child.</Body>
    <Spacer h={30} />
    <Group>
      <Row height={66} icon={<IconSquare color={ios.blue}><PersonPlus /></IconSquare>} title="Invite Others" subtitle="Messages, Mail, or in person" chevron />
      <Tap at={T.tapCreateChild} x="42%">
        <Row height={66} icon={<IconSquare color={ios.green}><Person /></IconSquare>} title="Create Child Account" subtitle="For children under 13" chevron />
      </Tap>
    </Group>
    <div style={{fontSize: 13, lineHeight: 1.35, color: ios.secondary, padding: '8px 36px 0'}}>
      You can add or remove family members at any time in Settings.
    </div>
  </Page>
);
