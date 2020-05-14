import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.2rem;
  border: solid 1px blue;
`;

interface IInputProps {
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const InputText = ({ value, onChange, className }: IInputProps) => {
  return (
    <StyledInput
      type="text"
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};
