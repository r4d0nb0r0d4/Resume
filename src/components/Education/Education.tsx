import React from 'react';
import classNames from 'classnames';

import { EducationType, EducationComponent } from './types';

import styles from './education.module.scss';

const Education: EducationComponent = (props) => {
  const {
    data: { name, date, data, type },
    className,
  } = props;

  const title: JSX.Element = (
    <b>
      {type === EducationType.university
        ? 'Specialty: '
        : type === EducationType.additional
        ? 'Internal corporate trainings: '
        : ''}
    </b>
  );

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.date}>{date}</div>
      </div>

      <div className={styles.speciality}>
        {title}
        {data}
      </div>
    </div>
  );
};

export default React.memo(Education);
