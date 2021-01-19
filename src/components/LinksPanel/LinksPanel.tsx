import React from 'react';
import classNames from 'classnames';

import Link from '@components/Link';

import { LinkInfo, LinksPanelComponent } from './types';
import styles from './links-panel.module.scss';

const mapLinksToElement = (linkInfo: LinkInfo, index: number): JSX.Element => {
  const { title, href, image } = linkInfo;

  return <Link title={title} href={href} image={image} key={index} className={styles.linkElement} />;
};

const LinksPanel: LinksPanelComponent = (props) => {
  const { links, className } = props;

  return <div className={classNames(styles.container, className)}>{links.map(mapLinksToElement)}</div>;
};

export default React.memo(LinksPanel);
