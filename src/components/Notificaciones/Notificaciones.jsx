import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotificationBar } from "../ui";

export default function Notificaciones() {
  const errorMessage = useSelector((state) => state.error.message);
  const dispatch = useDispatch();
  const clearMessage = () => dispatch({ type: "CLEAR_ERROR_MESSAGE" });

  const type = "error"; // info, warning -> conectado al Redux

  const estiloNotificacion =
    type === "error" ? "Error-message" : "Success-message";

  return errorMessage ? (
    <NotificationBar type={type} onClick={clearMessage}>
      {errorMessage}
    </NotificationBar>
  ) : null;
}
