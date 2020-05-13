import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../store/comments/comments.actions";
import { selectorComments } from "../store/comments/comments.selectors";
import { Comment } from "../models/Comment";

const Comments = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useDispatch();
  const commentsReduxState = useSelector(selectorComments);

  const { commentList, fetching } = commentsReduxState;

  const LoadComments = () => {
    const {
      match: {
        params: { id: postId },
      },
    } = props;
    // postId = props.match.params.id
    dispatch(fetchComments(postId));
  };

  useEffect(LoadComments, []);

  console.log("propiedades de Comments page: ", props);

  // archivo componente
  interface IListaComentariosProps {
    comments: Comment[];
  }

  const ListaComentarios = ({ comments }: IListaComentariosProps) => (
    <div>
      {comments.map((comment) => (
        <div>
          <h4>id</h4>
          <div>{comment.id}</div>
          <h4>name</h4>
          <div>{comment.name}</div>
          <h4>Body</h4>
          <div>{comment.body}</div>
          <h4>Email</h4>
          <div>{comment.email}</div>
        </div>
      ))}
    </div>
  );
  //

  return (
    <div>
      {fetching ? (
        <div>Cargando Comentarios...</div>
      ) : (
        <ListaComentarios comments={commentList} />
      )}
    </div>
  );
};

export default Comments;
