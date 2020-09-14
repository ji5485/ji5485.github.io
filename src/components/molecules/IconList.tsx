import React, { FunctionComponent } from 'react';
import Icon from 'components/atoms/Icon';
import styled from '@emotion/styled';

export interface IconListProps {
  list: [
    {
      href: string;
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
      {list && list.map(({ href, type }, index) => {
        return (
          <a href={href} key={index} target="_blank">
            <Icon type={type} scale={scale} />
          </a>
        );
      })}
    </IconListComponent>
  );
};

IconList.defaultProps = {
  scale: 1
};

export default IconList;
