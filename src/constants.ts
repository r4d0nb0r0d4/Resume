import { Image, Images, ResumeData } from './types';

import { EducationType } from '@components/Education/types';

import linkedInImg from '@images/linkedin.png';
import vkImg from '@images/vk.png';
import phoneImg from '@images/phone.png';
import mailImg from '@images/mail.png';
import gitHubImg from '@images/github.png';

export const IMAGES: Images = {
  [Image.linkedIn]: linkedInImg,
  [Image.vk]: vkImg,
  [Image.phone]: phoneImg,
  [Image.mail]: mailImg,
  [Image.gitHub]: gitHubImg,
};

export const RESUME_DATA: ResumeData = {
  firstName: 'Radislav',
  lastName: 'Erokho',
  position: 'Junior Frontend Developer',
  hardSkills: [
    'JavaScript: ES6+',
    'ReactJS (React Hooks) + Redux',
    'TypeScript (with ReactJS)',
    'HTML/CSS3',
    'SCSS/SASS',
    'Webpack',
    'npm/yarn',
    'Git',
    'experience with NodeJS/Express',
  ],
  languages: {
    english: 'Pre-Intermediate',
  },

  experience: [
    {
      name: 'LLC "Artezio"',
      date: 'From June 2020 – till now',
      projectName: 'ART-JuniorsLabPortal',
      position: 'Junior HTML/JavaScript developer',
      responsibilities:
        'Improvement of existing and writing new UI components. Creation of modal windows for user interaction. Description of new and fix existing methods for interacting with the server api. Build and patch a Redux repository to harmonize client-side interactions. Documenting Components using Storybook. Correction of errors in the frontend part of the project. Creating tasks for the development of new components and correct old. Interact with the layout to create and complete tasks',
      technicalSummary: 'JavaScript, Typescript, ReactJS, Redux, Storybook, SCSS, npm, Figma, Git, Jira',
    },

    {
      name: 'LLC "Artezio"',
      date: 'From October 2019 – till April 2020',
      projectName: 'Cloud Publishing',
      position: 'Trainee',
      responsibilities:
        'Development of UI components. Documenting components using JSDocs. Description of new methods for interacting with the server api. development of page router',
      technicalSummary: 'JavaScript, jQuery, Bootstrap, HTML, CSS, Handlebars, Webpack, Git',
    },
  ],

  educationalBackground: [
    {
      type: EducationType.university,
      date: 'From September 2015 – till June 2020',
      name: 'Interstate Educational Institution of Higher Education "Belarusian-Russian University"',
      data: 'Automated Electric Drive',
    },
  ],

  additionalEducation: [
    {
      type: EducationType.additional,
      date: 'From October 2019 - till March 2020',
      name: 'LLC "Artezio"',
      data: 'Application architecture, OOP, WEB development, databases (basics, SQL), development tools',
    },
  ],

  links: [
    { title: 'Vkontakte', href: 'https://vk.com/qwemnbvcx', image: Image.vk },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/radislav-erokho-24985b203', image: Image.linkedIn },
    { title: 'GitHub', href: 'https://github.com/r4d0nb0r0d4', image: Image.gitHub },
    { title: 'radislav-erokho@yandex.by', href: 'mailto:radislav-erokho@yandex.by', image: Image.mail },
    { title: '+375-33-3561391', image: Image.phone },
  ],
};
