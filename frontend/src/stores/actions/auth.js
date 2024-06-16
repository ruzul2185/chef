import {AUTHENTICATE} from "../../constants/WebConstant";

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
            console.log("Redux is working!");
            dispatch({
                type: AUTHENTICATE,
                payload: 2,
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}