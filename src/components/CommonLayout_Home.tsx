"use client";
// components/CommonLayout.tsx
import React, { ReactNode } from "react";
import TopNav_Home from "./TopNav_Home";
import SideNav from "./SideNav";
import { Authenticator } from "@aws-amplify/ui-react";
import { Box } from "@mui/material";

interface CommonLayout_HomeProps {
  children: ReactNode;
}

const CommonLayout_Home: React.FC<CommonLayout_HomeProps> = ({ children }) => {
  return (
    <Authenticator.Provider>
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <TopNav_Home />
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
            {children}
          </Box>
        </Box>
      </Box>
    </Authenticator.Provider>
  );
};

export default CommonLayout_Home;
