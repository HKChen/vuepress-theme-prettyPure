<template>
    <div class="post-preview" :style="`grid-column-end: ${fullWidth ? 'span 3' : 'initial'}`">
        <div class="post-wrapper">
            <h1 class="post-title">
                <router-link :to="post.path">{{post.title}}</router-link>
            </h1>
            <div class="post-param">
                <div class="post-date">
                    <span>{{ postDate }}</span>
                </div>
                <div v-if="postTags">
                    /
                    <span v-for="(item, index) in postTags" :key="index" class="post-tags fa fa-tags">
                        {{ item }}
                    </span>
                </div>
            </div>
            <div class="post-preview-content" v-html="postPreview"></div>
        </div>
    </div>
</template>

<script>
import he from 'he/he'

export default {
    props: {
        post: {
            required: true
        },
        fullWidth: {
            required: false,
            default: false
        }
    },
    computed: {
        postPreview() {
             return he.decode(this.post.preview.rendered).replace(/<p>(.*?)<\/p>/, '$1')
        },
        postDate() {
            const { frontmatter: { date } } = this.post
            return date.substring(0,10)
        },
        postTags() {
            const { frontmatter: { tag } } = this.post
            return tag
        }
    }
}
</script>