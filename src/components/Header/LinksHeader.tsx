import React from "react";
import { Link } from "react-router-dom";
import { LINKS } from "../../routes";

// type linkHeader = {
//   texto: string;
//   url: string;
// };

// interface ILinksHeaderProps {
//   links: linkHeader[];
// }

const arrayLinks = LINKS.map((link, index) => (
  <Link key={index} className="Header-link" to={link.url}>
    {link.texto}
  </Link>
));

export const LinksHeader = () => {
  return <div>{arrayLinks}</div>;
};
