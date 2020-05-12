import { combineReducers } from "redux";

import header from "./header";
import posts from "./posts";
//import comments from "./comments";

export default combineReducers({
  header,
  posts,
  //  comments,
});
