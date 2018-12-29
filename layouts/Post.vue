<template>
    <div class="post-container">
        <div class="container">
            <article class="post">
                <h1 class="post-title">
                    {{ $page.title }}
                </h1>
                <div class="post-param">
                    <div class="post-date">
                        <span>{{ $page.frontmatter.date | dateFormat }}</span>
                    </div>
                    <div v-if="$page.frontmatter.tag">
                        /
                        <span v-for="(item, index) in $page.frontmatter.tag" :key="index" class="post-tags fa fa-tags">
                            {{ item }}
                        </span>
                    </div>
                </div>
                <div class="post-content">
                    <Content :key="$page.path" />
                </div>
            </article>
        </div>
        <Disqus />
        <PostNavigation />
    </div>
</template>

<script>
import PostNavigation from './../components/PostNavigation'
import Disqus from './../components/Disqus'

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