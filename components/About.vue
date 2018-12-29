<template>
    <div class="pp-about">
        <div class="container">
            <div class="pp-block">
                <div class="pp-avatar">
                    <img :src="$withBase('/images/theme/avatar.jpg')">
                </div>
                <div class="pp-info">
                    <h3 class="pp-name">{{$site.themeConfig.author.name}}</h3>
                    <p class="pp-says">{{$site.themeConfig.author.description}}</p>
                    <div class="pp-links">
                        <a class="fa fa-envelope" :href="'mailto:' + $site.themeConfig.author.email"></a>
                        <a class="fa fa-github-square" target="_blank" :href="$site.themeConfig.author.github"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>