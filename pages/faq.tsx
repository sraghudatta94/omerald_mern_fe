import Layout from '@components/common';
import { faqList } from '@public/static/faq';
import MetaData from '@public/static/metaData/metaTag';
import { policy } from 'prisma/db/getData';
import React from 'react';
import parse from 'html-react-parser';

const FAQ = ({ policies }) => {
  let policyList: any[] = policies ? policies : [];

  return (
    <Layout>
      <MetaData
        title={'FAQ'}
        content={'Get answers to all the queries about omerald'}
      />
      <main className="body">
        <div className="w-[95vw]  m-auto">
          <div className="archive-header mt-[10vh] ">
            <div className="container text-left">
              <h3 className="text-3xl font-bold">{policyList[2].s_key}</h3>
            </div>
          </div>
          <div className="container">
            <div className="text-md text-gray-600 font-light my-10">
              {parse(policyList[2].s_value)}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default FAQ;

export async function getStaticProps() {
  const policies: any[] = await policy();

  return {
    props: {
      policies,
    },
  };
}
