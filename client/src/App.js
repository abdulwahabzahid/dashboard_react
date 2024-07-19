import React from 'react';
import Dashboard from './pages/Dashboard/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Dashboard />
        </ChakraProvider>
    );
}

export default App;
