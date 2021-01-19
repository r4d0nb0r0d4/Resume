import { FunctionComponent } from 'react';

export type Props = {
  data: AdditionalEducation | EducationalBackground;
  className?: string;
};

export type EducationComponent = FunctionComponent<Props>;

export type Education = {
  date: string;
  name: string;
  data: string;
};

export type EducationalBackground = Education & {
  type: EducationType.university;
};

export type AdditionalEducation = Education & {
  type: EducationType.additional;
};

export enum EducationType {
  'additional' = 'additional',
  'university' = 'university',
}
