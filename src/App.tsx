import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/Signin';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
