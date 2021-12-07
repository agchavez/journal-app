import { types } from "../types/types";

/*

*/

const initialState = {
    id: 454566,
    name:"Gabriel"
}
export const authReducer = (state = initialState, action)=>{
        switch (action.type) {
            case types.login:
                return  {
                    uid: action.payload.uid,
                    name: action.payload.displayName,
                }
            case types.logout:
                return  {                    
                }
            default:
                return {};
        }
}