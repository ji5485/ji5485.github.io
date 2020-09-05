import React, { FunctionComponent, ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

export interface LinkProps {
  to: string;
  target?: string;
  nestedStyle?: object;
  children: ReactNode;
}

export const LinkComponent = styled(GatsbyLink)`
  cursor: pointer;

  &.active {
    font-weight: 700;
  }
`;

const Link: FunctionComponent<LinkProps> = function({ to, target, nestedStyle, children }) {
  return <LinkComponent to={to} target={target} activeClassName="active" style={nestedStyle}>{children}</LinkComponent>
}

Link.defaultProps = {
  target: "_self",
  nestedStyle: {}
};

export default Link;