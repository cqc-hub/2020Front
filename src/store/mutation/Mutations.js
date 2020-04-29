import {save_User,save_RegName,clare_User} from './MutationName'
export const mutations={
    [save_User](state,payload){
        state.user=payload
        console.log(state.user);
    },
    [save_RegName](state,payload){
        state.regName=payload
    },
    [clare_User](state){
        state.user={}
    }
}