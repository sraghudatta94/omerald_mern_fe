import Layout from '@components/common';
import MetaData from '@public/static/metaData/metaTag';
import React from 'react';

const Privacy = () => {
  return (
    <Layout>
      <MetaData title={'Privacy'} content={'Our privacy policy'} />
      ds
      <main className="body">
        <div className="w-[95vw]  m-auto">
          <div className="archive-header mt-[10vh] ">
            <div className="container text-left">
              <h3 className="text-3xl font-bold">Privacy policy</h3>
              <div className="breadcrumb my-2 flex">
                <p>Home</p>
                <span>
                  <a>Privacy policy</a>
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="faq-content my-10">
              <p className="text-gray-400">
                Privacy Policy Your privacy is important to us. It is
                omerald.com s policy to respect your privacy regarding any
                information we may collect from you across our website,
                Medin.life , and other sites we own and operate. We only ask for
                personal information when we truly need it to provide a service
                to you. We collect it by fair and lawful means, with your
                knowledge and consent. We also let you know why we’re collecting
                it and how it will be used. We only retain collected information
                for as long as necessary to provide you with your requested
                service. What data we store, we’ll protect within commercially
                acceptable means to prevent loss and theft, as well as
                unauthorised access, disclosure, copying, use or modification.
                We don’t share any personally identifying information publicly
                or with third-parties, except when required to by law. Our
                website may link to external sites that are not operated by us.
                Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies. You are free to
                refuse our request for your personal information, with the
                understanding that we may be unable to provide you with some of
                your desired services. Your continued use of our website will be
                regarded as acceptance of our practices around privacy and
                personal information. If you have any questions about how we
                handle user data and personal information, feel free to contact
                us. More Information Hopefully that has clarified things for you
                and as was previously mentioned if there is something that you
                arent sure whether you need or not its usually safer to leave
                cookies enabled in case it does interact with one of the
                features you use on our site. This policy is effective as of Jan
                2022
              </p>
              <p className="text-gray-400 my-10">
                Third party vendors, including Google, use cookies to serve ads
                based on a users prior visits to your website or other websites.
                Googles use of advertising cookies enables it and its partners
                to serve ads to your users based on their visit to your sites
                and/or other sites on the Internet. Users may opt out of
                personalized advertising by visiting Ads Settings.
                (Alternatively, you can direct users to opt out of a third-party
                vendors use of cookies for personalized advertising by visiting
                www.aboutads.info.)
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Privacy;
