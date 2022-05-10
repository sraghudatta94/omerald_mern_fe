import MetaData from '@public/static/metaData/metaTag';
import dynamic from 'next/dynamic';
import { policy } from 'prisma/db/getData';
import React from 'react';
import parse from 'html-react-parser';

const Layout = dynamic(() => import('@components/common'));

const UserAgreement = ({ policies }) => {
  let policyList: any[] = policies ? policies : [];

  return (
    <Layout>
      <MetaData title={'User Agreement'} content={'Read our user policies'} />
      <main className="body">
        <div className="w-[95vw]  m-auto">
          <div className="archive-header mt-[10vh] ">
            <div className="container text-left">
              <h3 className="text-3xl font-bold">{policyList[4].s_key}</h3>
              <div className="breadcrumb my-2 flex">
                <p>Home</p>
                <span>
                  <a>{policyList[4].s_key}</a>
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="faq-content my-10">
              {parse(policyList[4].s_value)}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default UserAgreement;

export async function getStaticProps() {
  const policies: any[] = await policy();

  return {
    props: {
      policies,
    },
  };
}
