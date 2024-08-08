import { GET_CATEGORY_LIST, GET_LATEST_PRODUCTS, GET_PRODUCT_DETAIL, GET_PRODUCT_LIST,GET_ALL_PRODUCTS, URL } from "../../constants/URLConstant";
import {AUTHENTICATE} from "../../constants/WebConstant";

const initialState = {
    token: null,
    productList: [],
    categoryList: [],
    productDetail: null,
    LatestProducts: [],
    allProduct:[],
    login:null,
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
                case GET_LATEST_PRODUCTS:
                return {
                    ...state,
                    LatestProducts: action.payload
                }
                case URL:
                return {
                    ...state,
                    login: action.payload
                }
                case GET_ALL_PRODUCTS:
                return {
                    ...state,
                    allProduct: action.payload
                }
        default:
            return state;
    }
}