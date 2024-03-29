import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/molecules/PostItem'
import { shortId } from 'utilities/utils'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type PostItemType = {
  node: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      summary: string[]
      date: string
      categories: string[]
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export type PostListProps = {
  list: PostItemType[]
}

const PostListComponent = styled.div``

const PostList: FunctionComponent<PostListProps> = function ({ list }) {
  return (
    <PostListComponent>
      {list.map(
        ({
          node: {
            fields: { slug },
            frontmatter,
          },
        }: PostItemType) => (
          <PostItem slug={slug} {...frontmatter} key={shortId()} />
        ),
      )}
    </PostListComponent>
  )
}

export default PostList
