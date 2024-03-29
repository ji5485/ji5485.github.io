import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Text from 'components/atoms/Text'
import PortfolioItem, {
  PortfolioItemType,
} from 'components/molecules/PortfolioItem'
import { shortId } from 'utilities/utils'

type GraphQLPortfolioItemType = {
  node: PortfolioItemType
}

export interface PortfolioListProps {
  type: 'project' | 'activity'
  title: string
  list: GraphQLPortfolioItemType[]
}

const PortfolioListComponent = styled.div`
  & + & {
    margin-top: 120px;
  }
`

const Title = styled(Text)`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PortfolioList: FunctionComponent<PortfolioListProps> = function ({
  type,
  title,
  list,
}) {
  return (
    <PortfolioListComponent>
      <Title>#{title}</Title>

      <List>
        {list.map(({ node }: GraphQLPortfolioItemType, index: number) => (
          <PortfolioItem
            {...node}
            type={type}
            index={index + 1}
            key={shortId()}
          />
        ))}
      </List>
    </PortfolioListComponent>
  )
}

export default PortfolioList
