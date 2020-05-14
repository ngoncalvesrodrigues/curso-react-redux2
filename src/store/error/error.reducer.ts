import { AnyAction } from "redux";

const defaultState = {
  message: "Mensaje por defecto",
  type: "", // 'warning', info, error
};

export default (state = defaultState, { type, payload }: AnyAction) => {
  if (type.includes("_REJECTED")) {
    return {
      ...state,
      message: payload.message,
    };
  }

  switch (type) {
    case "CLEAR_ERROR_MESSAGE":
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};
