import React, { FunctionComponent, ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

export interface LinkProps {
  to: string;
  children: ReactNode;
}

const LinkComponent = styled(GatsbyLink)`
  cursor: pointer;

  &.active {
    font-weight: 700;
  }

  & + & {
    margin-top: 40px;
  }
`;

const Link: FunctionComponent<LinkProps> = function({ to, children }) {
  return <LinkComponent to={to} activeClassName="active">{children}</LinkComponent>
}

export default Link;