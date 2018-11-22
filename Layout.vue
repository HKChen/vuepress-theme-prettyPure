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

<style lang="scss" scr="@theme/styles/themes.scss" />