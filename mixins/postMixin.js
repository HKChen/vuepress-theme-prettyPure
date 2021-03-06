import flatten from 'lodash.flatten'
import { compareDesc } from 'date-fns'
import { md, stripMd } from '../utils/index'

function orderPostsByDate(postCollection) {
    return postCollection.sort((a, b) =>
        compareDesc(a.frontmatter.date, b.frontmatter.date)
    )
}

export default {
    computed: {
        /**
         * @type {*}
         */
        $posts() {
            const { pages } = this.$site

            return orderPostsByDate(
                pages
                    .filter(({ path }) => this.$isPost(path))
                    .map(({ excerpt, ...rest }) => {
                        return {
                            preview: {
                                rendered: !!excerpt ? md.render(excerpt) : null,
                                plain: rest.frontmatter.preview || stripMd(excerpt)
                            },
                            ...rest
                        }
                    })
            )
        },

        $allTags() {
            // Flatten tags from each post into one array and remove duplicates
            const allPostTags = flatten(
                this.$posts.map(post => post.frontmatter.tags)
            )
            return Array.from(new Set(allPostTags))
        }
    },

    methods: {
        $isPost(postPath) {
            const {
                themeConfig: { postDir }
            } = this.$site

            return postPath.startsWith(postDir || '/posts/')
        }
    }
}