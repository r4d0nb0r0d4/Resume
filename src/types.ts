import { Experience } from '@components/Experience/types';
import { LinkInfo } from '@components/LinksPanel/types';
import { AdditionalEducation, EducationalBackground } from '@components/Education/types';

export enum Image {
  'vk' = 'vk',
  'linkedIn' = 'linkedIn',
  'phone' = 'phone',
  'mail' = 'mail',
  'gitHub' = 'gitHub',
}

export type Images = Record<Image, string>;

export type ResumeData = {
  firstName: string;
  lastName: string;
  position: string;
  hardSkills: ReadonlyArray<string>;
  experience: ReadonlyArray<Experience>;
  links: ReadonlyArray<LinkInfo>;
  languages: {
    english: string;
  };
  educationalBackground: ReadonlyArray<EducationalBackground>;
  additionalEducation: ReadonlyArray<AdditionalEducation>;
};
