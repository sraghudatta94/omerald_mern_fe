import { homeBannerImage } from '@public/static/data/image';
import React from 'react';
import Image from 'next/image';

export const HomeBanner = () => {
  return (
    <div className="featured-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <h2>Hello,</h2>
            <h3 className="mb-20"> Welcome to my Omerald</h3>
            <h5 className="text-muted">
              Don't miss out on the latest articles about Health, Fitness
              diseases, etc...
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};
