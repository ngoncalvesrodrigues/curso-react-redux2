import HEADER_TYPES from "./header.types";

export const setTitle = (title: string) => ({
  type: HEADER_TYPES.SET_TITLE,
  payload: { title },
});

// export const setTitle = (title: string) => {
//   return {
//     type: HEADER_TYPES.SET_TITLE,
//     payload: title,
//   };
// };
