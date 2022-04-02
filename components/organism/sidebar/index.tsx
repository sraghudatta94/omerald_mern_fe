import React from 'react';
import dynamic from 'next/dynamic';

const PerfectScrollbar = dynamic(() => import('react-perfect-scrollbar'));
const Toggle = dynamic(() => import('./toggle/index'));
const Posts = dynamic(() => import('./posts/index'));
const TopicsList = dynamic(() => import('./topics/index'));

const Sidebar: React.FC = () => {
  return (
    <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
      <PerfectScrollbar>
        <Toggle />
        <div className="sidebar-inner">
          <TopicsList />
          <Posts />
        </div>
      </PerfectScrollbar>
    </aside>
  );
};

export default Sidebar;
