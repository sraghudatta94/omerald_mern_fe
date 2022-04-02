import React from 'react';

const Toggle: React.FC = () => {
  const removeClass = () => {
    document.body.classList.remove('canvas-opened');
  };

  return (
    <button className="off-canvas-close" onClick={removeClass}>
      <i className="elegant-icon icon_close"></i>
    </button>
  );
};

export default Toggle;
