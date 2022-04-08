import React from 'react';

export const SearchFilter: React.FC<any> = ({
  onSubmit,
  onChange,
  ...props
}: any) => {
  return (
    <form onSubmit={onSubmit} {...props}>
      <i className="elegant-icon icon_search  text-lg"></i>
      <input
        placeholder="Search Articles"
        type="text"
        onChange={e => onChange(e)}
        className=" border-bottom text-xl px-1"
      ></input>
    </form>
  );
};
