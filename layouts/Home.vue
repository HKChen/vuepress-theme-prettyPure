<template>
    <div class="home-container">
        <section>
            <Pagination :current="pageNum" :data="listPosts" @change="goPage" />
        </section>
    </div>
</template>

<script>
import PostList from './../components/PostList'
import Pagination from './../components/Pagination'

export default {
    components: {
        PostList,
        Pagination
    },
    computed: {
        pageNum() {
            return this.$route.params.pageNum || 1
        },
        listPosts() {
            return this.posts || this.$posts
        }
    },
    methods: {
        goPage(pageNum) {
            const path = this.$site.themeConfig.pagination.path
            this.$router.push(pageNum === 1 ? '/' : path.replace(':pageNum', pageNum))
        }
    },
}
</script>