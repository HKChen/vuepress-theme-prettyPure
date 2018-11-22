<template>
    <div class="container">
        <Header />
        <Footer />
    </div>
</template>

<script>
import Vue from 'vue'
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

export default {
    name: 'Layout',

    components: {
        Header,
        Footer
    }
}
</script>

<style>
@font-face {
    font-family: 'deftone-stylus';
    src: url(fonts/deftone-stylus.ttf);
}
</style>