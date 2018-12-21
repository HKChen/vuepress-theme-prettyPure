<template>
    <div class="container">
        <Header />
        <div class="pp-container">
            <h1 class="post-title">Oops!</h1>
            <div>
                <h2>Not Found!?</h2>
                <router-link :to="$localePath">Return Home.</router-link>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'

export default {
    name: 'NotFound',

    components: {
        Header,
        Footer
    },
}
</script>