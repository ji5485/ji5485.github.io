import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Career, { CareerProps, CareerComponent } from 'components/molecules/Career';

export interface CareerListProps {
  careerList: [CareerProps];
}

export const CareerListComponent = styled.div`
  ${CareerComponent} + ${CareerComponent} {
    margin-top: 80px;
  }
`;

const CareerList: FunctionComponent<CareerListProps> = function ({ careerList }) {
  return (
    <CareerListComponent>
      {careerList.map(({ title, contents, direction }, index) => {
        return (
          <Career
            title={title}
            contents={contents}
            direction={direction}
            key={`${title}-${index}`}
          />
        );
      })}
    </CareerListComponent>
  );
};

export default CareerList;
