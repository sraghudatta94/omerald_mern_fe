import AboutTemplate from '@components/template/about';
import dynamic from 'next/dynamic';
import React from 'react';

const Layout = dynamic(() => import('@components/common'));

const About = () => {
  return (
    <Layout>
      <AboutTemplate />
    </Layout>
  );
};

export default About;
