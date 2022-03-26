import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articleList } from '@public/static/data/topics';

export const Article: React.FC = () => {
  return (
    <div className="row mt-80">
      {articleList.slice(0, 3).map(article => {
        return (
          <div className="col-lg-4 col-md-6">
            <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
              <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                <Image src={article.image} width="80" height="80" alt="" />
              </div>
              <div className="post-content media-body">
                <h6>
                  <Link href="/category">
                    <a>Lifestyle</a>
                  </Link>
                </h6>
                <p className="text-muted font-small my-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
