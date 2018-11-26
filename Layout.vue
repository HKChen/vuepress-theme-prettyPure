<template>
    <div class="container">
        <Header />
        <div class="pp-container">
            <component class="pp-main-content" :is="layout" />
        </div>
        <Footer />
    </div>
</template>

<script>
import nprogress from 'nprogress'
import Vue from 'vue'
import Header from '@theme/components/Header'
import Home from '@theme/layouts/Home'
import Post from '@theme/layouts/Post'
import Footer from '@theme/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

export default {
    name: 'Layout',
    components: {
        Header,
        Home,
        Post,
        Footer
    },
    computed: {
        layout() {
            const { path } = this.$page
            return (path === '/') ? 'home' : 'post'
        },

        pageClasses() {
            return `${this.layout}-page`
        }
    },
    mounted() {
    // progress bar configuration
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path) {
        nprogress.start()
      }

      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
    })
  }
}
</script>

<style src="./styles/theme.css" />