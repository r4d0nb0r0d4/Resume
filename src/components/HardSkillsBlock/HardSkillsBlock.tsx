import React from 'react';
import classNames from 'classnames';

import { HardSkillsBlockComponent } from './types';
import styles from './hard-skills-block.module.scss';

const mapSkill = (skill: string) => <div className={styles.skill}>- {skill}</div>;

const HardSkillsBlock: HardSkillsBlockComponent = (props) => {
  const { skills, className } = props;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.header}>Hard Skills</div>

      <div className={styles.skillsContainer}>{skills.map(mapSkill)}</div>
    </div>
  );
};

export default React.memo(HardSkillsBlock);
