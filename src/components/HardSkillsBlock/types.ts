import { FunctionComponent } from 'react';

export type HardSkillsBlockComponent = FunctionComponent<Props>;

export type Props = {
  skills: ReadonlyArray<string>;
  className?: string;
};
