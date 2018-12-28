<template>
    <div class="pp-about">
        <div class="container">
            <div class="pp-block">
                <div class="pp-avatar">
                    <img :src="$withBase('/images/theme/avatar.jpg')">
                </div>
                <div class="pp-info">
                    <h3 class="pp-name">HK Chen</h3>
                    <p class="pp-says">我什麼都不會</p>
                    <div class="pp-links">
                        <a class="fa fa-envelope" href="mailto:ilikeiceblue@gmail.com"></a>
                        <a class="fa fa-github-square" target="_blank" href="https://github.com/hkchen"></a>
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
