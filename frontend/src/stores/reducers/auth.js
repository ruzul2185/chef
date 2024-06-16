import {AUTHENTICATE} from "../../constants/WebConstant";

const initialState = {
    token: 0,
};

export default (state = initialState, action) => {
    switch(action.type){
        case AUTHENTICATE:
            return {
                ...state,
                token: state.token + action.payload,
            }
        default:
            return state;
    }
}