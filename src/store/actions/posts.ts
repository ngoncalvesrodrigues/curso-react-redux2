import * as api from "../../api/api";
import { POST_TYPES } from "../action.types";

export const fetchPostList = () => ({
  type: POST_TYPES.FETCH_POST_LIST,
  payload: api.getPostList(),
});
