import { AnyAction } from "redux";
import HEADER_TYPES from "./header.types";
//import { DEFAULT_TITLE } from "../../components/Header/Header.constants";

const defaultState = {
  title: "Aplicacion React",
  back: {
    color: "",
    icono: "",
  },
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  switch (type) {
    case HEADER_TYPES.SET_TITLE:
      return {
        ...state,
        title: payload.title,
      };
    case HEADER_TYPES.SET_COLOR:
      return {
        ...state,
        back: {
          ...state.back,
          color: payload,
        },
      };
    default:
      return state;
  }
};
