import { changeTheNumber } from "./upDown";
import { combineReducers } from "redux";
import { authReducer } from './userAuthStatus';
import { userUpdate } from './usertypeupdate';
const rootReducer = combineReducers({
    changeTheNumber,
    authReducer,
    userUpdate
})
export default rootReducer