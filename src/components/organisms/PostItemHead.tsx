import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Text, { TextComponent } from 'components/atoms/Text'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { dateFormat, shortId } from 'utilities/utils'

interface PostItemHeadProps {
  title: string
  date: string
  categories: string[]
  thumbnail: IGatsbyImageData
}

const Title = styled(Text)`
  font-size: 40px;
  font-weight: 700;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
  line-height: 1.5;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${TextComponent} {
    font-size: 15px;
    font-weight: 300;
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    ${TextComponent} {
      font-size: 12px;
    }
  }
`

const Date = styled.div`
  font-size: 15px;
  font-weight: 300;
  flex-shrink: 0;
  padding-left: 30px;

  @media (max-width: 768px) {
    padding: 0;
    font-size: 12px;
  }
`

const PostItemHead: FunctionComponent<PostItemHeadProps> = function ({
  title,
  date,
  categories,
  thumbnail,
}) {
  return (
    <div>
      <GatsbyImage image={thumbnail} alt="Thumbnail Image" />
      <Title>{title}</Title>
      <PostInfo>
        <Categories>
          {categories.map((category: string) => (
            <Text key={shortId()}>#{category}</Text>
          ))}
        </Categories>
        <Date>{dateFormat(date)}</Date>
      </PostInfo>
    </div>
  )
}

export default PostItemHead
