import axios, { AxiosResponse } from "axios";
import { Post } from "../models/Post";

const baseURL = "https://jsonplaceholder.typicode.com";

export const getPostList = (): Promise<AxiosResponse> =>
  // parsing de datos API, transformaciones, builder

  // dispatch(accion_pending)
  axios.get(`${baseURL}/posts`); //.then((res) => res.data); // -> fullfiled (THUNK)
//.then((dato) => dispatch(accion_exitosa(datos))) -> xxxx_SUCESS
//.catch(err) => dispatch(accion_error(error)))

export const getPost = (id: string) =>
  axios.get(`${baseURL}/posts/${id}`).then((res) => res.data);

export const createPost = (post: Post) => axios.post(`${baseURL}/xposts`, post); //.then((res) => res.data); // transformacion datos al formato FE + validacion
// .catch((err) => {
//   // console.log(err.message);
//   // console.log(err.response.status);
//   // console.log(err.response.data);
//   // console.log(err.response.headers);
//   // generar log -> BE sistema log errores
//   // procesamiento del error
//   throw new Error("Se ha producido un error creando el post");
// });

export const getComments = (postId: string) =>
  axios.get(`${baseURL}/posts/${postId}/comments`).then((res) => res.data);
