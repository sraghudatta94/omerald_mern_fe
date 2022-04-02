import { homeBannerImage } from '@public/static/data/image';
import React, { FC } from 'react';
import Image from 'next/image';

const HomeBanner: FC = () => {
  return (
    <div className="featured-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <h2>Hello,</h2>
            <h2 className="mb-20 font-sm"> Welcome to Omerald</h2>
            <h5 className="text-muted">
              Dont miss out on the latest articles about Health, Fitness
              diseases, etc.
            </h5>
            <form className="input-group form-subcriber mt-30 d-flex">
              <input
                type="email"
                className="form-control bg-white font-small"
                placeholder="Enter your email"
              />
              <button className="btn bg-primary text-white" type="submit">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-lg-6 text-right d-none d-lg-block">
            <Image
              src={homeBannerImage}
              width="400"
              height="450"
              alt="bannerImage"
              placeholder="blur"
              blurDataURL="@public/assets/imgs/blur/doctor.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
