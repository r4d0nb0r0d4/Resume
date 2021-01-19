import { FunctionComponent } from 'react';

import { Image } from '@/types';

export type LinksPanelComponent = FunctionComponent<Props>;

export type Props = {
  links: ReadonlyArray<LinkInfo>;
  className?: string;
};

export type LinkInfo = {
  title: string;
  href?: string;
  image: Image;
};
