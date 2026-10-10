import {Composition} from 'remotion';
import {FamilySetup} from './family/FamilySetup';
import {FPS, T} from './family/timeline';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="FamilySetup" component={FamilySetup} durationInFrames={T.end} fps={FPS} width={1080} height={1920} />
    </>
  );
};
