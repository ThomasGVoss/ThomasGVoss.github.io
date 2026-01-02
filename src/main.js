import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

import naive from 'naive-ui'
app.use(naive)

app.mount('#app')
