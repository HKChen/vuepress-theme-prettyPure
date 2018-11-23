<template>
    <footer id="pp-footer">
        <p class="pp-footer-text">Copyright © HK Chen
            <a href="https://github.com/hkchen" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" />
            </a>
        </p>
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

<style src="../components/styles/footer.css" />