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
  creating: "",
  //creating: 'pending' | 'done' | 'error' | ''
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
        postList: action.payload.data, // transformacion
        status: action.payload.status,
        //selectedPost: action.payload[0],
      };
    case POST_TYPES.FETCH_POST_LIST_REJECTED:
      return {
        ...state,
        fetchingPostList: false,
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
      };
    case POST_TYPES.CREATE_POST_PENDING:
      return {
        ...state,
        creating: "pending",
      };
    case POST_TYPES.CREATE_POST_FULFILLED:
      return {
        ...state,
        creating: "done",
      };
    case POST_TYPES.CREATE_POST_REJECTED:
      return {
        ...state,
        creating: "error",
        error: action.payload.message, //Mensaje generico de error
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
