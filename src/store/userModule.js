export const userModule = {
    state: () => ({
        password: '',
        isAuth: '',
        email: '',
        login: '',
        loginFail: false,
        profile: [],
    }),
    getters: {

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
        setLoginFail(state, loginFail) {
            state.loginFail = loginFail
        },
        setProfile(state, profile) {
            state.profile = profile
        },
    },
    actions: {

    },
    namespaced: true
}
