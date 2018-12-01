<template>
    <div class="post-container">
        <article class="post">
            <h1 class="post-title">
                {{ $page.title }}
            </h1>
            <div class="post-date">
                <span>發佈時間(test)</span>
                {{ $page.frontmatter.date | dateFormat }}
            </div>
            <div class="post-content">
                <Content :key="$page.path" />
            </div>
            <div class="post-tags">
                <span>Tags(test)</span>
                <ul>
                    <li v-for="(item, index) in $page.frontmatter.tag" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <PostNavigation />
        </article>
        {{ $page }}
    </div>
</template>

<script>
import PostNavigation from '@theme/components/PostNavigation'

export default {
    components: {
        PostNavigation
    },
    filters : {
        dateFormat (date) {
            return date.substring(0,10)
        }
    }
}
</script>

<style>
.post-title {
    color: rgb(51, 207, 247);
    font-family: 'deftone-stylus';
    font-size: 40px;
    text-align: center;
}

.post-tags > ul > li {
    list-style-type: none;
    display: inline-block;
    padding: 0 10px;
}
</style>