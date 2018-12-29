import postMixin from './mixins/postMixin'
import VueHighlightJs from 'vue-highlight.js'
import Vuetify from 'vuetify/es5/components/Vuetify'
import VPagination from 'vuetify/es5/components/VPagination'

const Layout = () => import('./Layout')

export default ({ Vue, router, siteData: { themeConfig } }) => {
    Vue.use(VueHighlightJs)

    Vue.use(Vuetify, {
        components: {
            VPagination
        }
    })

    Vue.mixin({
        computed: {
            ...postMixin.computed,
        },

        methods: {
            ...postMixin.methods,
        }
    })

    router.addRoutes([
        {
            path: themeConfig.pagination.path,
            component: Layout
        }
    ])
}