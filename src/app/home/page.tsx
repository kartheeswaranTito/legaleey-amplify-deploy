// import CommonLayout_Home from "@/components/CommonLayout_Home";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Link,
//   TextField,
//   Typography,
// } from "@mui/material";
// import DocumentCard from "@/components/DocumentCard";

// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import SearchIcon from "@mui/icons-material/Search";
// import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
// import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
// import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

// export default function Home() {
//   return (
//     <CommonLayout_Home>
//       <Container maxWidth="md" sx={{ padding: 2 }}>
//         <Box
//           sx={{ textAlign: "center", }}
//         >
//           <Typography
//             sx={{
//               // fontFamily: "Roboto",
//               fontSize: "30px",
//               fontWeight: "700",
//               lineHeight: "35.16px",
//               textAlign: "center", 
//             }}
//           >
//             Welcome to your LEGALEEY AI search copilot.
//           </Typography>
//           <TextField
//             placeholder="Enter keyword to search all folders or select folder to search"
//             variant="outlined"
//             fullWidth
//             InputProps={{
//               startAdornment: <SearchIcon sx={{ mr: 1 }} />,
//               style: { borderRadius: 25, backgroundColor: "#FFFF" },
//             }}
//             sx={{
//               width: "558px",     
//               height: "50px",
//               padding: "13px 17px",
//               gap: "8px",
//               borderRadius: "28px 0px 0px 0px",
//               border: "1px solid transparent",
//               // opacity: 1, // Opacity should be a number between 0 and 1
//               // boxShadow: "0px 3px 3px -2px #00000021"
          
//             }}
//           />
//         </Box>

//         <Typography
//           sx={{
//             // fontFamily: "Roboto",
//             fontSize: "30px",
//             fontWeight: "600",
//             // lineHeight: "35.16px",
//             textAlign: "center", 
//             mt: 10,
//           }}
//         >
//           Welcome Vikas! Let's get started.
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <DocumentCard
//               title="There are no documents"
//               description="Start your AI copilot search journey with
//                LEGALEEY by uploading documents."
//               buttonText="UPLOAD DOCUMENT"
//               icon={
//                 <InsertDriveFileOutlinedIcon
//                   sx={{
//                     fontSize: 50,
//                     color: "#1a73e8",
//                     backgroundColor: " #F2F4F7",
//                   }}
//                 />
//               }
//               buttonLink="#"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <DocumentCard
//               title="Accurate results with intelligent search"
//               description="Intelligence search analyzes uploaded documents for you automatically."
//               linkText="KNOW MORE"
//               icon={
//                 <SearchIcon
//                   sx={{
//                     fontSize: 50,
//                     color: "#1a73e8",
//                     backgroundColor: " #F2F4F7",
//                     borderRight: "13px",
//                   }}
//                 />
//               }
//               linkHref="#"
//             />
//           </Grid>
//         </Grid>

//         <Box sx={{ textAlign: "center", mt: 4 }}>
//           <Box
//             component="a"
//             href="#"
//             sx={{
//               display: "inline-flex",
//               alignItems: "center",
//               backgroundColor: "#e3f2fd",
//               padding: "10px 20px",
//               borderRadius: "8px",
//               color: "#1a73e8",
//               fontWeight: "bold",
//               textDecoration: "none",
//               width: '100%',
//               justifyContent: 'center'
            
//             }}
//           >
//             <CardGiftcardIcon sx={{ mr: 1 }} />
//             Find What's New Here!
//           </Box>
//         </Box>
//       </Container>
//     </CommonLayout_Home>
//   );
// }

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
      <Container maxWidth="md" sx={{ padding: 2 }}>
      <Box
      sx={{
        background: "#F2F4F7",
        textAlign: "center",
        width: "1142px",
        height: "164px",
        top: "24px",
        left: "21px",
        padding: "32px 26px 32px 26px",
        gap: "8px",
        borderRadius: "20px",
        border: "1px solid transparent",
        opacity: 1
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

        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center", 
            mt: 10,
          }}
        >
          Welcome Vikas! Let's get started.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <DocumentCard
              title="There are no documents"
              description="Start your AI copilot search journey with
               LEGALEEY by uploading documents."
              buttonText="UPLOAD DOCUMENT"
              icon={
                <InsertDriveFileOutlinedIcon
                  sx={{
                    fontSize: 50,
                    color: "#1a73e8",
                    backgroundColor: " #F2F4F7",
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
                    backgroundColor: " #F2F4F7",
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
              backgroundColor: "#e3f2fd",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "#1a73e8",
              fontWeight: "bold",
              textDecoration: "none",
              width: '100%',
              justifyContent: 'center',
           
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
