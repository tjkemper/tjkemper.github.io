import angular from 'angular';

import {techsModule} from './app/techs/index';
import {aboutModule} from './app/about/index';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';

angular
  .module('app', [aboutModule, techsModule, 'ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .component('app', main)
  .component('taylorHeader', header)
  .component('taylorTitle', title)
  .component('taylorFooter', footer);
