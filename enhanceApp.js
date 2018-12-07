import postMixin from '@theme/mixins/postMixin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubAlt }from '@fortawesome/free-brands-svg-icons'
//import themeMixin from './mixins/themeMixin'

export default ({ Vue, options, router, siteData: { themeConfig } }) => {
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