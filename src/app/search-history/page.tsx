import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function Trash() {
  return (
    <CommonLayout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="search-history/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
        >
          Search History
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" component="h2">
        Search History
      </Typography>

      <Box sx={{ mt: 20, textAlign: "center" }}>
        <Typography variant="h6" component="h1" gutterBottom color=" #323B4A">
          There is no search History!
        </Typography>
      </Box>
    </CommonLayout>
  );
}
