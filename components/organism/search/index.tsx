import React from 'react';
import { Trending } from './trending';
import { Article } from './articles';

export const Search = () => {
  return (
    <>
      <div className="main-search-form z-9">
        <div className="container">
          <div className=" pt-50 pb-50 ">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center">
                  <span className="search-text-bg">Search</span>
                </p>
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search author, articles, topics"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-search bg-white" type="submit">
                        <i className="elegant-icon icon_search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <Trending />
            <Article />
          </div>
        </div>
      </div>
    </>
  );
};
