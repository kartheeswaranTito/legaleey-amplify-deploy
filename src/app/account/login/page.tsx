"use client"

// // App.js

// import React from 'react';
// import { Amplify } from 'aws-amplify'
// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css'
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// export default function App() {
//   return (
//     <Authenticator>
//       {({ signOut, user }) => (
//         <main>
//           <h1>Welcome, {user.username}!</h1>
//           <button onClick={signOut}>Sign out</button>
//         </main>
//       )}
//     </Authenticator>
  
//   );
// }

// import React from 'react';
// import { Amplify } from 'aws-amplify';
// import '@aws-amplify/ui-react/styles.css';
// import { withAuthenticator} from '@aws-amplify/ui-react';
// import awsconfig from './../../../aws-exports';
// import Home from '@/app/home/page';

// Amplify.configure(awsconfig);

// function Login({ signOut }) {
//   return (
//     <div>
//         <Home/>
//       <button onClick={signOut}>Sign out</button>
//     </div>
//   );
// }

// export default withAuthenticator(Login);

import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './../../../aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}