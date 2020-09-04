import React, { FunctionComponent, ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

export interface LinkProps {
  to: string;
  nestedStyle?: object;
  children: ReactNode;
}

export const LinkComponent = styled(GatsbyLink)`
  cursor: pointer;

  &.active {
    font-weight: 700;
  }
`;

const Link: FunctionComponent<LinkProps> = function({ to, nestedStyle, children }) {
  return <LinkComponent to={to} activeClassName="active" style={nestedStyle}>{children}</LinkComponent>
}

Link.defaultProps = {
  nestedStyle: {}
};

export default Link;