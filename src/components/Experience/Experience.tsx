import React from 'react';
import classNames from 'classnames';

import { ExperienceComponent } from './types';
import styles from './experience.module.scss';

const Experience: ExperienceComponent = (props) => {
  const {
    experience: { projectName, position, name, date, technicalSummary, responsibilities },
    className,
  } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{date}</div>
      </div>

      <div className={styles.position}>
        <b>Position: </b>
        {position}
      </div>
      <div className={styles.projectName}>
        <b>Project: </b>
        {projectName}
      </div>
      <div className={styles.responsibilities}>
        <b>Responsibilities: </b>
        {responsibilities}
      </div>
      <div className={styles.technicalSummary}>
        <b>Technical Summary: </b>
        {technicalSummary}
      </div>
    </div>
  );
};

export default React.memo(Experience);
