<template>
    <section
        v-if="$page.frontmatter.type !== 'page'"
        class="post-meta main-div"
    >
        <section class="post-links">
            文章導頁(test)
            <router-link
                v-if="nextPost"
                :to="nextPost.path"
                class="post-link"
            >
                << {{ nextPost.title }}
            </router-link>

            <router-link
                v-if="prevPost"
                :to="prevPost.path"
                class="post-link"
            >
                {{ prevPost.title }} >>
            </router-link>
        </section>
    </section>
</template>

<script>
import '@theme/styles/postNavigation.scss'

export default {
    name: 'PostNavigation',

    computed: {
        thisIndex() {
            return  this.$posts.findIndex(obj => obj.key == this.$page.key)
        },

        prevPost() {
            const nextIndex = this.thisIndex + 1
            return nextIndex > this.$posts.length - 1 ? null : this.$posts[nextIndex]
        },

        nextPost() {
            const prevIndex = this.thisIndex - 1
            return prevIndex < 0 ? null : this.$posts[prevIndex]
        }
    }
}
</script>