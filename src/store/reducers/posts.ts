import { AnyAction } from "redux";
import { POST_TYPES } from "../action.types";
import { Post } from "../../models/Post";

const EMPTY_POST = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
};

const postList: Post[] = [];

const defaultState = {
  postList: postList,
  selectedPost: EMPTY_POST,
  fetchingPostList: false,
  error: null,
};

export default (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case POST_TYPES.FETCH_POST_LIST_PENDING:
      return {
        ...state,
        postList: [],
        selectedPost: EMPTY_POST,
        fetchingPostList: true,
      };
    case POST_TYPES.FETCH_POST_LIST_FULFILLED:
      return {
        ...state,
        fetchingPostList: false,
        postList: action.payload,
        selectedPost: action.payload[0],
      };
    case POST_TYPES.FETCH_POST_LIST_REJECTED:
      return {
        ...state,
        fetchingPostList: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
