import {createStore} from 'vuex';
import {userModule} from "@/store/userModule";
import {mainModule} from "@/store/mainModule";
export default createStore({
    modules: {
        user: userModule,
        main: mainModule,
    }
})
