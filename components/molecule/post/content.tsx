import React from 'react';
import parse from 'html-react-parser';

const PostContent = ({ description }) => {
  return (
    <div className="entry-main-content dropcap wow fadeIn animated">
      <p>{parse(description)}</p>
    </div>
  );
};
export default PostContent;
