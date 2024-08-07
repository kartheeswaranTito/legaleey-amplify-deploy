"use client";
// components/CommonLayout.tsx
import React, { ReactNode } from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import SearchFilter from "./SearchFilter";
import { Authenticator } from "@aws-amplify/ui-react";
import { Box } from "@mui/material";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <Authenticator.Provider>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <TopNav />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              borderTopLeftRadius: "30px",
              mt: -1,
              ml: -1,
              p: 1,
            }}
          >
            <Box sx={{ ml: 2 }}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </Authenticator.Provider>
  );
};

export default CommonLayout;
