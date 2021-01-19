import { FunctionComponent } from 'react';

import { Experience } from '@components/Experience/types';

export type ExperienceBlockComponent = FunctionComponent<Props>;

export type Props = {
  experienceArray: ReadonlyArray<Experience>;
  className?: string;
};
