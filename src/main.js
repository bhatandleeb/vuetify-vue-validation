import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify/index.js'
import ValidatorHandler from './plugins/validation/handler.js'

const app = createApp(App)

app.use(vuetify)
app.use(ValidatorHandler)

app.mount('#app')
