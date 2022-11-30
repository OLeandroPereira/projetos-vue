import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#83b1ff',
    error: '#ff5252',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ffc107'
  },
  customProperties:true,
  iconfont: 'md',
})

export default new Vuetify({
});
