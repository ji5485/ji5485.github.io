import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Link, { LinkComponent } from 'components/atoms/Link'
import Text from 'components/atoms/Text'
import { dateFormat, shortId, splitOnUpper } from 'utilities/utils'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export type PostItemProps = {
  title: string
  summary: string[]
  date: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  categories: string[]
  slug: string
}

const PostItemComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px 0;
  border-top: 1px solid #1e1f21;
  border-bottom: 1px solid #1e1f21;

  & + & {
    border-top: none;
  }

  body.dark & {
    border-color: #ffffff;
  }
`

const Content = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled(LinkComponent)`
  font-size: 23px;
  font-weight: 400;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3px;

  ${LinkComponent} {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.75;
    margin-right: 10px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  ${LinkComponent}:hover {
    text-decoration: underline;
  }
`

const Date = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Summary = styled(Text)`
  font-size: 15px;
  font-weight: 300;
  opacity: 0.9;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 180px;

  @media (max-width: 768px) {
    display: none !important;
  }
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  summary,
  date,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  categories,
  slug,
}) {
  return (
    <PostItemComponent>
      <Content>
        <Title to={slug}>{title}</Title>
        <Category>
          {categories.map((category: string) => (
            <Link to={`/blog/${splitOnUpper(category)}/1`} key={shortId()}>
              #{category}
            </Link>
          ))}
        </Category>
        <Date>{dateFormat(date)}</Date>
        <Summary>{summary}</Summary>
      </Content>

      <ThumbnailImage image={gatsbyImageData} alt="Thumbnail Image" />
    </PostItemComponent>
  )
}

export default PostItem
