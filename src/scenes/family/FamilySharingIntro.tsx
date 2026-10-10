import React from 'react';
import {T} from '../../family/timeline';
import {Body, Feature, Flex, IconCircle, NavBar, OnboardTitle, Page, PrimaryButton, Spacer} from '../../ios/components';
import {Hourglass, LocationArrow, Person, Refresh} from '../../ios/icons';
import {ios} from '../../ios/theme';

const FamilyHero: React.FC = () => (
  <div style={{display: 'flex', justifyContent: 'center', flexShrink: 0}}>
    {(
      [
        ['#5AC8FA', '#007AFF'],
        ['#FF9F0A', '#FF2D55'],
        ['#A0E15E', '#34C759'],
      ] as [string, string][]
    ).map((colors, i) => (
      <div key={i} style={{marginLeft: i ? -18 : 0, border: '4px solid #fff', borderRadius: 50, zIndex: i === 1 ? 2 : 1}}>
        <IconCircle colors={colors} size={i === 1 ? 84 : 72}>
          <Person size={i === 1 ? 46 : 38} />
        </IconCircle>
      </div>
    ))}
  </div>
);

export const FamilySharingIntro: React.FC = () => (
  <Page bg="#fff">
    <NavBar back />
    <Spacer h={20} />
    <FamilyHero />
    <Spacer h={22} />
    <OnboardTitle>Family Sharing</OnboardTitle>
    <Spacer h={10} />
    <Body>Share subscriptions, purchases, iCloud storage, and locations with up to five family members.</Body>
    <Spacer h={30} />
    <Feature icon={<Refresh size={28} color={ios.blue} />} title="Shared Subscriptions" text="Apple Music, iCloud+, and more for the whole family." />
    <Feature icon={<Hourglass size={28} color={ios.blue} />} title="Parental Controls" text="Screen Time, Ask to Buy, and age-appropriate content." />
    <Feature icon={<LocationArrow size={26} color={ios.blue} />} title="Location Sharing" text="See where family members are in Find My." />
    <Flex />
    <PrimaryButton label="Set Up Your Family" tapAt={T.tapSetUp} />
    <Spacer h={52} />
  </Page>
);
