import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/plugins/router'

/** グローバルコンポーネントの追加 */
import GSpan from '@/components/grobal/GSpan.vue'
import GContainer from '@/components/grobal/GContainer.vue'

createApp(App)
  .use(vuetify)
  .use(router)
  .component('g-span', GSpan)
  .component('g-container', GContainer)
  .mount('#app')
