import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import  Navbar  from './components/Navbar';
import  Crypto  from './pages/Crypto';

function App() {
  return (
    <ChakraProvider >     
        <Navbar />
        <Crypto />
    </ChakraProvider>
  );
}

export default App;
