import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { SearchedArticlesType } from '@public/types';

const TrendingTopics = dynamic(() => import('./trending/index'));
const SearchedArticles = dynamic(() => import('./articles/index'));

const Search: FC<SearchedArticlesType> = ({
  openSearch,
}: SearchedArticlesType) => {
  return (
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
          <TrendingTopics />
          <SearchedArticles openSearch={openSearch} />
        </div>
      </div>
    </div>
  );
};

export default Search;
