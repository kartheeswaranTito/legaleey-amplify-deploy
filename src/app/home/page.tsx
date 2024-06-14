import CommonLayout from "@/components/CommonLayout";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <CommonLayout>
   <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>      {/* Your home page content */}
    </CommonLayout>
  );
  }