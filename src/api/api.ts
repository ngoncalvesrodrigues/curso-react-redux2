import axios, { AxiosResponse } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export const getPostList = (): Promise<AxiosResponse> =>
  // parsing de datos API, transformaciones, builder

  // dispatch(accion_pending)
  axios.get(`${baseURL}/posts`).then((res) => res.data); // -> fullfiled (THUNK)
//.then((dato) => dispatch(accion_exitosa(datos))) -> xxxx_SUCESS
//.catch(err) => dispatch(accion_error(error)))

export const getPost = (id: string) =>
  axios.get(`${baseURL}/posts/${id}`).then((res) => res.data);

export const getComments = (postId: string) =>
  axios.get(`${baseURL}/posts/${postId}/comments`).then((res) => res.data);
