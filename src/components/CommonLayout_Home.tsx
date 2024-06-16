
// components/CommonLayout.tsx
import React, { ReactNode } from 'react';
import TopNav_Home from './TopNav_Home';
import SideNav from './SideNav';

interface CommonLayout_HomeProps {
  children: ReactNode;
}

const CommonLayout_Home: React.FC<CommonLayout_HomeProps> = ({ children }) => {
  return (
    <div>
      <TopNav_Home />
      <div style={{  }}>
        <SideNav />
        {/* <main style={{  }}> */}
        <main style={{ marginLeft: '260px',marginTop:'15px' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default CommonLayout_Home;