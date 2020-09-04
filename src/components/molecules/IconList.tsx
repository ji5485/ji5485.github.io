import React, { FunctionComponent } from 'react';
import Link from 'components/atoms/Link';
import Icon, { IconComponent } from 'components/atoms/Icon';
import styled from '@emotion/styled';

export interface IconListProps {
  list: [
    {
      to: string;
      type: string;
    },
  ];
}

const IconListComponent = styled.div`
  ${IconComponent} + ${IconComponent} {
    margin-left: 30px;
  }
`;

const IconList: FunctionComponent<IconListProps> = function ({ list }) {
  return (
    <IconListComponent>
      {list.map(({ to, type }, index) => {
        return (
          <Link to={to} key={index}>
            <Icon type={type} />
          </Link>
        );
      })}
    </IconListComponent>
  );
};

export default IconList;
