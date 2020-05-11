import * as theme from "../../theme";

export const headerStyle = (color: string | undefined) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: color || theme.colorHeader,
  color: "white",
  padding: "1rem",
  marginBottom: "1rem",
});
