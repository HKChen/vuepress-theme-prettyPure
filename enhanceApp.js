import postMixin from '@theme/mixins/postMixin'
import VueHighlightJs from 'vue-highlight.js'

export default ({ Vue, options, router, siteData: { themeConfig } }) => {
    Vue.use(VueHighlightJs)

    Vue.mixin({
        computed: {
            ...postMixin.computed,
        },

        methods: {
            ...postMixin.methods,
        }
    })
}