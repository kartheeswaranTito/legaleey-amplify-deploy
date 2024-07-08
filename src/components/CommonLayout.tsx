
// components/CommonLayout.tsx
import React, { ReactNode } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import { red } from '@mui/material/colors';

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div style={{  }}>
        <SideNav />
        {/* <main style={{  }}> */}
        <main style={{ marginLeft: '260px',marginTop:'15px'}}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default CommonLayout;