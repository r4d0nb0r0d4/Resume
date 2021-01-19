import { FunctionComponent } from 'react';

import { Image } from '@/types';

export type LinkComponent = FunctionComponent<Props>;

export type Props = {
  title: string;
  image: Image;
  href?: string;
  className?: string;
};
