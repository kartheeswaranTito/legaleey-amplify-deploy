// components/CommonLayout.tsx
import React, { ReactNode } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div style={{ display: 'flex' }}>
        <SideNav />
        <main style={{ marginLeft: '200px' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default CommonLayout;
