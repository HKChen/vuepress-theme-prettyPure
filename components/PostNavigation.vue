<template>
    <div v-if="$page.frontmatter.type !== 'page'" class="pp-limiter container">
        <div class="post-links row">
            <span class="pp-prev col-xl-6 col-lg-6 col-sm-6 col-12">
                <router-link
                    v-if="nextPost"
                    :to="nextPost.path"
                    class="post-link"
                >
                    {{ nextPost.title }}
                </router-link>
            </span>
            <span class="pp-next col-xl-6 col-lg-6 col-sm-6 col-12">
                <router-link
                    v-if="prevPost"
                    :to="prevPost.path"
                    class="post-link"
                >
                    {{ prevPost.title }}
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
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