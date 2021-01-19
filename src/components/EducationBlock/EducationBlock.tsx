import React from 'react';
import classNames from 'classnames';

import { AdditionalEducation, EducationalBackground as EducationType } from '@components/Education/types';
import Education from '@components/Education';

import { EducationBlockComponent } from './types';
import styles from './education-block.module.scss';

const mapEducation = (education: EducationType | AdditionalEducation, key: number) => {
  return <Education key={key} data={education} className={styles.education} />;
};

const EducationBlock: EducationBlockComponent = (props) => {
  const { className, educations, header } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>{header}</div>

      <div className={styles.educationContainer}>{educations.map(mapEducation)}</div>
    </div>
  );
};

export default React.memo(EducationBlock);
