import * as types from '../types'

export const initialState = {
user:{},
services:[],
businesses:[]

}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case types.REGISTER_SUCCESS:
            return{
                ...state,
            }

        case types.REGISTER_FAIL:
            return{
                ...state,
            }    

        case types.LOGIN_SUCCESS:
            return{
                ...state,
            }    

        case types.LOGIN_FAIL:
            return{
                ...state,
            }    

        default:
            return state;
    }
}