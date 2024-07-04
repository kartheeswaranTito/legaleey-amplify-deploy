// import CommonLayout from "@/components/CommonLayout";
// import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";

// export default function Trash() {
//   return (
//     <CommonLayout>
//       <Breadcrumbs aria-label="breadcrumb">
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//           href="search-history/"
//         >
//           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
//         </Link>
//         <Link
//           underline="hover"
//           sx={{ display: "flex", alignItems: "center" }}
//           color="inherit"
//         >
//           Search History
//         </Link>
//       </Breadcrumbs>
//       <Typography variant="h4" component="h2">
//         Search History
//       </Typography>
//     </CommonLayout>
//   );
// }

import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image"; 
// import '@fontsource/roboto/600.css';

export default function Trash() {
  return (
    <CommonLayout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/search-history/"
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 200px)",
          textAlign: "center",
          position: "relative",
          mt: 2,
        }}
      >
        <Box sx={{ position: "relative", width: 301.32, height: 165.26 }}>
          <Image
            src="/images/history.png" // Correct path starting with a leading slash
            alt="Search History"
            layout="fill" // Fill the container
            objectFit="contain" // Maintain aspect ratio
          />
        </Box>
        <Typography
          variant="h6"
          component="h1"
          gutterBottom
          sx={{
            color: "#323B4A",
            fontFamily: "Roboto",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "22px",
            letterSpacing: "0.46px",
            mt: 2,
          }}
        >
          There is no search History!
        </Typography>
      </Box>
    </CommonLayout>
  );
}
