import { AUTHENTICATE_URL, GET_CATEGORY_LIST, GET_LATEST_PRODUCTS, GET_PRODUCT_DETAIL, GET_PRODUCT_LIST,GET_ALL_PRODUCTS, URL, GET_MIX_DATA, ADD_CONTACT } from "../../constants/URLConstant";
import {AUTHENTICATE} from "../../constants/WebConstant";
import { fetchGET, fetchPOST } from "../../utils/NetworkUtils";

// export const getUnseenMcq = (type) => {
//     return async dispatch => {
//         try{
//             const resData = await fetchGET(LISTENING_URL+ 'UnseenlistenmcqsByLoa/' + type);
//             console.log(resData);
//             dispatch({
//                 type:UNSEEN_MCQ,
//                 payload: resData.data
//             });
//         }catch(error){
//             console.log(error);
//             throw error;
//         }
//     }
// };

export const authenticate = () => {
    return async dispatch => {
        try{
            const resData = await fetchGET(AUTHENTICATE_URL)
            console.log(resData);
            dispatch({
                type: AUTHENTICATE,
                payload: resData,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const getProductList = (state,query) => {
    return async dispatch => {
        try{
            const postData = {
                'Category' : state,
                'query' : query,
            }
            console.log(postData,"poastdata")
            const resData = await fetchPOST(GET_PRODUCT_LIST,postData)
            // console.log(resData.data);
            dispatch({
                type: GET_PRODUCT_LIST,
                payload: resData.data,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const getCategoryList = () => {
    return async dispatch => {
        try{
            const resData = await fetchGET(GET_CATEGORY_LIST)
            // const data = await res.json();
            // console.log(resData);
            dispatch({
                type: GET_CATEGORY_LIST,
                payload: resData.data,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const getProductDetail = (detail) => {
    return async dispatch => {
        try{
            const postData = {
                'id' : detail
            }
            const resData = await fetchPOST(GET_PRODUCT_DETAIL,postData)
            // console.log(resData.data);
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: resData.data,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const getLatestProducts = () => {
    return async dispatch => {
        try{
            
            const resData = await fetchGET(GET_LATEST_PRODUCTS)
            // console.log(resData.data);
            dispatch({
                type: GET_LATEST_PRODUCTS,
                payload: resData.data,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const getLoginDetail = (detail) => {
    return async dispatch => {
        try{
            const postData = {
                "username": "admin@test.com",
	            "password": "admin@1234"
            }
            const url = "http://localhost:8765/users/login";
            const resData = await fetchPOST(url,postData)
            // console.log(resData.data);
            dispatch({
                type: URL,
                payload: resData.data,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const getAllProduct = (state,query) => {
    return async dispatch => {
        try{
            const postData = {
                'Category' : state,
                'query' : query,
            }
            console.log(postData,"poastdata")
            const resData = await fetchPOST(GET_ALL_PRODUCTS,postData)
            // console.log(resData.data);
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: resData.data,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const getMixData = (state,query) => {
    return async dispatch => {
        try{
            const postData = {
                'Category' : 'cookware',
                'query' : query,
            }
            console.log(postData,"poastdata")
            const resData = await fetchPOST(GET_MIX_DATA,postData)
            // console.log(resData.data);
            dispatch({
                type: GET_MIX_DATA,
                payload: resData.data,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const addContact = (name,email,phone,message) => {
    return async dispatch => {
        try{
            const postData = {
                'name' : name,
                'email' : email,
                'phone' : phone,
                'message' : message,
            }
            console.log(postData,"poastdata")
            const resData = await fetchPOST(ADD_CONTACT,postData)
            // console.log(resData.data);
            if (resData && !resData.error_code) {
                dispatch({
                    type: ADD_CONTACT,
                    payload: resData,  // Save response data to Redux state or handle it
                });
            } else {
                console.error('Error from API:', resData.error_message);
            }

        } catch (err) {
            console.error('Error occurred:', err);
        }
    };
};