import React from 'react';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Toggle } from './toggle';
import { TopicsList } from './topics';
import { Posts } from './posts';

export const Sidebar: React.FC = () => {
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
