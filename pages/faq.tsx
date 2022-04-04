import Layout from '@components/common';
import { faqList } from '@public/static/faq';
import MetaData from '@public/static/metaData/metaTag';
import React from 'react';

const FAQ = () => {
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
              <h3 className="text-3xl font-bold">FAQ</h3>
              <div className="breadcrumb my-2 flex">
                <p>Home</p>
                <span>
                  <a>FAQ</a>
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="faq-content my-10">
              <ol>
                {faqList.map(list => {
                  return (
                    <li className="text-lg font-semibold" key={list.id}>
                      {list.que}
                      <span className="d-block text-sm font-semibold my-2">
                        {list.ans}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default FAQ;
