import actionTypes from './actionTypes';
import { getAllCodeService } from "../../services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async(dispatch,getState)=>{
        try{
            let res=await getAllCodeService("GENDER");
            if(res&&res.errCode===0){
                // console.log('Check getState:',getState);
                dispatch(fetchGenderSuccess(res.data))
            }
            else{
                dispatch(fetchGenderFailed());
            }


        }catch(e){
            dispatch(fetchGenderFailed());
            console.log('fetGenderStart error',e);
        }
    }
    
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})
