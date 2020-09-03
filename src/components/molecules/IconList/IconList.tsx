import React, { FunctionComponent } from 'react';
import Icon from "components/atoms/Icon";
import styled from '@emotion/styled';

const IconListComponent = styled.div`
  ${Icon} + ${Icon} {
    margin-left: 10px;
  }
`;

const IconList: FunctionComponent<{}> = function ({}) {
  return <IconListComponent>
    <Icon type="instagram" />
    <Icon type="facebook" />
    <Icon type="github" />
  </IconListComponent>;
};

export default IconList;
