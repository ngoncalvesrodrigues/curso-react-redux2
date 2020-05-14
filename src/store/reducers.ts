import { combineReducers } from "redux";

import header from "./header/header.reducer";
import posts from "./posts/posts.reducer";
import comments from "./comments/comments.reducer";
import error from "./error/error.reducer";

export default combineReducers({
  header,
  error,
  posts,
  comments,
});
