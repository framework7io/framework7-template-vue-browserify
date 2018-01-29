// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/js/framework7.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.js';

// Import Routes
import Routes from './routes.js';

// Import App Component
import App from './app.vue';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: Routes,
  },
  // Register App Component
  components: {
    app: App
  }
});
