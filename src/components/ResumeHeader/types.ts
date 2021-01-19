import { FunctionComponent } from 'react';

import { LinkInfo } from '@components/LinksPanel/types';

export type ResumeHeaderComponent = FunctionComponent<Props>;

export type Props = {
  firstName: string;
  secondName: string;
  position: string;
  links: ReadonlyArray<LinkInfo>;
  className?: string;
};
