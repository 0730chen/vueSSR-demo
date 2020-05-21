
const Vue =  require('vue')
import App from './component/App.vue'
import { createRouter } from './router'

export function createApp () {
  // create router instance
  const router = createRouter()

  const app = new Vue({
    // inject router into root Vue instance
    router,
    render: h => h(App)
  })

  // return both the app and the router
  return { app, router }
}