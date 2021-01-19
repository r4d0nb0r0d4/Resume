import React from 'react';
import classNames from 'classnames';

import { IMAGES } from '@/constants';

import { LinkComponent } from './types';
import styles from './link.module.scss';

const Link: LinkComponent = (props) => {
  const { title, href, image, className } = props;

  const imageLink: string = IMAGES[image];

  const titleElement: JSX.Element = <div className={styles.title}>{title}</div>;

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.icon}>
        <img src={imageLink} />
      </div>

      {href !== undefined && href.length !== 0 ? (
        <a className={classNames(styles.title, styles.link)} href={href}>
          {titleElement}
        </a>
      ) : (
        <div className={styles.title}>{titleElement}</div>
      )}
    </div>
  );
};

export default React.memo(Link);
