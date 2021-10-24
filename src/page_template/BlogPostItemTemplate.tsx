import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { OtherItemInfo } from 'components/organisms/PostItemFoot'
import Layout from 'components/templates/Layout'
import BlogPostItem from 'components/templates/BlogPostItem'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type BlogPostItemTemplateProps = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        date: string
        summary: string
        categories: string[]
        thumbnail: {
          publicURL: string
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
      }
      tableOfContents: string
    }
    site: {
      siteMetadata: {
        siteUrl: string
      }
    }
  }
  pageContext: {
    prev: OtherItemInfo | null
    next: OtherItemInfo | null
    slug: string
  }
}

const BlogPostItemTemplate: FunctionComponent<BlogPostItemTemplateProps> =
  function ({
    data: {
      markdownRemark: { html, frontmatter, tableOfContents },
      site: {
        siteMetadata: { siteUrl },
      },
    },
    pageContext: { prev, next, slug },
  }) {
    const postItemMetaData = {
      title: frontmatter.title,
      description: frontmatter.summary,
      image: frontmatter.thumbnail.publicURL,
      url: siteUrl + slug,
    }

    return (
      <Layout {...postItemMetaData}>
        <BlogPostItem
          postInfo={frontmatter}
          html={html}
          prevItem={prev}
          nextItem={next}
          toc={tableOfContents}
        />
      </Layout>
    )
  }

export default BlogPostItemTemplate

export const blogQuery = graphql`
  query getBlogData($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        summary
        categories
        thumbnail {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 768, height: 450)
          }
        }
      }
      tableOfContents
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
