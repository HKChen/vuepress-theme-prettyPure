<template>
    <div class="post-preview" :style="`grid-column-end: ${fullWidth ? 'span 3' : 'initial'}`">
        <div class="post-wrapper">
            <h1 class="post-title">
                <router-link :to="post.path" class="post-title-text">{{post.title}}</router-link>
            </h1>
            <span class="post-date">{{postDate}}</span>
            <div class="post-preview-content">
                {{postPreview}}
            </div>
        </div>
    </div>
</template>

<script>
import { truncateString } from '../utils/index';

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
            return truncateString(this.post.preview.plain, 98)
        },
        postDate() {
            const { frontmatter: { date } } = this.post
            return date.substring(0,10)
        }
    }
}
</script>

<style src="../styles/postPreview.css" />