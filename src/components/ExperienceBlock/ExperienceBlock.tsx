import React from 'react';
import classNames from 'classnames';

import PlaceOfWork from '@components/Experience';
import { Experience } from '@components/Experience/types';

import { ExperienceBlockComponent } from './types';
import styles from './experience-block.module.scss';

const mapPlaceOfWork = (placeOfWorkData: Experience) => {
  return <PlaceOfWork experience={placeOfWorkData} className={styles.experience} />;
};

const ExperienceBlock: ExperienceBlockComponent = (props) => {
  const { experienceArray, className } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>Experience</div>

      <div className={styles.experienceContainer}>{experienceArray.map(mapPlaceOfWork)}</div>
    </div>
  );
};

export default React.memo(ExperienceBlock);
