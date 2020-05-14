import styled from "styled-components";

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.color || props.theme.primary};
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
`;
