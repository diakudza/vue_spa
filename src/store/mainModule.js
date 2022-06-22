export const mainModule = {
    state: () => ({
        host: process.env.VUE_APP_HOST_API
    }),
    getters: {
        getHost: state => {
            return state.host
        },
    },
    mutations: {
       setProfile(state, host) {
            state.profile = host
        },
    },
    actions: {

    },
    namespaced: true
}
