import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';

import { saisieBanqueComponent } from './sirh/saisieBanque.component';

angular.module('app', [])

.component('saisieBanque', saisieBanqueComponent)

;
