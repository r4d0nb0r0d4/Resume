import React from 'react';
import classNames from 'classnames';

import ResumeHeader from '@components/ResumeHeader/ResumeHeader';
import HardSkills from '@components/HardSkillsBlock';
import ExperienceBlock from '@components/ExperienceBlock';
import EducationBlock from '@components/EducationBlock';

import { ResumeComponent } from './types';
import styles from './resume.module.scss';

const Resume: ResumeComponent = (props) => {
  const {
    resumeData: {
      educationalBackground,
      additionalEducation,
      experience,
      firstName,
      hardSkills,
      languages,
      lastName,
      links,
      position,
    },
  } = props;

  return (
    <div className={styles.container}>
      <ResumeHeader position={position} firstName={firstName} secondName={lastName} links={links} />

      <div className={styles.main}>
        <div className={styles.leftPanel}>
          <HardSkills skills={hardSkills} className={styles.infoBlock} />

          <div className={classNames(styles.infoBlock, styles.languageBlock)}>
            <div className={styles.header}>Languages</div>
            <div className={styles.languagesInfo}>
              <b>English: </b>
              {languages.english}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <ExperienceBlock className={styles.infoBlock} experienceArray={experience} />

          <EducationBlock
            header={'Educational background'}
            className={styles.infoBlock}
            educations={educationalBackground}
          />

          <EducationBlock
            header={'Additional education'}
            className={styles.infoBlock}
            educations={additionalEducation}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Resume);
