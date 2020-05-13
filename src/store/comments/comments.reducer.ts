import { AnyAction } from "redux";
import * as COMMENT_TYPES from "./comments.types";
import { Comment } from "../../models/Comment";

// const EMPTY_COMMENT = {
//   postId: 0,
//   id: 0,
//   name: "",
//   email: "",
//   body: "",
// };

const commentList: Comment[] = [];

const defaultState = {
  commentList: commentList,
  fetching: false,
};

export default (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case COMMENT_TYPES.FETCH_COMMENT_LIST_PENDING:
      return {
        ...state,
        commentList: [],
        fetching: true,
      };
    case COMMENT_TYPES.FETCH_COMMENT_LIST_FULFILLED:
      return {
        ...state,
        fetching: false,
        commentList: action.payload,
      };
    case COMMENT_TYPES.FETCH_COMMENT_LIST_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
