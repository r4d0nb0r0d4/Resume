/// <reference path="./index.d.ts" />

import React from 'react';
import ReactDom from 'react-dom';

import Resume from '@components/Resume';
import { RESUME_DATA } from '@/constants';

import '@/global-styles.scss';

ReactDom.render(<Resume resumeData={RESUME_DATA} />, document.getElementById('root'));
