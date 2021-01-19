import { FunctionComponent } from 'react';

export type ExperienceComponent = FunctionComponent<Props>;

export type Props = {
  experience: Experience;
  className?: string;
};

export type Experience = {
  name: string;
  date: string;
  projectName: string;
  position: string;
  responsibilities: string;
  technicalSummary: string;
};
