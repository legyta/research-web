import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import selectedArticleReducer from "./selectedArticleReducer";
import { reducer as formReducer } from "redux-form";
import userReducer from "./userReducer";

const allReducers = combineReducers({
  category: categoryReducer,
  select: selectedArticleReducer,
  form: formReducer,
  user: userReducer,
});
export default allReducers;
