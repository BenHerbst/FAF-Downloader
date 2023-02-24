import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)
app.use(router)
app.use(pinia)

app.mount('#app')