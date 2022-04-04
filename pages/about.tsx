import { SocialIcons } from '@components/atoms/icons';
import Logo from '@components/atoms/logo';
import Layout from '@components/common';
import SocialLinks from '@components/molecule/social';
import MetaData from '@public/static/metaData/metaTag';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <MetaData title={'About'} content={'About omerald.com'} />

      <main className="body">
        <div className="w-[95vw] min-h-[40vh] m-auto">
          <div className="archive-header mt-[10vh] ">
            <div className="container text-left">
              <h3 className="text-3xl font-bold">About</h3>
              <div className="breadcrumb my-2 flex">
                <p>Home</p>
                <span>
                  <a>About</a>
                </span>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="faq-content my-10">
              <p className="text-md">
                We are a growing platform, motivated to Create a Sustainable,
                Upgrading & Updating medical system everyday.
              </p>
              <p className="text-md my-2">
                A Medical Ecosystem to restore the glorious Indian Medical
                System, as well as all other proven medical systems from around
                the world, in order to provide the best medical care to Indians
                from all walks of life.
              </p>
              <p className="text-md my-2">
                The platform enables medical specialists to share their
                experience through blogs in order to assist our readers who are
                looking for information on any health topic or issue.
              </p>
              <p className="text-md my-2">Some of our products and services</p>
              <ul>
                <li className="list-disc ml-3">Health Blogs</li>
                <li className="list-disc ml-3">Doctor Consultation</li>
                <li className="list-disc ml-3">Medical report management</li>
                <li className="list-disc ml-3">
                  Personalized health management and analysis
                </li>
              </ul>
              <p className="text-md my-4">
                You can follow us here for more updates
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
