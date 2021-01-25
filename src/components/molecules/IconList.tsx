import React, { FunctionComponent } from 'react';
import Icon, { IconProps } from 'components/atoms/Icon';
import styled from '@emotion/styled';
import { shortId } from 'utilities/utils';

export type IconInfoObjType = {
  href: string;
  type: IconProps['type'];
};

export interface IconListProps {
  list: IconInfoObjType[];
  size: number;
}

export const IconListComponent = styled.div`
  display: flex;

  a + a {
    margin-left: 20px;

    @media (max-width: 768px) {
      margin-left: 15px;
    }
  }
`;

const IconList: FunctionComponent<IconListProps> = function ({ list, size }) {
  return (
    <IconListComponent>
      {list &&
        list.map(({ href, type }: IconInfoObjType) => {
          return (
            <a href={href} key={shortId()} rel="noreferrer" target="_blank" aria-label={type}>
              <Icon type={type} size={size} />
            </a>
          );
        })}
    </IconListComponent>
  );
};

export default IconList;
