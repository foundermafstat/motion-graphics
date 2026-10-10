import React from 'react';
import {T} from '../../family/timeline';
import {Avatar, Group, IconSquare, LargeTitle, Page, Row, SearchField, Spacer, Tap} from '../../ios/components';
import {Accessibility, BatteryGlyph, Bluetooth, Camera, Cellular, Gear, Hourglass, Wifi} from '../../ios/icons';
import {ios, STATUS_H} from '../../ios/theme';

export const SettingsRoot: React.FC = () => (
  <Page>
    <Spacer h={STATUS_H + 40} />
    <LargeTitle>Settings</LargeTitle>
    <SearchField />
    <Spacer h={20} />
    <Group inset={88}>
      <Tap at={T.tapAccount} x="38%">
        <Row
          height={80}
          icon={<Avatar initials="JA" size={58} />}
          title={<span style={{fontSize: 21, fontWeight: 600}}>John Appleseed</span>}
          subtitle="Apple Account, iCloud, and more"
          chevron
        />
      </Tap>
    </Group>
    <Spacer h={20} />
    <Group>
      <Row icon={<IconSquare color={ios.blue}><Wifi /></IconSquare>} title="Wi‑Fi" detail="Home" chevron />
      <Row icon={<IconSquare color={ios.blue}><Bluetooth /></IconSquare>} title="Bluetooth" detail="On" chevron />
      <Row icon={<IconSquare color={ios.green}><Cellular /></IconSquare>} title="Cellular" chevron />
      <Row icon={<IconSquare color={ios.green}><BatteryGlyph /></IconSquare>} title="Battery" chevron />
    </Group>
    <Spacer h={20} />
    <Group>
      <Row icon={<IconSquare color={ios.gray}><Gear /></IconSquare>} title="General" chevron />
      <Row icon={<IconSquare color={ios.blue}><Accessibility /></IconSquare>} title="Accessibility" chevron />
      <Row icon={<IconSquare color={ios.gray}><Camera /></IconSquare>} title="Camera" chevron />
      <Row icon={<IconSquare color={ios.indigo}><Hourglass /></IconSquare>} title="Screen Time" chevron />
    </Group>
  </Page>
);
