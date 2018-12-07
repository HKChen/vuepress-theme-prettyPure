<template>
    <footer id="pp-footer">
        <p class="pp-footer-text">Copyright © HK Chen
            <a href="https://github.com/hkchen" target="_blank">
                <!-- <i class="fa fa-github-alt" aria-hidden="true"></i> -->
                <FontAwesome :icon="['fab', 'fa-github-alt']"/>
            </a>
        </p>
    </footer>
</template>

<script>
import FontAwesome from '@fortawesome/vue-fontawesome'

export default {
    name: 'Footer',

    components: {
        FontAwesome
    },
}
</script>

<style src="../styles/footer.css" />