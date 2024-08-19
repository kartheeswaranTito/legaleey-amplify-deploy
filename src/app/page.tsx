"use client"
import React from 'react';

import { Authenticator, Heading, View, Image, Button, useAuthenticator, useTheme, Theme, ThemeProvider, Text, Flex, Link, CheckboxField } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import awsExports from './../aws-exports';
import { Amplify } from 'aws-amplify';
import { Box, TextField } from '@mui/material';
import Home from '@/app/home/page';
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";


import { I18n } from 'aws-amplify/utils';

Amplify.configure(awsExports);



I18n.putVocabularies({
  en: {
    'Sign In': 'LOGIN',
    'Sign in': 'LOGIN',
    'Create Account': 'CREATE ACCOUNT'
  },
});

const theme: Theme = {
  name: 'Auth Example Theme',
 
  tokens: {
    components: {
      authenticator: {
         router: {
          // boxShadow: `0 0 16px ${tokens.colors.overlay['10']}`,
          // borderWidth: '0',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow here
          borderWidth: '0', // Optional: Add border radius for rounded corners
        
        },
        form: {
          padding: `16px 32px 16px`,
        },
      },
      button: {
        primary: {
          backgroundColor: '#1469FB',
          color: '#ffffff',
        },
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
      <>
      <head>
				   <link rel="icon" href="/favicon.ico" />
			    </head>
          <View textAlign="center" padding={tokens.space.large}></View>
      </>
     
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
            <Text color={"#393940"} marginTop="5px">Sign in</Text>
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
      const { toForgotPassword } = useAuthenticator();
      return (
        <View textAlign="center">
          <Link onClick={toForgotPassword} color="#1469FB">Forgot Password</Link>
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
            <Text color={"#393940"}marginTop="5px">Create an Account</Text>
          </Heading>
          <Flex>
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
      );
    },
    FormFields() {
      const { validationErrors } = useAuthenticator();
      return (
        <>
          <Authenticator.SignUp.FormFields />
          <Flex direction="row" alignItems="center">
            <CheckboxField
              errorMessage={validationErrors.acknowledgement as string}
              hasError={!!validationErrors.acknowledgement}
              name="acknowledgement"
              value="yes"
              label=""
            />
            <Text color={"#7E7E83"} fontSize="12px">I have read and agree to the <Link color="#1469FB">Terms & Conditions </Link> and <Link color="#1469FB">Privacy Policy.</Link></Text>
          </Flex>
        </>
      );
    }
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
         <View>
          <Heading padding={`${tokens.space.xl} 0 0 0`} level={4}>
            <Text color={"#1469FB"}>LEGALEEY</Text>
            <Text color={"#393940"} marginTop="5px">Code Verification</Text>
          </Heading>
        </View>
      );
    },
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
        <View>
          <Heading padding={`${tokens.space.xl} 0 0 0`} level={4}>
            <Text color={"#1469FB"}>LEGALEEY</Text>
            <Text color={"#393940"} marginTop="5px">Enter Username</Text>
          </Heading>
          <Flex>
            <Text color={"#7E7E83"} padding={`11px 0 0 0`} fontSize="14px">
              Enter your Username to send code on your registered Email to complete the verification process.
            </Text>
          </Flex>
        </View>
      );
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <View>
          <Heading padding={`${tokens.space.xl} 0 0 0`} level={4}>
            <Text color={"#1469FB"}>LEGALEEY</Text>
            <Text color={"#393940"} marginTop="5px">To Stay Protected: Create a password</Text>
          </Heading>
          <Flex>
            <Text color={"#7E7E83"} padding={`11px 0 0 0`} fontSize="14px">
              Protect your account from unauthorized access by creating a password as a first-time user
            </Text>
          </Flex>
        </View>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter Username',
      labelHidden: true,
    },
    password: {
      placeholder: 'Enter Password',
      labelHidden: true,
    },
  },
  signUp: {
    username: {
      placeholder: 'Username*',
      labelHidden: true, 
      order: 1
    },
    family_name: {
      placeholder: 'Last name*',
      labelHidden: true,
      order: 2,
    },
    email: {
      labelHidden: true,
      order: 3,
    },
    password: {
      labelHidden: true,
      order: 4,
    },
    confirm_password: {
      labelHidden: true,
      order: 5,
    },
    phone_number: {
      labelHidden: true,
      order: 6,
    },
  },
  confirmSignUp: {
    confirmation_code: {
      placeholder: 'Enter Your Code',
      labelHidden: true,
    },
  },
  forgotPassword: {
    username: {
      placeholder: 'Enter Username',
      labelHidden: true,
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Email OTP',
      labelHidden: true,
    },
    password: {
      placeholder: 'Enter Password',
      labelHidden: true,
    },
    confirm_password: {
      placeholder: 'Confirm Enter Password',
      labelHidden: true,
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
       <Box className="centered-box">
        <Authenticator formFields={formFields} components={components}>
          <Home />
        </Authenticator>
      </Box>
    </ThemeProvider>
  );
}

// export default App;

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
