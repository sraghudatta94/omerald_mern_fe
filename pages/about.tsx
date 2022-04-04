import Logo from '@components/atoms/logo';
import Layout from '@components/common';
import MetaData from '@public/static/metaData/metaTag';
import React from 'react';

const About = () => {
  return (
    <Layout>
      <MetaData title={'About'} content={'About omerald.com'} />

      <main className="body">
        <div className="w-[95vw] md:w-[65vw] m-auto">
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
          <div className="container">
            <div className="faq-content my-10">
              <Logo />
              <p className="text-md">
                We are a growing platform, motivated to Create a Sustainable,
                Upgrading & Updating medical system everyday.
              </p>
              <p className="text-md my-2">
                A Medical Ecosystem to bring back glorious Indian Medical System
                along with all other proven medical systems all around the world
                to bring best medical care to Indians belonging to various walks
                of life.
              </p>
              <p>You can follow us here for more updates:</p>
              <ol className="my-4 list-disc">
                <li className="text-gray-400">
                  <a href="https://www.instagram.com/omeraldsocial/">
                    Instagram
                  </a>
                </li>
                <li className="text-gray-400">
                  <a href="https://twitter.com/OmeraldAvin">Twitter</a>
                </li>
                <li className="text-gray-400">
                  <a href="https://pin.it/5LdLlQH">Pinterest</a>
                </li>
              </ol>
              {/* <p>
                We serve our users with, articles on health and wellbeing, and
                connecting individuals to medical experts for advice and
                guidance You can be part of the omerald ecosystem, by signing in
                using your contact and choosing to join as doctor or user Some
                of the services we offer are
                <ul className="my-2 pl-3 text-gray-400">
                  <li className="list-disc">Health Blogs by experts</li>
                  <li className="list-disc">Share medical reports</li>
                  <li className="list-disc">Doctor consultation</li>
                  <li className="list-disc">Managing your medical reports</li>
                </ul>
              </p> */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
