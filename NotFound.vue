<template>
    <div>
        <Header />
        <div class="pp-container container">
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
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    name: 'NotFound',

    components: {
        Header,
        Footer
    },
}
</script>