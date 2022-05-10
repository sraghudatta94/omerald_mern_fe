import Layout from '@components/common';
import MetaData from '@public/static/metaData/metaTag';
import { policy } from 'prisma/db/getData';
import React from 'react';
import parse from 'html-react-parser';
const Privacy = ({ policies }) => {
  let policyList: any[] = policies ? policies : [];

  return (
    <Layout>
      <MetaData title={'Privacy'} content={'Our privacy policy'} />

      <main className="body">
        <div className="w-[95vw]  m-auto">
          <div className="archive-header mt-[10vh] ">
            <div className="container text-left">
              <h3 className="text-3xl font-bold">{policyList[3].s_key}</h3>
              <div className="breadcrumb my-2 flex">
                <p>Home</p>
                <span>
                  <a>{policyList[3].s_key}</a>
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="faq-content my-10">
              {parse(policyList[3].s_value)}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Privacy;

export async function getStaticProps() {
  const policies: any[] = await policy();

  return {
    props: {
      policies,
    },
  };
}
