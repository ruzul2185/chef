import { GET_PRODUCT_LIST } from "../../constants/URLConstant";
import {AUTHENTICATE} from "../../constants/WebConstant";

const initialState = {
    token: null,
    productList: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case AUTHENTICATE:
            return {
                ...state,
                token: state.token + action.payload,
            }
            case GET_PRODUCT_LIST:
                return {
                    ...state,
                    productList: action.payload
                }
        default:
            return state;
    }
}