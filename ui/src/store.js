import { reactive } from "vue";

export default reactive({
  state: {
    loading: true
  },

  setLoading(loading) {
    this.state.loading = loading;
  },
});