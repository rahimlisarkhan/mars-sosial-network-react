import { GET_USER_HEADER } from "../../types";

let initialState = {
    user:[]
}


export const headerRowReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USER_HEADER:
            return{...state, user:action.payload} 

        default:
            return state;
    }
}