import styled from "styled-components";

//type === "error" ? "Error-message" : "Success-message";
interface IGetBarColorProps {
  type: string;
}

const getBarColor = ({ type }: IGetBarColorProps): string => {
  switch (type) {
    case "error":
      return "lightsalmon";
    case "success":
      return "green";
    case "warning":
      return "orange";
    default:
      return "white";
  }
};

export const NotificationBar = styled.div`
  background-color: ${getBarColor};
  color: white;
  padding: 0.3rem;
  cursor: pointer;
`;
