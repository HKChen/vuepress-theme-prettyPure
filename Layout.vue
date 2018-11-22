<template>
    <div class="container">
        <Header />
        <Footer />
    </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'

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
    src: url('fonts/deftone-stylus.ttf');
}
</style>