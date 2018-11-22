<template>
    <footer id="pp-footer">
        <p class="pp-footer-text">Copyright © HK Chen <a href="https://github.com/hkchen"><font-awesome-icon icon="github" /></a></p>
    </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)

export default {
    name: 'Footer'
}
</script>

<style>
.pp-footer-text {
    text-align: center;
}

.pp-footer-text > a {
    color: #000;
    text-decoration: none;
}
</style>