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
import './styles/theme.scss'

import nprogress from 'nprogress'
import Vue from 'vue'
import Header from './components/Header'
import Home from './layouts/Home'
import Post from './layouts/Post'
import Footer from './components/Footer'

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
        nprogress.configure({ showSpinner: true })

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