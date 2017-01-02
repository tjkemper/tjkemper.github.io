import angular from 'angular';

import {everything} from './everything';
import {life} from './life';
import {code} from './code';

export const aboutModule = ""; // not sure why this can be empty string

angular.module(aboutModule, ['ui.bootstrap'])
.component('aboutEverything', everything)
.component('aboutLife', life)
.component('aboutCode', code)
;
