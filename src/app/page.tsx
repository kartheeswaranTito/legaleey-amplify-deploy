"use client"
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './../aws-exports';
import Home from './home/page';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          {/* <h1>H</h1> */}
          <Home/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}