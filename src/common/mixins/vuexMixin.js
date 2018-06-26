import state from '../../store/state'
import getters from '../../store/getters'
import actions from '../../store/actions'
import mutations from '../../store/mutations'
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'

export const vuexMixin = {
  computed: {
    ... mapState(Object.keys(state)),
    ... mapGetters(Object.keys(getters)),
  },
  methods: {
    ...mapActions(Object.keys(actions)),
    ...mapMutations(Object.keys(mutations)),
  }
}
