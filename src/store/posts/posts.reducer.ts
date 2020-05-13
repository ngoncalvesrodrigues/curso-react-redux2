import { AnyAction } from "redux";
import * as POST_TYPES from "./posts.types";
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
  fetchingPostDetail: false,
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
        postList: action.payload, // transformacion
        //selectedPost: action.payload[0],
      };
    case POST_TYPES.FETCH_POST_LIST_REJECTED:
      return {
        ...state,
        fetchingPostList: false,
        error: action.payload.message,
      };
    case POST_TYPES.FETCH_POST_PENDING:
      return {
        ...state,
        selectedPost: EMPTY_POST,
        fetchingPostDetail: true,
      };
    case POST_TYPES.FETCH_POST_FULFILLED:
      return {
        ...state,
        fetchingPostDetail: false,
        selectedPost: action.payload,
      };
    case POST_TYPES.FETCH_POST_REJECTED:
      return {
        ...state,
        fetchingPostDetail: false,
        error: action.payload.message,
      };
    case POST_TYPES.SET_SELECTED_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    default:
      return state;
  }
};
