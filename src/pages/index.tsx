import React, { FunctionComponent } from 'react';
import Layout from "../Layout";
import Main from 'components/templates/Main';

const IndexPageProps = {
  profileImageLink:
    'https://avatars2.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4',
  profileImageAlt: 'Profile Image',
  iconList: [
    { to: 'https://github.com/ji5485', type: 'github' },
    { to: 'https://www.instagram.com/?hl=ko', type: 'instagram' },
    { to: 'https://www.facebook.com/', type: 'facebook' },
  ],
};

const IndexPage: FunctionComponent<{}> = function ({}) {
  return (
    <Layout>
      <Main
        profileImageLink={IndexPageProps.profileImageLink}
        profileImageAlt={IndexPageProps.profileImageAlt}
        iconList={IndexPageProps.iconList}
      />
    </Layout>
  );
};

export default IndexPage;
