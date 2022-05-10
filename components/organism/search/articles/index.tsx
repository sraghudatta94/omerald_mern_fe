import React from 'react';
import SearchedArticleCard from '@components/molecule/card/searchedArticle';
import Loader from '@components/common/loader';

const SearchedArticle: React.FC<any> = ({ articlesList }: any) => {
  return (
    <div className="row mt-80">
      {articlesList && articlesList.length > 0 ? (
        articlesList.map(article => {
          return <SearchedArticleCard key={article.id} {...article} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SearchedArticle;
