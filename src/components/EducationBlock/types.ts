import { FunctionComponent } from 'react';

import { AdditionalEducation, EducationalBackground } from '@components/Education/types';

export type EducationBlockComponent = FunctionComponent<Props>;

export type Props = {
  educations: ReadonlyArray<EducationalBackground | AdditionalEducation>;
  className?: string;
  header: string;
};
