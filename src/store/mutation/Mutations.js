import {save_User} from './MutationName'
export const mutations={
    [save_User](state,payload){
    state.user=payload
    console.log(state.user);
}
}