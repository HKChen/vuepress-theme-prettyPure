<template>
    <div class="posts container" style="text-align: center">
        <slot />
        <PostPreview
            v-for="(post, index) in pageList"
            :post="post"
            :full-width="fullWidth"
            :key="index"
        />
        <v-pagination :length="pagesLength" :total-visible="7" color="#777"
            v-model="pageNum"
            prev-icon="fa-chevron-left"
            next-icon="fa-chevron-right" dark />
    </div>
</template>

<script>
import PostPreview from './PostPreview'

export default {
    components: {
        PostPreview
    },
    props: {
        data: Array,
        current: {
            type: [Number, String],
            default: 1
        },
        filter: {
            type: String && Function,
            default: null
        },
        fullWidth: {
            required: false,
            default: false
        }
    },
    computed: {
        pageNum: {
            get() {
                return Number(this.current)
            },
            set(val) {
                this.$emit('change', val)
            }
        },
        pageSize() {
            return this.$site.themeConfig.pagination.pageSize
        },
        pagesLength() {
            return Math.ceil(this.data.length / this.pageSize)
        },
        pageList() {
            const begin = (this.pageNum - 1) * this.pageSize
            const end = begin + this.pageSize
            return this.data.filter((item, i) => i >= begin && i < end)
        }
    }
}
</script>