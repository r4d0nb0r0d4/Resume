import React from 'react';

import LinksPanel from '@components/LinksPanel';

import { ResumeHeaderComponent } from './types';

import styles from './resume-header.module.scss';

const ResumeHeader: ResumeHeaderComponent = (props) => {
  const { firstName, secondName, position, links } = props;

  return (
    <div className={styles.container}>
      <div className={styles.fullName}>{`${firstName} ${secondName}`}</div>
      <div className={styles.position}>{position}</div>
      <LinksPanel links={links} className={styles.linksPanel} />
    </div>
  );
};

export default React.memo(ResumeHeader);
