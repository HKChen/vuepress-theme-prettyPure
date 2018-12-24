<template>
    <div class="posts container">
        <slot />
        <PostPreview
            v-for="(post, index) in listPosts"
            :post="post"
            :full-width="fullWidth"
            :key="index"
        />
    </div>
</template>

<script>
import PostPreview from './../components/PostPreview'

export default {
    components: {
        PostPreview
    },
    props: {
        filter: {
            type: String && Function,
            default: null
        },
        fullWidth: {
            required: false,
            default: false
        }
    },
    mounted() {
        this.fullWidth
    },
    computed: {
        listPosts () {
            return this.posts || this.$posts
        }
    },
}
</script>
