export const mainModule = {
    state: () => ({
        host: process.env.VUE_APP_HOST_API,
        usersList: []
    }),
    getters: {
        getHost: state => {
            return state.host
        },
        getUsersList: state => {
            return state.usersList
        },
    },
    mutations: {
       setProfile(state, host) {
            state.host = host
        },
        setUsersList(state, usersList) {
            state.usersList = usersList
        },
    },
    actions: {

    },
    namespaced: true
}
