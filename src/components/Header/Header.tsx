import React from "react";
import { useSelector } from "react-redux";
import { headerStyle } from "./Header.style";
import { LinksHeader } from "./LinksHeader";
import { HeaderBar } from "./Header.stylesV2";

interface IHeaderProps {
  // title: string;
  //links: any[];
  color?: string;
}

export const Header = ({ color = "" }: IHeaderProps) => {
  // @ts-ignore
  const title = useSelector((state) => state.header.title);
  //const { title, links, color = "" } = props;
  const lineaTitulo = <div>{`${title} v3`}</div>;
  // const lineaTitulo = <div>{title + " v3"}</div>;
  return (
    // <div style={headerStyle(color)}>
    <HeaderBar>
      <div>{lineaTitulo}</div>
      <LinksHeader />
    </HeaderBar>
  );
};
