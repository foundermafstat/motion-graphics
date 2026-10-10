import React from 'react';
import {useCurrentFrame} from 'remotion';
import {T} from '../../family/timeline';
import {ramp} from '../../ios/anim';
import {Group, IconSquare, NavBar, Page, Row, Spacer, Swap, Tap, Toggle} from '../../ios/components';
import {Bubble, CheckCircle, Distance, Hourglass, Moon, NoSign, Shield} from '../../ios/icons';
import {ios} from '../../ios/theme';

const BARS = [0.55, 0.8, 0.62, 0.9, 0.7, 0.45, 0.35];
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const UsageCard: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Group>
      <div style={{padding: '14px 20px 16px'}}>
        <div style={{fontSize: 13, color: ios.secondary}}>Daily Average</div>
        <div style={{fontSize: 28, fontWeight: 600, marginTop: 2}}>2h 14m</div>
        <div style={{display: 'flex', alignItems: 'flex-end', gap: 14, height: 70, marginTop: 10}}>
          {BARS.map((h, i) => (
            <div key={i} style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
              <div
                style={{
                  width: '100%',
                  height: 54 * h * ramp(frame, T.p7 + 8 + i * 2, 18),
                  borderRadius: 4,
                  background: i === 3 ? ios.blue : '#7FB8FF',
                }}
              />
              <div style={{fontSize: 11, color: ios.secondary}}>{DAYS[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </Group>
  );
};

export const ScreenTime: React.FC = () => (
  <Page>
    <NavBar back title="Screen Time" />
    <Spacer h={4} />
    <UsageCard />
    <Spacer h={22} />
    <Group header="Limit Usage">
      <Tap at={T.tapDowntime} x="35%">
        <Row icon={<IconSquare color={ios.indigo}><Moon /></IconSquare>} title="Downtime" detail={<Swap at={T.tapDowntime + 6} from="Off" to="9 PM – 7 AM" />} chevron />
      </Tap>
      <Tap at={T.tapAppLimits} x="35%">
        <Row icon={<IconSquare color={ios.orange}><Hourglass /></IconSquare>} title="App Limits" detail={<Swap at={T.tapAppLimits + 6} from="Off" to="Social · 1 hr" />} chevron />
      </Tap>
      <Row icon={<IconSquare color={ios.green}><CheckCircle /></IconSquare>} title="Always Allowed" chevron />
      <Row icon={<IconSquare color={ios.blue}><Distance /></IconSquare>} title="Screen Distance" chevron />
    </Group>
    <Spacer h={22} />
    <Group header="Communication">
      <Row icon={<IconSquare color={ios.green}><Bubble /></IconSquare>} title="Communication Limits" chevron />
      <Row
        icon={<IconSquare color={ios.blue}><Shield /></IconSquare>}
        title="Communication Safety"
        accessory={
          <Tap at={T.toggleCommSafety} highlight={false}>
            <Toggle at={T.toggleCommSafety} />
          </Tap>
        }
      />
      <Tap at={T.tapContent} x="35%">
        <Row icon={<IconSquare color={ios.red}><NoSign /></IconSquare>} title="Content & Privacy" detail={<Swap at={T.tapContent + 6} from="Off" to="On" />} chevron />
      </Tap>
    </Group>
  </Page>
);
