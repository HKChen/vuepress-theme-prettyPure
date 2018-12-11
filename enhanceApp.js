import postMixin from '@theme/mixins/postMixin'
import VueHighlightJs from 'vue-highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
//import themeMixin from './mixins/themeMixin'

export default ({ Vue, options, router, siteData: { themeConfig } }) => {
    Vue.use(VueHighlightJs)

    Vue.mixin({
        computed: {
            ...postMixin.computed,
            // ...themeMixin.computed
        },

        methods: {
            ...postMixin.methods,
            // ...themeMixin.methods
        }
    })
}