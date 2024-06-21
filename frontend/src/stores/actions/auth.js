import { AUTHENTICATE_URL, GET_CATEGORY_LIST, GET_PRODUCT_LIST } from "../../constants/URLConstant";
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

export const getProductList = (state) => {
    return async dispatch => {
        try{
            const postData = {
                'Category' : state
            }
            const resData = await fetchPOST(GET_PRODUCT_LIST,postData)
            console.log(resData.data);
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