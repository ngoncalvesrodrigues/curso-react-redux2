import React from "react";
import { headerStyle } from "./Header.style";
import { LinksHeader } from "./LinksHeader";

interface IHeaderProps {
  title: string;
  //links: any[];
  color?: string;
}

export const Header = ({ title, color = "" }: IHeaderProps) => {
  //const { title, links, color = "" } = props;
  const lineaTitulo = <div>{`${title} v2`}</div>;
  // const lineaTitulo = <div>{title + " v3"}</div>;
  return (
    <div style={headerStyle(color)}>
      <div>{lineaTitulo}</div>
      <LinksHeader />
    </div>
  );
};
