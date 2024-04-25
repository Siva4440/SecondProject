import { combineReducers } from "redux";
import loginReducer from "./loginSlice";
import registrationReducer from "./registrationSlice";
import cartReducer from './cartSlice'


const rootReducer = combineReducers({
    login : loginReducer,
    registration: registrationReducer,
    cart:cartReducer
})

export default rootReducer;
