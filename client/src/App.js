import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home'; // Adjust the path according to your file structure
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<Home />} /> Default route
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
