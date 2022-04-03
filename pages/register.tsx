import { articles, authors, topics } from 'prisma/db/getData';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import React from 'react';
import dynamic from 'next/dynamic';
import articleActionCreator from 'redux/actions/article';
import authorActionCreator from 'redux/actions/author';
import topicActionCreator from 'redux/actions/topics';
import { Links } from '@components/atoms/link';

const Layout = dynamic(() => import('@components/common'));

const Register = ({ article, author, topic }) => {
  const dispatch = useDispatch();

  let articleList = article ? article : [];
  let authorList = author ? author : [];
  let topicsList = topic ? topic : [];

  useEffect(() => {
    articleActionCreator.addArticle(dispatch, articleList);
    authorActionCreator.setAuthor(dispatch, authorList);
    topicActionCreator.setTopics(dispatch, topicsList);
  });

  return (
    <Layout>
      <main className="bg-grey pt-80 pb-50">
        <div className="container">
          <div className="login_wrap widget-taber-content w-[40vw] m-auto p-30 h-[45vh] bg-white border-radius-10">
            <div className="padding_eight_all bg-white">
              <div className="heading_s1 text-center">
                <h3 className="mb-30 text-2xl  font-weight-9900">
                  Create an account
                </h3>
              </div>
              <form method="post">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    placeholder="Enter Contact"
                  />
                </div>

                <div className="form-group  flex justify-center">
                  <button
                    type="submit"
                    className="button w-[15vw] bg-blue-700 button-contactForm btn-block"
                  >
                    Send &amp; OTP
                  </button>
                </div>
              </form>

              <div className="text-muted text-center">
                Already have an account?
                <Links href="/login">
                  <a> Sign in now</a>
                </Links>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Register;

export async function getStaticProps() {
  const article = await articles();
  const author = await authors();
  const topic = await topics();

  return {
    props: {
      article,
      author,
      topic,
    },
  };
}
