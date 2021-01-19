import { FunctionComponent } from 'react';

import { ResumeData } from '@/types';

export type ResumeComponent = FunctionComponent<Props>;

export type Props = {
  resumeData: ResumeData;
};
