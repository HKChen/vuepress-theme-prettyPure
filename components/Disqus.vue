<template>
    <div class="disqus">
        <div id="disqus_thread" class="container"></div>
    </div>
</template>

<script>
export default {
    name: 'Disqus',

    mounted() {
        var disqus_config = function () {
            this.page.url = window.location.origin;
            this.page.identifier = window.location.pathname;
        };

        (function() {
            var d = window.document, s = d.createElement('script');
            s.src = 'https://hkchen.disqus.com/embed.js';
            s.setAttribute('data-timestamp', + new Date());
            (d.head || d.body).appendChild(s);
        })();
    }
}
</script>