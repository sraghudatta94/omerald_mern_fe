import React from 'react';
import SearchedArticleCard from '@components/molecule/card/searchedArticle';

const SearchedArticle: React.FC<any> = ({ articlesList }: any) => {
  return (
    <div className="row mt-80">
      {articlesList ? (
        articlesList.map(article => {
          return <SearchedArticleCard key={article.id} {...article} />;
        })
      ) : (
        <p>No Articles</p>
      )}
    </div>
  );
};

export default SearchedArticle;
