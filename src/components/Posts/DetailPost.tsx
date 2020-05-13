import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  selectorSelectedPost,
  selectorFetchingPostDetail,
} from "../../store/posts/posts.selectors";
import { Post } from "../../models/Post";
import { ROUTES } from "../../routes";

interface IDetallePostProps {
  post: Post;
}

const DetallePost = ({ post }: IDetallePostProps) => {
  const history = useHistory();
  const { id, title, body, userId } = post;

  const goCommentsPage = () => history.push(`${ROUTES.COMMENTS}/${id}`);
  return (
    <div>
      <button disabled={!id} onClick={goCommentsPage}>
        Ver Comentarios
      </button>
      <h3>id</h3>
      <div>{id}</div>
      <h3>title</h3>
      <div>{title}</div>
      <h3>body</h3>
      <div>{body}</div>
      <h3>User id</h3>
      <div>{userId}</div>
    </div>
  );
};

export const DetailPost = () => {
  const postDetail = useSelector(selectorSelectedPost);
  const fetchingPost = useSelector(selectorFetchingPostDetail);
  return (
    <div>
      {fetchingPost ? (
        <div>Cargando detalle de Post</div>
      ) : (
        <DetallePost post={postDetail} />
      )}
    </div>
  );
};
