import * as api from "../../api/api";
import * as COMMENT_TYPES from "./comments.types";

export const fetchComments = (id: string) => ({
  type: COMMENT_TYPES.FETCH_COMMENT_LIST,
  payload: api.getComments(id),
});
