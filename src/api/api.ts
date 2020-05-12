import axios, { AxiosResponse } from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export const getPostList = (): Promise<AxiosResponse> =>
  // parsing de datos API, transformaciones, builder
  axios.get(`${baseURL}/posts`).then((res) => res.data);
