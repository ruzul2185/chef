import { AUTHENTICATE_URL } from "../../constants/URLConstant";
import {AUTHENTICATE} from "../../constants/WebConstant";
import { fetchGET } from "../../utils/NetworkUtils";

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