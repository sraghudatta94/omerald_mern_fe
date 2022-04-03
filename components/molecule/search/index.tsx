import React from 'react';

export const SearchFilter: React.FC<any> = ({ onSubmit, onChange }: any) => {
  return (
    <form onSubmit={onSubmit}>
      <i className="elegant-icon icon_search mr-5 text-lg"></i>
      <input
        placeholder="Search Articles"
        type="text"
        onChange={e => onChange(e)}
        className=" border-bottom text-xl px-4"
      ></input>
    </form>
  );
};
