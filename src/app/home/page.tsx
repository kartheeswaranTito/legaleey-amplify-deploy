"use client";

import CommonLayout_Home from "@/components/CommonLayout_Home";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import DocumentCard from "@/components/DocumentCard";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchIcon from "@mui/icons-material/Search";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

export default function Home() {
  return (
    <CommonLayout_Home>
      <Box
        sx={{
          background: "#F2F4F7",
          textAlign: "center",
          width: "1142px",
          height: "164px",
          padding: "32px 26px 32px 26px",
          borderRadius: "20px",
          mt: 2,
          ml: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "35.16px",
            textAlign: "center",
          }}
        >
          Welcome to your LEGALEEY AI search copilot.
        </Typography>
        <TextField
          placeholder="Enter keyword to search all folders or select folder to search"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            style: { borderRadius: 25, backgroundColor: "#FFFF" },
          }}
          sx={{
            width: "558px",
            height: "50px",
            padding: "13px 17px",
            gap: "8px",
            borderRadius: "28px 0px 0px 0px",
            border: "1px solid transparent",
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center", mt: 12 }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Welcome Vikas! Let&apos;s get started.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            mt: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              boxShadow: 3,
              borderRadius: 2,
              textAlign: "left",
            }}
          >
            <DocumentCard
              title="There are no documents"
              description="Start your AI copilot search journey with LEGALEEY by uploading documents."
              buttonText="UPLOAD DOCUMENT"
              icon={
                <InsertDriveFileOutlinedIcon
                  sx={{
                    fontSize: 50,
                    color: "#1a73e8",
                    backgroundColor: "#F2F4F7",
                  }}
                />
              }
              buttonLink="#"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              boxShadow: 3,
              borderRadius: 2,
              textAlign: "left",
            }}
          >
            <DocumentCard
              title="Accurate results with intelligent search"
              description="Intelligent search analyzes uploaded documents for you automatically."
              linkText="KNOW MORE"
              icon={
                <SearchIcon
                  sx={{
                    fontSize: 50,
                    color: "#1a73e8",
                    backgroundColor: "#F2F4F7",
                  }}
                />
              }
              linkHref="#"
            />
          </Box>

          <Box
            component="a"
            href="#"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#e3f2fd",
              borderRadius: "8px ",
              border: "2px dashed #397EF3",
              width: "798px",
              height: "58px",
              color: "#1a73e8",
              fontWeight: "bold",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <CardGiftcardIcon sx={{ mr: 1 }} />
            <Typography>Find What&apos;s New Here!</Typography>
          </Box>
        </Box>
      </Box>
    </CommonLayout_Home>
  );
}
