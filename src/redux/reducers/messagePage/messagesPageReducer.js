import * as type from "../../types";

let initialState ={
    users: [],
    usersMessage: [],
    isLoadingMsg:null,
    isLoadingUsers:null,
    disableInput:false,
}

export const messagesPageReducer =(state=initialState,action) =>{

    switch (action.type){

        case type.SEND_UPDATE_MESSAGE:
            return {...state, usersMessage:[...state.usersMessage, action.payload]};

        case type.GET_USERS:
            return {...state, users: action.payload}
        
        case type.GET_MESSAGES_BY_ID:
            return{...state, usersMessage:action.payload}

        case type.REQUEST_LOADING_MSG:
            return{...state, isLoadingMsg:action.payload}

        case type.REQUEST_LOADING_USERS:
            return{...state, isLoadingUsers:action.payload}

        case type.DISABLE_INPUT_BTN:
            return{...state, disableInput:action.payload}

        default:
            return state;
    }
}
