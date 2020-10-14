import React, { FunctionComponent } from 'react';

const PortfolioItem: FunctionComponent<any> = function ({ pathContext }) {
  return <div>{pathContext.title}</div>;
};

export default PortfolioItem;
