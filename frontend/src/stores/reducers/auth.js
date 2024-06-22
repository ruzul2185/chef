import { GET_CATEGORY_LIST, GET_PRODUCT_DETAIL, GET_PRODUCT_LIST } from "../../constants/URLConstant";
import {AUTHENTICATE} from "../../constants/WebConstant";

const initialState = {
    token: null,
    productList: [],
    categoryList: [],
    productDetail: [],
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
                case GET_CATEGORY_LIST:
                return {
                    ...state,
                    categoryList: action.payload
                }
                case GET_PRODUCT_DETAIL:
                return {
                    ...state,
                    productDetail: action.payload
                }
        default:
            return state;
    }
}