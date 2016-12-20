import angular from 'angular';

import {everything} from './everything';
import {life} from './life';

export const aboutModule = "";

angular.module(aboutModule, ['ui.bootstrap'])
.component('aboutEverything', everything)
.component('aboutLife', life);
