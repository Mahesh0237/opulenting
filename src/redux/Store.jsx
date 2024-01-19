import { createStore } from "redux";
import rootReducer from "./reducers";
import { setAuthStatus, setUserTypeUpdate } from "./actions";
const initialState = {
  isLoggedIn: localStorage.getItem('userAuthStatusnew') === 'true',
  usertTypeUpdateNew: localStorage.getItem('userTypeUpdateNew') === 'true'
};
const store = createStore(rootReducer, initialState)
store.dispatch(setAuthStatus(initialState.isLoggedIn))
store.dispatch(setUserTypeUpdate(initialState.usertTypeUpdateNew));
export default store

// import { createStore } from "redux";
// import rootReducer from "./reducers";
// const store = createStore(rootReducer)
// export default store
