import '../dist/output.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// FontAwsome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHouseChimney,
  faBars,
  faUser,
  faPlus,
  faArrowUpFromBracket,
  faFilter,
  faGear,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faHouseChimney,
  faBars,
  faUser,
  faPlus,
  faArrowUpFromBracket,
  faFilter,
  faGear,
  faMagnifyingGlass
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
