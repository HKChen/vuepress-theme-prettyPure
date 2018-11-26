<template>
    <div class="posts">
        <slot />
        <PostPreview
            v-for="(post, index) in $postQuery(filter)"
            :post="post"
            :full-width="fullWidth"
            :key="index"
        />
    </div>
</template>

<script>
import PostPreview from '@theme/components/PostPreview'

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
  }
}
</script>
