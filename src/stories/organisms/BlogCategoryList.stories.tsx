import React, { FunctionComponent } from 'react';
import BlogCategoryList from 'components/organisms/BlogCategoryList';
import { withKnobs } from '@storybook/addon-knobs';

const BlogCategoryListProps = [
  {
    node: {
      fields: {
        slug: '/blog/kittens/',
      },
      frontmatter: {
        title: 'Layout Development Through Modern CSS Techniques',
        summary: `Let's find out four ways to defend against SQL Injection hacking, and look at examples to see how they implement it.`,
        date: '2020/10/14',
        thumbnail:
          'https://www.notion.so/image/https%3A%2F%2Fstatics.goorm.io%2Fimages%2F1200_628_goorm_edu.png?table=block&id=313188d2-7086-41d6-bfe9-591105c022bc&width=3840&userId=259ce6c4-908e-4655-a6e7-19f62c9fd54e&cache=v2',
        categories: ['Web', 'Backend', 'Security'],
      },
    },
  },
  {
    node: {
      fields: {
        slug: '/blog/kittens/',
      },
      frontmatter: {
        title: 'Layout Development Through Modern CSS Techniques',
        summary: `Let's find out four ways to defend against SQL Injection hacking, and look at examples to see how they implement it.`,
        date: '2020/10/14',
        thumbnail:
          'https://www.notion.so/image/https%3A%2F%2Fstatics.goorm.io%2Fimages%2F1200_628_goorm_edu.png?table=block&id=313188d2-7086-41d6-bfe9-591105c022bc&width=3840&userId=259ce6c4-908e-4655-a6e7-19f62c9fd54e&cache=v2',
        categories: ['Web', 'Backend', 'Security'],
      },
    },
  },
  {
    node: {
      fields: {
        slug: '/blog/kittens/',
      },
      frontmatter: {
        title: 'Layout Development Through Modern CSS Techniques',
        summary: `Let's find out four ways to defend against SQL Injection hacking, and look at examples to see how they implement it.`,
        date: '2020/10/14',
        thumbnail:
          'https://www.notion.so/image/https%3A%2F%2Fstatics.goorm.io%2Fimages%2F1200_628_goorm_edu.png?table=block&id=313188d2-7086-41d6-bfe9-591105c022bc&width=3840&userId=259ce6c4-908e-4655-a6e7-19f62c9fd54e&cache=v2',
        categories: ['Web', 'Backend', 'Security'],
      },
    },
  },
  {
    node: {
      fields: {
        slug: '/blog/kittens/',
      },
      frontmatter: {
        title: 'Layout Development Through Modern CSS Techniques',
        summary: `Let's find out four ways to defend against SQL Injection hacking, and look at examples to see how they implement it.`,
        date: '2020/10/14',
        thumbnail:
          'https://www.notion.so/image/https%3A%2F%2Fstatics.goorm.io%2Fimages%2F1200_628_goorm_edu.png?table=block&id=313188d2-7086-41d6-bfe9-591105c022bc&width=3840&userId=259ce6c4-908e-4655-a6e7-19f62c9fd54e&cache=v2',
        categories: ['Web', 'Backend', 'Security'],
      },
    },
  },
  {
    node: {
      fields: {
        slug: '/blog/kittens/',
      },
      frontmatter: {
        title: 'Layout Development Through Modern CSS Techniques',
        summary: `Let's find out four ways to defend against SQL Injection hacking, and look at examples to see how they implement it.`,
        date: '2020/10/14',
        thumbnail:
          'https://www.notion.so/image/https%3A%2F%2Fstatics.goorm.io%2Fimages%2F1200_628_goorm_edu.png?table=block&id=313188d2-7086-41d6-bfe9-591105c022bc&width=3840&userId=259ce6c4-908e-4655-a6e7-19f62c9fd54e&cache=v2',
        categories: ['Web', 'Backend', 'Security'],
      },
    },
  },
];

export default {
  title: 'Organisms',
  component: BlogCategoryList,
  decorators: [withKnobs],
};

export const BlogCategoryListStory: FunctionComponent<{}> = function ({}) {
  return <BlogCategoryList list={BlogCategoryListProps} />;
};
