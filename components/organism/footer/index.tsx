import { SocialLinks } from '@components/molecule/social';
import { getTopics } from '@public/static/api';
import { TopicType } from '@public/static/types/topics';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import React from 'react';

const Footer = ({ topic }) => {
  let topicsList = topic ? topic : [];

  return (
    <>
      <footer className="pt-50 pb-20 bg-grey  ">
        <div className="container w-[95vw] md:w-[65vw]">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sidebar-widget wow fadeInUp animated mb-30">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">About Us</h5>
                </div>
                <div className="textwidget">
                  <p>
                    A Medical Ecosystem to bring best medical care to Indians
                    belonging to various walks of life.
                  </p>

                  <p className="mt-4">
                    <strong className="color-black mt-5">Follow us</strong>
                  </p>
                  <br />
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                    <SocialLinks />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Quick link</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-2">
                    <Link href="/#">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link href="/#">
                      <a>Help & Support</a>
                    </Link>
                  </li>

                  <li className="cat-item cat-item-6">
                    <Link href="/#">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>

                  <li className="cat-item cat-item-7">
                    <Link href="/#">
                      <a>User Agreement</a>
                    </Link>
                  </li>
                  <li className="cat-item cat-item-5">
                    <Link href="/#">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Topic Cloud</h5>
                </div>
                <div className="tagcloud mt-50">
                  {topicsList.slice(0, 4).map((topic: TopicType) => {
                    return (
                      <Link href="/category" key={topic.id}>
                        <a className="tag-cloud-link">{topic.title}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                data-wow-delay="0.3s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Newsletter</h5>
                </div>
                <div className="newsletter">
                  <p className="font-medium">
                    Subscribe to our newsletter and get our newest updates right
                    on your inbox.
                  </p>
                  <form className="input-group form-subcriber mt-30 d-flex">
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Enter your email"
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      Subscribe
                    </button>
                    <label className="mt-20">
                      {' '}
                      <input
                        className="mr-5"
                        name="name"
                        type="checkbox"
                        value="1"
                      />{' '}
                      I agree to the{' '}
                      <Link href="/#">
                        <a href="/#" target="_blank">
                          terms &amp; conditions
                        </a>
                      </Link>{' '}
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
            <p className="m-auto font-small text-muted">
              ©2022, Omerald.com | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

export async function getServerSideProps() {
  const topic = await fetch(getTopics);

  return {
    props: {
      topic,
    },
  };
}
