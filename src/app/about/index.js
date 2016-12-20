import angular from 'angular';

import {everything} from './everything';
import {life} from './life';
import {code} from './code';
import {hobby} from './hobby';

export const aboutModule = ""; // not sure why this can be empty string

angular.module(aboutModule, ['ui.bootstrap'])
.component('aboutEverything', everything)
.component('aboutLife', life)
.component('aboutCode', code)
.component('aboutHobby', hobby)
;
