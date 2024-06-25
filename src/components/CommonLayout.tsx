"use client";
// components/CommonLayout.tsx
import React, { ReactNode } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import { Authenticator } from '@aws-amplify/ui-react';

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <Authenticator.Provider>
    <div>
      <TopNav />
      <div style={{  }}>
        <SideNav />
        {/* <main style={{  }}> */}
        <main style={{ marginLeft: '260px',marginTop:'15px' }}>
          {children}
        </main>
      </div>
    </div>
    </Authenticator.Provider>
  );
};

export default CommonLayout;