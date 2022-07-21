// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import directives from './directives'
import filters from './filters'
import ElementUI from 'element-ui'
import './assets/style/theme.scss'
import store from './store'
import { mapState, mapMutations } from 'vuex'

Vue.config.productionTip = false
Vue.use(directives)
Vue.use(filters)
Vue.use(ElementUI, {
  size: 'small'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    loading: false
  },
  router,
  store,
  components: { App },
  template: '<App/>',
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['switchCollapseMenu']),
    // 初始化本地配置
    initLocalConfig () {
      const menuStatus = window.localStorage.getItem('MENU_STATUS')
      if (menuStatus != null) {
        this.switchCollapseMenu(menuStatus === 'true')
      }
    }
  },
  mounted () {
    this.initLocalConfig()
  }
})
