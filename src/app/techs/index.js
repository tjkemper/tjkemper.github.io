import angular from 'angular';

import {tech} from './tech';
import {techs} from './techs';

export const techsModule = 'techs';

angular
  .module(techsModule, [])
  .component('taylorTech', tech)
  .component('taylorTechs', techs);
