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
        <Disqus />
    </div>
</template>

<script>
import '@theme/styles/post.scss'

import PostNavigation from '@theme/components/PostNavigation'
import Disqus from '@theme/components/Disqus'

export default {
    components: {
        PostNavigation,
        Disqus
    },
    filters : {
        dateFormat (date) {
            return date.substring(0,10)
        }
    }
}
</script>

<style src="../styles/post.css" />