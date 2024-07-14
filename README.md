Steps need to be followed:

cd legaleey-next-amplify
   
npx create-next-app@latest my-nextjs-app
 
npm install aws-amplify @aws-amplify/ui-react

npm install -g @aws-amplify/cli

amplify init

access key/Profile

amplify add auth/amplify update auth(If you've already added to this project)

amplify pull

amplify push

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/icons-material

npm install @mui/material @mui/lab (my documents page tab component)

npm install node-sass (this for scss file)

npm install sass

npm run dev



---------------------------

"use client"
import React from 'react';
import { Authenticator, useAuthenticator, useTheme, CheckboxField, ThemeProvider } from '@aws-amplify/ui-react';
import { View, Heading, Text } from '@aws-amplify/ui-react';
import { Link, Typography, Box, TextField, Button, Grid } from '@mui/material';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, I18n } from '@aws-amplify/core';

Amplify.configure({
  // Your Amplify configuration
});

I18n.putVocabulariesForLanguage('en', {
  'Sign In': 'Login',
  'Sign in': 'Log in',
  'Sign in to your account': 'Welcome Back!',
  'Enter your password': 'Enter Password',
  'Forgot your password?': 'Reset Password',
});

const buttonTheme = {
  name: 'button_theme',
  tokens: {
    components: {
      button: {
        primary: {
          backgroundColor: { value: '{colors.blue[60]}' },
        },
      },
    },
  },
};

const components = {
  Header() {
    return null;
  },

  Footer() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved by LEGALEEY
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading>
          <Typography color="primary" variant="h4" p={1} mx={3}>
            LEGALEEY
          </Typography>
          <Typography variant="h5" p={1} mx={3}>
            Sign in
          </Typography>
          <Typography p={1} mx={3}>
            to continue benefiting from LEGALEEY, your trusted Legal AI search assistance
          </Typography>
        </Heading>
      );
    },
    Footer() {
      const { toSignUp } = useAuthenticator();
      return (
        <View textAlign="center">
          <Text>
            New here?{' '}
            <Link
              component="button"
              onClick={toSignUp}
              sx={{ color: '#1469FB', textDecoration: 'none' }}
            >
              Create an account
            </Link>
          </Text>
        </View>
      );
    },
    Provider: {
      Buttons() {
        return (
          <Box display="flex" justifyContent="center" mb={2}>
            <Button
              variant="outlined"
              sx={{ m: 1 }}
              startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg" alt="Google logo" style={{ width: '20px' }} />}
            >
              Login with Google
            </Button>
            <Button
              variant="outlined"
              sx={{ m: 1 }}
              startIcon={<img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple logo" style={{ width: '20px' }} />}
            >
              Login with Apple
            </Button>
          </Box>
        );
      },
    },
    FormFields() {
      return (
        <>
          <TextField
            fullWidth
            margin="normal"
            label="Enter Email"
            variant="outlined"
            name="username"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Enter Password"
            type="password"
            variant="outlined"
            name="password"
          />
          <Box textAlign="right">
            <Link
              component="button"
              sx={{ color: '#1469FB', textDecoration: 'none' }}
              onClick={() => useAuthenticator().toForgotPassword()}
            >
              Forgot Password?
            </Link>
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            type="submit"
          >
            LOGIN
          </Button>
        </>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading>
          <Typography color="primary" variant="h4" p={1} mx={3}>
            LEGALEEY
          </Typography>
          <Typography variant="h5" p={1} mx={3}>
            Create an account
          </Typography>
          <Typography p={1} mx={3}>
            Start your journey with LEGALEEY, trusted by thousands <br /> for reliable legal AI search assistance!
          </Typography>
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View textAlign="center">
          <Text>
            Already have an account?{' '}
            <Link
              component="button"
              onClick={toSignIn}
              sx={{ color: '#1469FB', textDecoration: 'none' }}
            >
              Log In
            </Link>
          </Text>
        </View>
      );
    },
    FormFields() {
      return (
        <>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <TextField
              id="outlined-basic"
              label="First name*"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Last name*"
              variant="outlined"
              fullWidth
            />
          </Box>
          <TextField
            fullWidth
            margin="normal"
            label="Enter Address*"
            variant="outlined"
            name="username"
          />
          <TextField
            id="outlined-textarea"
            label="Phone number*"
            placeholder="+1 0000-000-000"
            multiline
          />
          <Box sx={{ fontSize: '0.75rem' }}>
            <CheckboxField
              label={
                <span>
                  I have read and agree to the{' '}
                  <span style={{ color: '#1469FB' }}>Terms & Conditions</span> and{' '}
                  <span style={{ color: '#1469FB' }}>Privacy Policy</span>.
                </span>
              }
              name="subscribe"
              value="yes"
            />
          </Box>
         
        </>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter Email',
    },
    password: {
      placeholder: 'Enter Password',
    },
  },
  signUp: {
    username: {
      placeholder: 'Enter Email*',
    },
    phone_number: {
      label: 'Phone Number:',
      placeholder: 'Enter your Phone Number:',
      isRequired: true,
    },
    password: {
      placeholder: 'Enter Password*',
    },
  },
};

export default function App() {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item>
          <Box width={596} height={829} top={125} left={422} position="absolute"  >
            <Authenticator formFields={formFields} components={components}>
              {({ signOut }) => (
                <Button onClick={signOut} variant="contained" color="secondary">
                  Sign out
                </Button>
              )}
            </Authenticator>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
----------------------------------list and grid before adding -----------------------
// components/MyDocuments.tsx

"use client"; // Ensure this component is client-side

import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  InputBase,
  Link,
  Tab,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add } from "@mui/icons-material";

// import styles from '../../styles/addNewPage.module.css';


export default function MyDocuments() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <CommonLayout>
      {/* <Box sx={{ width: "100%", typography: "body1", mt: 2, px: 2, ml: 0 }}> */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="my-documents/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            My Documents
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" component="h2">
          My Documents
        </Typography>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
            <TabList
              onChange={handleChange}
              aria-label="Document tabs"
              centered
              textColor="primary"
              indicatorColor="primary"
              variant="scrollable" // Makes tabs scrollable on small screens
              scrollButtons="auto"
            >
              <Tab label="VERIFIED" value="1" />
              <Tab label="UNVERIFIED" value="2" />
              <Tab label="IN PROGRESS" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
        
          </TabPanel>
          <TabPanel value="2">
           
          </TabPanel>
          <TabPanel value="3">
        
          </TabPanel>
        </TabContext>
      {/* </Box> */}
     

      
      <Box sx={{ mt: 20, textAlign: 'center' }}>
        <Typography variant="h6" component="h1" gutterBottom   color=" #323B4A">
          There Are No Verified Documents
        </Typography>
        
            <Button
              variant="contained"
              size="large"
              startIcon={<Add />}
              sx={{
                // width: '100%',
                // height: '56px',
                // fontSize: '1rem',
                // fontWeight: 'bold',
                // marginLeft:'10%'
                textAlign: 'center'
              }}
            >
              ADD NEW
            </Button>
        
      </Box>
   
    </CommonLayout>
  );
}
-----------------------------------------------------------------trash page

import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, IconButton, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";

const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

const handleViewModeChange = (mode: string) => {
  setViewMode(mode);
};

export default function Trash() {
  function handleViewModeChange(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <CommonLayout>
      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="my-documents/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            Trash
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" component="h2">
          Trash
        </Typography>
        <Box>
            <IconButton onClick={() => handleViewModeChange("list")} color={viewMode === "list" ? "primary" : "default"}>
              <MenuIcon />
            </IconButton>
            <IconButton onClick={() => handleViewModeChange("grid")} color={viewMode === "grid" ? "primary" : "default"}>
              <GridViewIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ mt: 20, textAlign: 'center' }}>

        <Typography variant="h6" component="h1" gutterBottom   color=" #323B4A">
          Nothing in Trash
        </Typography>
        </Box>
    </CommonLayout>
  );
  }

function setViewMode(mode: string) {
  throw new Error("Function not implemented.");
}
function setValue(newValue: string) {
  throw new Error("Function not implemented.");
}

---------------------------------------------finalr trash with list &grid view ---------------------
"use client"
import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
  Container,
  InputBase,
  Tab,
  alpha,
  styled,
} from "@mui/material";
import { Box, Breadcrumbs, IconButton, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";

export default function Trash() {
  const [viewMode, setViewMode] = React.useState("list");

  const handleViewModeChange = (mode: string) => {
    setViewMode(mode);
  };

  return (
    
    <CommonLayout>
      <Box sx={{ width: "100%", typography: "body1", mt: 2, px: 2, ml: 0 }}>
        <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="my-documents/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            Trash
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" component="h2">
          Trash
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
              <TabList
                onChange={handleChange}
                aria-label="Document tabs"
                centered
                textColor="primary"
                indicatorColor="primary"
                variant="scrollable" // Makes tabs scrollable on small screens
                scrollButtons="auto"
              >
                <Tab label="VERIFIED" value="1" />
                <Tab label="UNVERIFIED" value="2" />
                <Tab label="IN PROGRESS" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {/* Content for VERIFIED */}
            </TabPanel>
            <TabPanel value="2">
              {/* Content for UNVERIFIED */}
            </TabPanel>
            <TabPanel value="3">
              {/* Content for IN PROGRESS */}
            </TabPanel>
          </TabContext>
          <Box>
            <IconButton onClick={() => handleViewModeChange("list")} color={viewMode === "list" ? "primary" : "default"}>
              <MenuIcon />
            </IconButton>
            <IconButton onClick={() => handleViewModeChange("grid")} color={viewMode === "grid" ? "primary" : "default"}>
              <GridViewIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <IconButton onClick={() => handleViewModeChange("list")} color={viewMode === "list" ? "primary" : "default"}>
              <MenuIcon />
            </IconButton>
            <IconButton onClick={() => handleViewModeChange("grid")} color={viewMode === "grid" ? "primary" : "default"}>
              <GridViewIcon />
            </IconButton>
          </Box>
        </Box>
        </Box>

        <Box sx={{ mt: 20, textAlign: 'center' }}>
          <Typography variant="h6" component="h1" gutterBottom color="#323B4A">
            Nothing in Trash
          </Typography>
        </Box>
      </Box>
    </CommonLayout>
  );
}
---------------------------------email verification------------------------------------

"use client"
import React from 'react';
import { Authenticator, Heading, View, Image, Button,useAuthenticator,useTheme, Theme, ThemeProvider, Text, Flex, Link, CheckboxField} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import awsExports from './../../../aws-exports';
import { I18n } from 'aws-amplify/utils';
import { Amplify } from 'aws-amplify';
import { Box, TextField } from '@mui/material';
import Home from '@/app/home/page';


Amplify.configure(awsExports);


I18n.putVocabularies({
 en: {
    'Sign In': 'LOGIN',
    'Sign in':  'LOGIN',
    'Create Account': 'CREATE ACCOUNT'
  

  },
});

const theme: Theme = {
  name: 'Auth Example Theme',
  tokens: {
    components: {
      authenticator: {
        // router: {
        //   boxShadow: `0 0 16px #000000`,
        //   borderWidth: '0',
        
        // },
        form: {
          padding: `16px 32px 16px`,
        },
      },
      button: {
        primary: {
          backgroundColor: '#1469FB', // Custom background color
          color: '#ffffff', // Custom text color
          // _hover: {
          //   backgroundColor: '#1257CC', // Custom hover background color
          // },
        },
        // link: {
        //   color: '#1469FB', // Custom link color
        // },
      },
      fieldcontrol: {
        _focus: {
          boxShadow: `0 0 0 2px #1469FB`,
        },
      },
      tabs: {
        item: {
          color: '#333333',
          _active: {
            borderColor: '#000000',
            color: '#1469FB',
          },
        },
      },
    },
  },
};
const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        {/* <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        /> */}
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved by LEGALEEY
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <View>
          <Heading padding={`0 0 0 ${tokens.space.xl}`} level={4}>
            <Text color={"#1469FB"}>LEGALEEY</Text>
            <Text marginTop="5px">Sign in</Text>
          </Heading>
          <Flex>
            <Text color={"#7E7E83"} padding={`11px 0 0 ${tokens.space.xl}`} fontSize="14px">
              to continue benefiting from LEGALEEY, your trusted Legal AI search assistance
            </Text>
          </Flex>
        </View>
      );
    },
    Footer() {
      const { toSignUp ,toForgotPassword  } = useAuthenticator();
      return (
        <View textAlign="center">
          <Link onClick={toForgotPassword} color="#1469FB">Forgot Password</Link>
        
          {/* <Text color="#7E7E83">New here? <Link onClick={toSignUp} color="#1469FB">Create an Account</Link></Text> */}
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <View>
          <Heading padding={`0 0 0 ${tokens.space.xl}`} level={4}>
            <Text color={"#1469FB"}>LEGALEEY</Text>
            <Text marginTop="5px">Create an Account</Text>
          </Heading>
          <Flex wrap={"cce"}>
            <Text color="#7E7E83" padding={`11px 0 0 ${tokens.space.xl}`} fontSize="14px">
              Start your journey with LEGALEEY, trusted by thousands for reliable legal AI search assistance!
            </Text>
          </Flex>
        </View>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View textAlign="center">
           <Link onClick={toSignIn} color="#1469FB">Back to Sign In</Link>
        </View>
       
        // <View textAlign="center">
        //   <Text color="#7E7E83">Already have an account? <Link onClick={toSignIn} color="#1469FB">Log In</Link></Text>
        // </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
         <View>
          <Heading padding={`${tokens.space.xl} 0 0 0`} level={4}>
            <Text color={"#1469FB"}>LEGALEEY</Text>
            <Text marginTop="5px">OTP Verification</Text>
          </Heading>
          {/* <Flex>
            <Text color={"#7E7E83"} padding={`11px 0 0 0`} fontSize="14px">
            Enter your Username to send OTP on your registered Email to complete the verification process.
            </Text>
          </Flex> */}
        </View>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information: shaa
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:jfkshk
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        // <Heading
        //   padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
        //   level={3}
        // >
        //   Enter Information:helooo
        // </Heading>
        <View>
          <Heading padding={`${tokens.space.xl} 0 0 0`} level={4}>
            <Text color={"#1469FB"}>LEGALEEY</Text>
            <Text marginTop="5px">Enter Username</Text>
          </Heading>
          <Flex>
            <Text color={"#7E7E83"} padding={`11px 0 0 0`} fontSize="14px">
            Enter your Username to send OTP on your registered Email to complete the verification process.
            </Text>
          </Flex>
        </View>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <View>
        <Heading padding={`${tokens.space.xl} 0 0 0`} level={4}>
          <Text color={"#1469FB"}>LEGALEEY</Text>
          <Text marginTop="5px">To Stay Protected: Create a password</Text>
        </Heading>
        <Flex>
          <Text color={"#7E7E83"} padding={`11px 0 0 0`} fontSize="14px">
          Protect your account from unauthorized access by creating a password as a first-time user
          </Text>
        </Flex>
      </View>
      );
    },
    // Footer() {
    //   return <Text>Footer Information</Text>;
    // },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter Email',
      labelHidden: true, // Remove label for username
    },
    password: {
      placeholder: 'Enter Password',
      labelHidden: true,// Remove label for password
    },
  },
  signUp: {
    // given_name : {
    //   placeholder: 'First name*',
    //   labelHidden: true, 
    //   order: 1
    // },
    // family_name : {
    //   placeholder: 'Last name*',
    //   labelHidden: true, // Remove label for username
    //   order: 2,
    
    // },
    // username: {
    //   placeholder: 'Enter Email',
    //   labelHidden: true, // Remove label for username
    //   order: 3,
    // },
    // password: {
    //   order: 4
    // },
    // confirm_password: {
    //   order: 5
    // },
    // phone_number: {
    //   dialCodeList: ['+1', '+123', '+227', '+229'],
    //   order: 6,
    // },
    username : {
      placeholder: 'Username*',
      labelHidden: true, 
      order: 1
    },
    family_name : {
      placeholder: 'Last name*',
      labelHidden: true, // Remove label for username
      order: 2,
    
    },
    email: {
      labelHidden: true,
      order:3
    },
    password: {
      labelHidden: true,
      order: 4
    },
    confirm_password: {
      labelHidden: true,
      order: 5
    },
    phone_number: {
      labelHidden: true,
        dialCodeList: ['+1', '+123', '+227', '+229'],
        order:6,
      },
  },

  confirmSignUp	: {
    confirmation_code: {
      placeholder: 'Enter Your OTP',
      labelHidden: true, // Remove label for username
    },
  },

  forgotPassword	: {
    username: {
      placeholder: 'Enter Username',
      labelHidden: true, // Remove label for username
    },
  },

  confirmResetPassword: {
    confirmation_code : {
      placeholder: 'Email OTP',
      labelHidden: true, // Remove label for username
    },
    password: {
      placeholder: 'Enter Password',
      labelHidden: true,// Remove label for password
    },
    confirm_password: {
      placeholder: 'Confirm Enter Password',
      labelHidden: true,// Remove label for password
    },
  },

  setupTotp: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Authenticator formFields={formFields} components={components}>
      <Home/>
      {/* {({ signOut }) => <button onClick={signOut}>Sign out</button>} */}
    </Authenticator>
    </ThemeProvider>

  );
}

export default App;
-----------------------------------------box old--------------------
<Box
          sx={{ 
            textAlign: "center",
            background: "#F2F4F7",
            width: "1142px",
            height: "164px",
            top: "24px",
            left: "21px",
            padding: "32px 26px",
            gap: "8px",
            borderRadius: "20px ",
            border: "1px solid transparent",
            
          }}
        >
 ---------------------------------------------dummy docs list ---------------------------
 DUMMY DOCUMENTS INTEGRATED
"use client"; 

import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Tab,
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";

const sampleDocuments = [
  { id: 1, title: "Document 1", description: "Description for document 1" },
  { id: 2, title: "Document 2", description: "Description for document 2" },
  { id: 3, title: "Document 3", description: "Description for document 3" },
];

export default function MyDocuments() {
  const [value, setValue] = React.useState("1");
  const [viewMode, setViewMode] = React.useState("list");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleViewModeChange = (mode: string) => {
    setViewMode(mode);
  };

  const renderDocuments = () => {
    if (viewMode === "list") {
      return (
        <Box>
          {sampleDocuments.map((doc) => (
            <Box key={doc.id} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: '4px' }}>
              <Typography variant="h6">{doc.title}</Typography>
              <Typography variant="body2">{doc.description}</Typography>
            </Box>
          ))}
        </Box>
      );
    } else if (viewMode === "grid") {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {sampleDocuments.map((doc) => (
            <Box key={doc.id} sx={{ width: '30%', p: 2, border: '1px solid #ddd', borderRadius: '4px' }}>
              <Typography variant="h6">{doc.title}</Typography>
              <Typography variant="body2">{doc.description}</Typography>
            </Box>
          ))}
        </Box>
      );
    }
  };

  return (
    <CommonLayout>
      <Box sx={{ width: "100%", typography: "body1", mt: 2, px: 2, ml: 0 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="my-documents/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            My Documents
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" component="h2">
          My Documents
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
              <TabList
                onChange={handleChange}
                aria-label="Document tabs"
                centered
                textColor="primary"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="VERIFIED" value="1" />
                <Tab label="UNVERIFIED" value="2" />
                <Tab label="IN PROGRESS" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {renderDocuments()}
            </TabPanel>
            <TabPanel value="2">
              {renderDocuments()}
            </TabPanel>
            <TabPanel value="3">
              {renderDocuments()}
            </TabPanel>
          </TabContext>
          <Box>
            <IconButton onClick={() => handleViewModeChange("list")} color={viewMode === "list" ? "primary" : "default"}>
              <MenuIcon />
            </IconButton>
            <IconButton onClick={() => handleViewModeChange("grid")} color={viewMode === "grid" ? "primary" : "default"}>
              <GridViewIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ mt: 20, textAlign: 'center' }}>
          <Typography variant="h6" component="h1" gutterBottom color=" #323B4A">
            There Are No Verified Documents
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Add />}
            sx={{
              textAlign: 'center'
            }}
          >
            ADD NEW
          </Button>
        </Box>
      </Box>
    </CommonLayout>
  );
}
  --------------------------------final home---------------------------  
  
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
              border: "2px dashed #397EF3", // Changed to dashed border
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
   ------------------------------------------
   
"use client"; 

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  ListItemIcon,
  Button,
  TextField,
} from "@mui/material";
import {
  SettingsOutlined,
  AccountCircleOutlined,
  Logout,
  ShieldOutlined,
} from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import { blue, deepOrange } from "@mui/material/colors";
const TopNav: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static"
     sx={{ backgroundColor: "#F2F4F7",
      boxShadow:"none",
      borderRadius: "0 0 0 20px",
      }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* Top Navigation */}
        </Typography>

        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <HelpOutlineIcon sx={{ color: "black", marginRight: 1 }} />
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ bgcolor: "#1469fb", width: 32, height: 32 }}>
                VA
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar sx={{ bgcolor: "#1469fb", width: 32, height: 32 }} />
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <AccountCircleOutlined />
            </ListItemIcon>
            Personal Information
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SettingsOutlined fontSize="small" />
            </ListItemIcon>
            Account Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ShieldOutlined fontSize="small" />
            </ListItemIcon>
            Login & Security
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon></ListItemIcon>
            <Button
              variant="outlined"
              color="error"
              // size="medium"
              sx={{
                width: "200px",
              }}
            >
              SIGN OUT
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;

---------------------------------button side nav---------------------------------------------------

"use client"; 

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  HomeOutlined,
  Description,
  DeleteOutlineOutlined,
  PlagiarismOutlined,
  Add,
} from "@mui/icons-material";

const drawerWidth = 240;

const SideNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // State for managing the menu open state
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", backgroundColor: "#F7F9FC" },
      }}
    >
      <Toolbar
        sx={{
          borderRadius: "0 20px 0 0",
          backgroundColor: "#F7F9FC",
        }}
      >
        <Typography variant="h5" noWrap color="#1469FB">
          LEGALEEY
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List>
          {/* <Paper> */}
          <ListItem sx={{mb:2}}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={handleClick}
              startIcon={<Add />}
              sx={{
                width: "auto", 
                height: "50px", 
                gap: "8px", 
                justifyContent: "center",
                marginLeft: "0px",
                backgroundColor: "#FFFFFF",
                color: "black",
                boxShadow: `
          0px 3px 1px -2px #00000033,
          0px 2px 2px 0px #00000024,
          0px 1px 5px 0px #0000001F
        `,
                "&:hover": {
                  backgroundColor: "#F0F0F0", // Slightly darker background on hover
                  boxShadow: `
            0px 4px 2px -2px #00000033,
            0px 3px 3px 0px #00000024,
            0px 2px 6px 0px #0000001F
          `,
                },
              }}
            >
              Add New
            </Button>
            <Menu
              id="menu-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right", // Align menu to the right of the button
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left", // Open from the right side towards left
              }}
            >
              <MenuItem onClick={handleClose}>Add New Documents</MenuItem>
              <MenuItem onClick={handleClose}>Create Folder</MenuItem>
            </Menu>
          </ListItem>
          {/* </Paper> */}
          <ListItem
            button
            onClick={() => handleNavigation("/home")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              backgroundColor: pathname === "/home" ? "#397EF3" : "transparent",
              borderRadius: "6px",
              marginBottom: "3px",
              width: "220px",
              height: "50px",
              justifyContent: "space-between",
              marginLeft:"10px",  
            }}
          >
            <ListItemIcon
              sx={{
                color: pathname === "/home" ? "white" : "inherit",
              }}
            >
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{
                color: pathname === "/home" ? "white" : "inherit",
              }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/my-documents")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
                },
              },
              backgroundColor:
                pathname === "/my-documents" ? "#397EF3" : "transparent",
                borderRadius: "6px",
                marginBottom: "3px",
                width: "220px",
                height: "50px",
                justifyContent: "space-between",
                marginLeft:"10px",  
            }}
          >
            <ListItemIcon>
              <Description
                sx={{
                  color: pathname === "/my-documents" ? "white" : "inherit",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="My Documents"
              sx={{
                color: pathname === "/my-documents" ? "white" : "inherit",
              }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/trash")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
                 
                },
              },
              backgroundColor:
                pathname === "/trash" ? "#397EF3" : "transparent",
                borderRadius: "6px",
                marginBottom: "3px",
                width: "220px",
                height: "50px",
                justifyContent: "space-between",
                marginLeft:"10px",  
            }}
          >
            <ListItemIcon>
              <DeleteOutlineOutlined
                sx={{
                  color: pathname === "/trash" ? "white" : "inherit",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Trash"
              sx={{
                color: pathname === "/trash" ? "white" : "inherit",
              }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/search-history")}
            sx={{
              "&:hover": {
                backgroundColor: "#397EF3",
                ".MuiListItemText-root, .MuiListItemIcon-root": {
                  color: "white",
            
                },
              },
              backgroundColor:
                pathname === "/search-history" ? "#397EF3" : "transparent",
              borderRadius: "6px",
              marginBottom: "3px",
              width: "220px",
              height: "50px",
              justifyContent: "space-between",
              marginLeft:"10px",  
            }}
          >
            <ListItemIcon>
              <PlagiarismOutlined
                sx={{
                  color: pathname === "/search-history" ? "white" : "inherit",
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Search History"
              sx={{
                color: pathname === "/search-history" ? "white" : "inherit",
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
export default SideNav;

----------------------------history img--------------------------------------------------------------


import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image"; // Import the Image component from Next.js

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

      <Box sx={{ mt: 20, textAlign: "center", position: "relative" }}>
        <Image
      
          src="/images/history.png" 
          alt="Search History"
          width={301.32}
          height={165.26}
          style={{
            position: "absolute",
            top: "360px",
            left: "441px"
          }}
        />
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
            textAlign: "left",
            position: "absolute",
            top: "540px", // Adjusted top position for the text
            left: "441px" // Adjusted left position for the text
          }}
        >
          There is no search History!
        </Typography>
      </Box>
    </CommonLayout>
  );
}
-------------------------------------------------------------------
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
--------------------------------------------final done---------------------------------------

import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image"; 
import '@fontsource/roboto/500.css';

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
            src="/images/history.png" 
            alt="Search History"
            layout="fill" 
            objectFit="contain" 
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
-------------------------------- my docs final--------------------------------------


"use client"
import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
	Box,
	Breadcrumbs,
	Button,
	Container,
	InputBase,
	Link,
	Tab,
	Typography,
	alpha,
	styled,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add } from "@mui/icons-material";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import '@fontsource/roboto/700.css';
// import styles from '../../styles/addNewPage.module.css';

export default function MyDocuments() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderEmptyState = (message : String) => (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src="./images/docs.png"
        alt="Documents img"
        sx={{
          width: "256.88px",
          height: "272.83px",
          mt: "110px",
         
          mx: "auto",

        }}
      />
      <Typography variant="h5" component="h1" gutterBottom color=" #323B4A"
        sx={{
          color: "#323B4A",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "22px",
          letterSpacing: "0.46px",
           mb: 2,
        }}
      >
        {message}
      </Typography>
      {/* <Button
        variant="contained"
        size="large"
        startIcon={<Add />}
        sx={{
          width: "141px",
          height: "42px",
          mt: "16px",
          mx: "auto",
          
          padding: "8px 22px",
          backgroundColor: "#397EF3",
        }}
        onClick={() => {
          document.getElementById("file_upload")?.click();
        }}
      >
        ADD NEW
      </Button> */}

      {/* S3 */}
      <Box sx={{ mt: 5, mb: 5 }}>
        <StorageManager
          acceptedFileTypes={["*"]}
          path={({ identityId }) => `protected/${identityId}/`}
          maxFileCount={5}
          isResumable
          components={{
            FilePicker({ onClick }) {
              return (
                <Button variant="contained" id="file_upload" onClick={onClick} sx={{boxShadow:"none"}}>
                  Upload Document
                </Button>
              );
            },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <CommonLayout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="my-documents/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit">
          My Documents
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" component="h2">
        My Documents
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <TabList
            onChange={handleChange}
            aria-label="Document tabs"
            centered
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="VERIFIED" value="1" />
            <Tab label="UNVERIFIED" value="2" />
            <Tab label="IN PROGRESS" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{renderEmptyState("There Are No Verified Documents")}</TabPanel>
        <TabPanel value="2">{renderEmptyState("There Are No Unverified Documents")}</TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </CommonLayout>
  );
}
-----------------------------trash final----------------------------------------------------------
import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image"; 
import '@fontsource/roboto/500.css';


export default function Trash() {
  return (
    <CommonLayout>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="my-documents/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            Trash
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" component="h2">
          Trash
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
          mb:10,
        }}
      >
        <Box sx={{ position: "relative",
         width: 188,
         height: 187, 
       
 }}>
          <Image
            src="/images/trash.png" 
            alt="trash img"
            layout="fill" 
            objectFit="contain" 
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
            lineHeight: "22px",
            letterSpacing: "0.46px",
            mt: 2,
            mb: 12,
            
          }}
        >
         Nothing In Trash
        </Typography>
      </Box>
        
    </CommonLayout>
  );
  }
  --------------------------------------- all final---------------------------------------------------
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
              border: "2px dashed #397EF3", // Changed to dashed border
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
--------------------------------------------------------------------------------------------------------------

docs



"use client"
import CommonLayout from "@/components/CommonLayout";
import * as React from "react";
import {
	Box,
	Breadcrumbs,
	Button,
	Container,
	InputBase,
	Link,
	Tab,
	Typography,
	alpha,
	styled,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import { Add } from "@mui/icons-material";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import '@fontsource/roboto/700.css';
// import styles from '../../styles/addNewPage.module.css';

export default function MyDocuments() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderEmptyState = (message : String) => (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src="./images/docs.png"
        alt="Documents img"
        sx={{
          width: "256.88px",
          height: "272.83px",
          mt: "110px",
         
          mx: "auto",

        }}
      />
      <Typography variant="h5" component="h1" gutterBottom color=" #323B4A"
        sx={{
          color: "#323B4A",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "22px",
          letterSpacing: "0.46px",
           mb: 2,
        }}
      >
        {message}
      </Typography>
      {/* <Button
        variant="contained"
        size="large"
        startIcon={<Add />}
        sx={{
          width: "141px",
          height: "42px",
          mt: "16px",
          mx: "auto",
          
          padding: "8px 22px",
          backgroundColor: "#397EF3",
        }}
        onClick={() => {
          document.getElementById("file_upload")?.click();
        }}
      >
        ADD NEW
      </Button> */}

      {/* S3 */}
      <Box sx={{ mt: 5, mb: 5 }}>
        <StorageManager
          acceptedFileTypes={["*"]}
          path={({ identityId }) => `protected/${identityId}/`}
          maxFileCount={5}
          isResumable
          components={{
            FilePicker({ onClick }) {
              return (
                <Button variant="contained" id="file_upload" onClick={onClick} sx={{boxShadow:"none"}}>
                  Upload Document
                </Button>
              );
            },
          }}
        />
      </Box>
    </Box>
  );

  return (
    <CommonLayout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="my-documents/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit">
          My Documents
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" component="h2">
        My Documents
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <TabList
            onChange={handleChange}
            aria-label="Document tabs"
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="VERIFIED" value="1" />
            <Tab label="UNVERIFIED" value="2" />
            <Tab label="IN PROGRESS" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{renderEmptyState("There Are No Verified Documents")}</TabPanel>
        <TabPanel value="2">{renderEmptyState("There Are No Unverified Documents")}</TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </CommonLayout>
  );
}


--------------------------------------------------------------------------------------------------------------

history  



import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image"; 
import '@fontsource/roboto/500.css';

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
          m:-8,
   
        
        }}
      >
        <Box sx={{ position: "relative", width: 301.32, height: 165.26 }}>
         <Image
          src="/images/history.png" 
          alt="Search History img"
           fill
           sizes="(max-width: 600px) 100vw, 50vw" 
           priority 
           style={{ objectFit: 'cover' }}
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
            lineHeight: "22px",
            letterSpacing: "0.46px",
            mt: 2,
          }}
        >
          There is No Search History!
        </Typography>
      </Box>
    </CommonLayout>
  );
}


--------------------------------------------------------------------------------------------------------------
trash


import CommonLayout from "@/components/CommonLayout";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image"; 
import '@fontsource/roboto/500.css';


export default function Trash() {
  return (
    <CommonLayout>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="my-documents/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
          >
            Trash
          </Link>
        </Breadcrumbs>
        <Typography variant="h4" component="h2">
          Trash
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
          m:-6,
          mr:8,
        }}
      >
        <Box sx={{ position: "relative",
         width: 188,
         height: 187, 
       
 }}>
        
      <Image
        src="/images/trash.png"
        fill
        sizes="(max-width: 600px) 100vw, 50vw" 
        priority 
         alt="trash img"
        style={{ objectFit: 'cover' }}
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
            lineHeight: "22px",
            letterSpacing: "0.46px",
            mt: 2,
            mb: 12,
            
          }}
        >
         Nothing In Trash
        </Typography>
      </Box>
        
    </CommonLayout>
  );
  }


--------------------------------------------------------------------------------------------------------------
final my docs in un verified page


"use client";
import React, { useState } from 'react';
import CommonLayout from "@/components/CommonLayout";
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Tab,
  Typography,
  Checkbox,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
  Tooltip,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HomeIcon from "@mui/icons-material/Home";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { DataGrid, GridRowSelectionModel } from '@mui/x-data-grid';
import CloseIcon from "@mui/icons-material/Close";
import '@fontsource/roboto/700.css';

interface Row {
  id: number;
  name: string;
  date: string;
  size: string;
  verified: boolean;
}

const initialRows: Row[] = [
  { id: 1, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 2, name: 'Tito222222222.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 3, name: 'Titokjwdiuowiduouw.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 4, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 5, name: 'Titowluouou.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 6, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 7, name: 'Tito.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
  { id: 8, name: 'Titoinouhoihnouho.pdf', date: 'Jan 24, 1999', size: '19.00 MB', verified: false },
];

export default function MyDocuments() {
  const [value, setValue] = useState<string>("2");
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>([]);
  const [openInfoDialog, setOpenInfoDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Row | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [verifiedFileName, setVerifiedFileName] = useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleVerifyFile = (id: number) => {
    const row = rows.find(row => row.id === id);
    if (row) {
      setRows(rows.map(row => row.id === id ? { ...row, verified: true } : row));
      setVerifiedFileName(row.name);
      setSnackbarOpen(true);
    }
  };

  const handleDeleteFile = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleVerifyAll = () => {
    setRows(rows.map(row => ({ ...row, verified: true })));
  };

  const handleDeleteAll = () => {
    setRows(rows.filter(row => !selectionModel.includes(row.id)));
  };

  const handleOpenInfoDialog = (row: Row) => {
    setSelectedRow(row);
    setOpenInfoDialog(true);
  };

  const handleOpenDeleteDialog = (row: Row) => {
    setSelectedRow(row);
    setOpenDeleteDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenInfoDialog(false);
    setOpenDeleteDialog(false);
  };

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      renderCell: (params: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {params.row.name}
          {!params.row.verified && (
            <ErrorOutlineIcon sx={{ color: '#DC362E', ml: 1 }} />
          )}
        </Box>
      ),
    },
    { field: 'date', headerName: 'Date Created', width: 200 },
    { field: 'size', headerName: 'File Size', width: 150 },
    {
      field: 'actions',
      headerName: '',
      width: 250,
      renderCell: (params: any) => (
        <Box>
          <Button onClick={() => handleVerifyFile(params.row.id)} variant="outlined">
            <DoneAllIcon />
            Verify File
          </Button>
          <Button onClick={() => handleOpenInfoDialog(params.row)} >
            <InfoOutlinedIcon sx={{ color: '#65656B' }} />
          </Button>
          <Tooltip title="Move to trash" placement="top" arrow enterDelay={500} leaveDelay={200}
            componentsProps={{
              tooltip: {
                sx: {
                  width: '100px',
                  height: 'autopx',
                  padding: '4px 8px',
                  gap: '0px',
                  borderRadius: 'var(--borderRadius)',
                  opacity: '1',
                  background: '#7E7E83',
                  fontSize: '12px',

                }
              }
            }}
          >
            <Button onClick={() => handleOpenDeleteDialog(params.row)} >
              <DeleteOutlineOutlinedIcon sx={{ color: '#65656B' }} />
            </Button>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <CommonLayout>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="my-documents/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit">
          My Documents
        </Link>
      </Breadcrumbs>
      <Typography variant="h4" component="h2">
        My Documents
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <TabList
            onChange={handleChange}
            aria-label="Document tabs"
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="VERIFIED" value="1" />
            <Tab label="UNVERIFIED" value="2" />
            <Tab label="IN PROGRESS" value="3" />
          </TabList>
        </Box>
        <Box
          sx={{
            width: '1140px',
            height: '30px',
            display: 'flex',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <Box>
            <Button onClick={handleVerifyAll} variant="outlined" startIcon={<DoneAllIcon />} sx={{ mr: 1 }}>
              VERIFY ALL
            </Button>
            <Button onClick={handleDeleteAll} variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />} color="error">
              DELETE ALL
            </Button>
          </Box>
        </Box>
        <TabPanel value="1">
          <DataGrid
            rows={rows.filter(row => row.verified)}
            columns={columns}
            checkboxSelection
            onRowSelectionModelChange={(newSelection) => setSelectionModel(newSelection)}
            rowSelectionModel={selectionModel}
          />
        </TabPanel>
        <TabPanel value="2">
          <DataGrid
            rows={rows.filter(row => !row.verified)}
            columns={columns}
            checkboxSelection
            onRowSelectionModelChange={(newSelection) => setSelectionModel(newSelection)}
            rowSelectionModel={selectionModel}
          />
        </TabPanel>
        <TabPanel value="3">
          <Typography>No documents in progress.</Typography>
        </TabPanel>
      </TabContext>

      <Dialog open={openInfoDialog} onClose={handleCloseDialog}>
        <DialogTitle>File cannot be verified</DialogTitle>
        <DialogContent>
          <DialogContentText>
            File type jpeg is not a supported file. File types supported are PDF, Microsoft Word only.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDeleteDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete forever?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            "{selectedRow?.name}" will be deleted forever. Want to delete it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (selectedRow?.id !== undefined) {
                handleDeleteFile(selectedRow.id);
              }
              handleCloseDialog();
            }}
            style={{ background: '#DC362E', color: 'white' }}
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          action={<></>}
          iconMapping={{}}
          severity="success"
          sx={{
            width: '370px',
            height: 'auto',
            background: '#0A9060',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ flex: 1 }}>
            {verifiedFileName} is successfully verified
          </Typography>
          <Button size="small" sx={{ color: 'white' }}>
            View File
          </Button>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar>
    </CommonLayout>
  );
}
-----------------------------------old docs------------------------------


// // "use client"
// // import CommonLayout from "@/components/CommonLayout";
// // import * as React from "react";
// // import {
// // 	Box,
// // 	Breadcrumbs,
// // 	Button,
// // 	Container,
// // 	InputBase,
// // 	Link,
// // 	Tab,
// // 	Typography,
// // 	alpha,
// // 	styled,
// // } from "@mui/material";
// // import { TabContext, TabList, TabPanel } from "@mui/lab";
// // import HomeIcon from "@mui/icons-material/Home";
// // import { Add } from "@mui/icons-material";
// // import { StorageManager } from "@aws-amplify/ui-react-storage";
// // import "@aws-amplify/ui-react/styles.css";
// // import '@fontsource/roboto/700.css';
// // // import styles from '../../styles/addNewPage.module.css';

// // export default function MyDocuments() {
// //   const [value, setValue] = React.useState("1");

// //   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
// //     setValue(newValue);
// //   };

// //   const renderEmptyState = (message : String) => (
// //     <Box sx={{ textAlign: "center" }}>
// //       <Box
// //         component="img"
// //         src="./images/docs.png"
// //         alt="Documents img"
// //         sx={{
// //           width: "256.88px",
// //           height: "272.83px",
// //           mt: "110px",
         
// //           mx: "auto",

// //         }}
// //       />
// //       <Typography variant="h5" component="h1" gutterBottom color=" #323B4A"
// //         sx={{
// //           color: "#323B4A",
// //           fontFamily: "Roboto",
// //           fontSize: "16px",
// //           fontWeight: "600",
// //           lineHeight: "22px",
// //           letterSpacing: "0.46px",
// //            mb: 2,
// //         }}
// //       >
// //         {message}
// //       </Typography>
// //       {/* <Button
// //         variant="contained"
// //         size="large"
// //         startIcon={<Add />}
// //         sx={{
// //           width: "141px",
// //           height: "42px",
// //           mt: "16px",
// //           mx: "auto",
          
// //           padding: "8px 22px",
// //           backgroundColor: "#397EF3",
// //         }}
// //         onClick={() => {
// //           document.getElementById("file_upload")?.click();
// //         }}
// //       >
// //         ADD NEW
// //       </Button> */}

// //       {/* S3 */}
// //       <Box sx={{ mt: 5, mb: 5 }}>
// //         <StorageManager
// //           acceptedFileTypes={["*"]}
// //           path={({ identityId }) => `protected/${identityId}/`}
// //           maxFileCount={5}
// //           isResumable
// //           components={{
// //             FilePicker({ onClick }) {
// //               return (
// //                 <Button variant="contained" id="file_upload" onClick={onClick} sx={{boxShadow:"none"}}>
// //                   Upload Document
// //                 </Button>
// //               );
// //             },
// //           }}
// //         />
// //       </Box>
// //     </Box>
// //   );

// //   return (
// //     <CommonLayout>
// //       <Breadcrumbs aria-label="breadcrumb">
// //         <Link
// //           underline="hover"
// //           sx={{ display: "flex", alignItems: "center" }}
// //           color="inherit"
// //           href="my-documents/"
// //         >
// //           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
// //         </Link>
// //         <Link underline="hover" sx={{ display: "flex", alignItems: "center" }} color="inherit">
// //           My Documents
// //         </Link>
// //       </Breadcrumbs>
// //       <Typography variant="h4" component="h2">
// //         My Documents
// //       </Typography>
// //       <TabContext value={value}>
// //         <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
// //           <TabList
// //             onChange={handleChange}
// //             aria-label="Document tabs"
// //             textColor="primary"
// //             indicatorColor="primary"
// //             variant="scrollable"
// //             scrollButtons="auto"
// //           >
// //             <Tab label="VERIFIED" value="1" />
// //             <Tab label="UNVERIFIED" value="2" />
// //             <Tab label="IN PROGRESS" value="3" />
// //           </TabList>
// //         </Box>
// //         <TabPanel value="1">{renderEmptyState("There Are No Verified Documents")}</TabPanel>
// //         <TabPanel value="2">{renderEmptyState("There Are No Unverified Documents")}</TabPanel>
// //         <TabPanel value="3"></TabPanel>
// //       </TabContext>
// //     </CommonLayout>
// //   );
// // }
------------------------------------green snackbar--------------------------------------------------------

  {/*  <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          action={<></>}
          iconMapping={{}}
          severity="success"
          sx={{
            width: '370px',
            // changes
            height: 'auto',   
            borderRadius: '4px',
            background: '#0A9060',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ flex: 1 }}>
            {verifiedFileName} is successfully verified
          </Typography>
          <Button size="small" sx={{ color: 'white' }}>
            View File
          </Button>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar> */}

{/* parellel to L&R */}
 {/* <Snackbar
  open={snackbarOpen}
  autoHideDuration={6000}
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Alert
    action={<></>}
    iconMapping={{}}
    severity="success"
    sx={{
      width: '400px',
      height: 'auto',
      borderRadius: '4px',
      background: '#0A9060',
      color: '#FFFFFF',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
  
    }}
  >
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
      <Typography variant="body2" sx={{mr:2}}>
        {verifiedFileName} is successfully verified
      </Typography>
      
      <Button size="small" sx={{ color: 'white', width:'68',height:'24', padding:'1px- 2px'}}>
        View File
      </Button>
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
      <CloseIcon fontSize="small" />
    </IconButton>
    </Box>
  </Alert>
</Snackbar>  */}
----------------------------

<Snackbar
  open={snackbarOpen}
  autoHideDuration={6000}
  onClose={handleCloseSnackbar}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Alert
   icon={false}
    action={<></>}
    iconMapping={{}}
    severity="success"
    sx={{
      width: '400px',
      height: 'auto',
      borderRadius: '4px',
      background: '#0A9060',
      color: '#FFFFFF',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      
    }}
  >
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', mr: 2 }}>
        {verifiedFileName} is successfully verified
      </Typography>
      <Button size="small" sx={{ color: 'white', width: '68px', height: '24px', padding: '1px 2px' }}>
        View File
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  </Alert>
</Snackbar>

--------------------------font weight----------------------------------------------------------------------
{
      field: 'date',
      headerName: 'Date Created',
      width: 250,
      headerClassName: 'header-spacing',
      cellClassName: 'cell-spacing',
      renderCell: (params: any) => (
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '19px',
             textAlign: 'left'
          }}
        >
          {params.row.date}
        </Typography>
      ),
    },