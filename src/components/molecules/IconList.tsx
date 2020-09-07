import React, { FunctionComponent } from 'react';
import Link from 'components/atoms/Link';
import Icon from 'components/atoms/Icon';
import styled from '@emotion/styled';

export interface IconListProps {
  list: [
    {
      to: string;
      type: string;
    },
  ];
  scale: number;
}

export const IconListComponent = styled.div`
  display: flex;
  
  a + a {
    margin-left: 20px;
  }
`;

const IconList: FunctionComponent<IconListProps> = function ({ list, scale }) {
  return (
    <IconListComponent>
      {list && list.map(({ to, type }, index) => {
        return (
          <Link to={to} key={index} target="_blank">
            <Icon type={type} scale={scale} />
          </Link>
        );
      })}
    </IconListComponent>
  );
};

IconList.defaultProps = {
  scale: 1
};

export default IconList;
