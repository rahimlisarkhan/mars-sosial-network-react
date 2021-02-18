import * as type from "../../types";

let initialState = {
    profile: {
        user: [],
        posts:null,
        disableInput:false,
        isLoadingUser:null,
        isLoadingPost:null
    },
}

export const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {

        case type.ADD_SHARE:
            return {...state, profile:{...state.profile, posts:[...state.profile.posts, action.payload]}};

        case type.GET_USER:
            return {...state, profile:{...state.profile,user:action.payload}}

        case type.GET_USER_POSTS:
            return {...state, profile:{...state.profile, posts:action.payload}}

        case type.DISABLE_INPUT_BTN:
            return {...state, profile:{...state.profile, disableInput:action.payload}}

        case type.REQUEST_LOADING_USER:
            return {...state, profile:{...state.profile, isLoadingUser:action.payload}}

        case type.REQUEST_LOADING_POST:
            return {...state, profile:{...state.profile, isLoadingPost:action.payload}}
        
        default:
            return state;
    }
}