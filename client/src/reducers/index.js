import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import selectedArticleReducer from "./selectedArticleReducer";
//import formReducer from "./formReducer";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  category: categoryReducer,
  select: selectedArticleReducer,
  form: formReducer,
});
export default allReducers;
