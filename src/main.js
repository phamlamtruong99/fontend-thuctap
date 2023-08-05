import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import { createVuetify} from 'vuetify'
import * as components from 'vuetify/components'

import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
export default createVuetify({
  icons: {
    defaultSet: 'mdi', 
  },
})
createApp(App).use(router).use(vuetify).mount('#app')

//npm i --g @vue/cli -- Cai mt vue/cli
//vue.cmd create my-tt --tao thu muc vue 
// npm add vuetify@^3.3.7 
//--add vuetify
// Vuetify -- xác nhận vuetify 
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

// createApp(App).use(vuetify).mount('#app')
//npm add @mdi/font 
//--add thư viện icon 
//icon -- xác nhận icon
// import '@mdi/font/css/materialdesignicons.css' 
// import { createVuetify } from 'vuetify'

// export default createVuetify({
//   icons: {
//     defaultSet: 'mdi', 
//   },
// })