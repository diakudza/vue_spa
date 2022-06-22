export const userModule = {
    state: () => ({
        password: '',
        isAuth: '',
        email: '22ss',
        login: '',
        profile: [],
        host: process.env.VUE_APP_HOST_API
    }),
    getters: {
        getHost(state) {
            return state.host
        },
    },
    mutations: {
        setPassword(state, password) {
            state.password = password
        },
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth
        },
        setEmail(state, email) {
            state.email = email
        },
        setLogin(state, login) {
            state.login = login
        },
        setProfile(state, profile) {
            state.profile = profile
        },
    },
    actions: {

    },
    namespaced: true
}
