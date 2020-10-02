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
  size: number;
}

export const IconListComponent = styled.div`
  display: flex;

  a + a {
    margin-left: 20px;

    @media (max-width: 767px) {
      margin-left: 15px;
    }
  }
`;

const IconList: FunctionComponent<IconListProps> = function ({ list, size }) {
  return (
    <IconListComponent>
      {list &&
        list.map(({ href, type }, index) => {
          return (
            <a href={href} key={index} rel="noreferrer" target="_blank">
              <Icon type={type} size={size} />
            </a>
          );
        })}
    </IconListComponent>
  );
};

export default IconList;
