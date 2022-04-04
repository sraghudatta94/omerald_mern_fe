import Layout from '@components/common';
import { blurImage } from '@public/assets/imgs/blur';
import MetaData from '@public/static/metaData/metaTag';
import Image from 'next/image';
import React from 'react';

const Support = () => {
  return (
    <Layout>
      <MetaData
        title={'Support'}
        content={'Contact us or send us your query for help'}
      />
      <main className="body">
        <div className="w-[95vw] md:w-[65vw] m-auto">
          <div className="archive-header mt-[10vh] ">
            <div className="container text-left">
              <h3 className="text-3xl font-bold">Help and Support</h3>
              <div className="breadcrumb my-2 flex">
                <p>Home</p>
                <span>
                  <a>Help and Support</a>
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="faq-content my-10">
              <div className="row w-[60vw] h-[60vh]  grid grid-cols-2">
                <div>
                  <Image
                    src="https://res.cloudinary.com/raghu369/image/upload/v1649023022/Omerald/assets/contact_d8cew9.webp"
                    width={'700'}
                    height={'600'}
                    placeholder="blur"
                    blurDataURL={blurImage}
                    alt="signupbg"
                  />
                </div>
                <div className="px-5">
                  <h1 className="text-3xl font-bold border-b-2 pb-2">
                    Get In Touch
                  </h1>
                  <p className="my-3 text-lg">You can send contact enquiry</p>
                  <form className="grid grid-cols-1 gap-5">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-[23vw] border px-4 py-2"
                      required={true}
                    />

                    <input
                      type="text"
                      placeholder="Enter Contact"
                      required={true}
                      className="w-[23vw] border px-4 py-2"
                    />
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="w-[23vw] border px-4 py-2"
                      required={true}
                    />
                    <textarea
                      rows={5}
                      cols={30}
                      placeholder="Enter First Name"
                      className="w-[23vw] border px-4 py-2"
                      required={true}
                    />
                  </form>
                  <button
                    type="submit"
                    className="bg-orange-600 py-3 w-[10vw] text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Support;
