import React, { FunctionComponent } from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PostItemHead from 'components/organisms/PostItemHead'
import PostItemBody from 'components/organisms/PostItemBody'
import PostItemFoot, { OtherItemInfo } from 'components/organisms/PostItemFoot'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface BlogPostItemProps {
  postInfo: {
    title: string
    date: string
    categories: string[]
    thumbnail: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
  html: string
  prevItem: OtherItemInfo | null
  nextItem: OtherItemInfo | null
  toc: string
}

const BlogPostItem: FunctionComponent<BlogPostItemProps> = function ({
  postInfo: {
    title,
    date,
    categories,
    thumbnail: {
      childImageSharp: { gatsbyImageData },
    },
  },
  html,
  prevItem,
  nextItem,
  toc,
}) {
  return (
    <PageTemplate>
      <PostItemHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostItemBody html={html} toc={toc} />
      <PostItemFoot prevItem={prevItem} nextItem={nextItem} />
    </PageTemplate>
  )
}

export default BlogPostItem
