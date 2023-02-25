import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          secondary: colors.blueGrey.lighten4
        }
      },
      dark: {
        colors: {
          primary: colors.purple.lighten1,
          secondary: colors.grey.darken3
        }
      }
    }
  }
})

app.use(vuetify)
app.use(router)
app.use(pinia)

app.mount('#app')
