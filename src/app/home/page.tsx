import CommonLayout_Home from "@/components/CommonLayout_Home";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
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
      <Container maxWidth="lg" sx={{ padding: 2 }}>
        <Box
          sx={{
            textAlign: "center",
            background: "#F2F4F7",
            width: "100%",
            maxWidth: "1142px",
            height: "164px",
            margin: "24px auto",
            padding: "32px 26px",
            gap: "8px",
            borderRadius: "20px",
            border: "1px solid transparent",
            opacity: 1,
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
              margin: "13px auto 0",
              gap: "8px",
              borderRadius: "28px 0px 0px 0px",
              border: "1px solid transparent",
            }}
          />
        </Box>
      </Container>

      <Container maxWidth="md">
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            mt: 10,
            mb:2,
          }}
        >
          Welcome Vikas! Let's get started.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
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
                    boxShadow:'none',
                  
                  }}
                />
              }
              buttonLink="#"
            />
          </Grid>
          <Grid item xs={12}>
            <DocumentCard
              title="Accurate results with intelligent search"
              description="Intelligence search analyzes uploaded documents for you automatically."
              linkText="KNOW MORE"
              icon={
                <SearchIcon
                  sx={{
                    fontSize: 50,
                    color: "#1a73e8",
                    backgroundColor: "#F2F4F7",
                    borderRight: "13px",
                  }}
                />
              }
              linkHref="#"
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Box
            component="a"
            href="#"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#EBF2FE",
              padding: "10px 20px",
              gap: "8px",
              borderRadius: "8px ",
              border: "2px dashed #397EF3", 
              width: "850px",
              height: "58px",
              color: "#1a73e8",
              fontWeight: "bold",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <CardGiftcardIcon sx={{ mr: 1 }} />
            Find What's New Here!
          </Box>
        </Box>
      </Container>
    </CommonLayout_Home>
  );
}