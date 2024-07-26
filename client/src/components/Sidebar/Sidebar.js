import React, { useState } from 'react';
import { Box, Text, VStack, Button, Icon, Collapse } from '@chakra-ui/react';
import { FaUser, FaCog, FaQuestionCircle, FaLeaf, FaHome, FaClipboardList, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({ competitors, onSelect }) => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(true);
    const [isCompetitorsOpen, setIsCompetitorsOpen] = useState(true);
    const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(true);

    const bg = '#121212';
    const color = "#999999";

    const toggleNavigation = () => setIsNavigationOpen(!isNavigationOpen);
    const toggleCompetitors = () => setIsCompetitorsOpen(!isCompetitorsOpen);
    const toggleUtilities = () => setIsUtilitiesOpen(!isUtilitiesOpen);

    return (
        <Box
            bg={bg}
            color={color}
            borderRadius="md"
            boxShadow="md"
            w="20%"
            position="fixed"
            top="0"
            left="0"
            height="100vh"
            zIndex="1"
            pt={6}
            pb={6}
            px={6}
        >
            <VStack spacing={4} align="start" h="full" w="full">
                {/* User Profile Card */}
                <Box
                    bg="#1a1a1a"
                    borderRadius="md"
                    p={4}
                    width="100%"
                    display="flex"
                    alignItems="center"
                    boxShadow="md"
                >
                    <Icon as={FaUser} boxSize={10} color="#999999" mr={4} />
                    <VStack align="start" spacing={1}>
                        <Text fontSize="lg" fontWeight="bold" color="#999999">Abdul Wahab</Text>
                        <Text fontSize="sm" color="#999999">User Profile</Text>
                    </VStack>
                </Box>

                {/* Navigation Section */}
                <VStack spacing={0} align="start" width="100%">
                    <Button
                        onClick={toggleNavigation}
                        w="100%"
                        justifyContent="start"
                        textColor="#999999"
                        variant="ghost"
                        leftIcon={isNavigationOpen ? <Icon as={FaChevronUp} color="#999999" /> : <Icon as={FaChevronDown} color="#999999" />}
                        fontWeight="bold"
                        _hover={{ bg: '#333333' }}
                    >
                        Navigation
                    </Button>
                    <Collapse in={isNavigationOpen} style={{ width: '100%' }}>
                        <VStack spacing={0} align="start" width="100%" pl={4}>
                            <Link to="/home" style={{ width: '100%' }}>
                                <Button
                                    w="100%"
                                    justifyContent="start"
                                    textColor="#999999"
                                    variant="ghost"
                                    leftIcon={<Icon as={FaHome} color="#999999" />}
                                    _hover={{ bg: '#333333' }}
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link to="/dashboard" style={{ width: '100%' }}>
                                <Button
                                    w="100%"
                                    justifyContent="start"
                                    textColor="#999999"
                                    variant="ghost"
                                    leftIcon={<Icon as={FaClipboardList} color="#999999" />}
                                    _hover={{ bg: '#333333' }}
                                >
                                    Dashboard
                                </Button>
                            </Link>
                        </VStack>
                    </Collapse>
                </VStack>

                {/* Competitors Section */}
                <VStack spacing={0} align="start" width="100%">
                    <Button
                        onClick={toggleCompetitors}
                        w="100%"
                        justifyContent="start"
                        textColor="#999999"
                        variant="ghost"
                        leftIcon={isCompetitorsOpen ? <Icon as={FaChevronUp} color="#999999" /> : <Icon as={FaChevronDown} color="#999999" />}
                        fontWeight="bold"
                        _hover={{ bg: '#333333' }}
                    >
                        Competitors
                    </Button>
                    <Collapse in={isCompetitorsOpen} style={{ width: '100%' }}>
                        <VStack spacing={0} align="start" width="100%" pl={4}>
                            {competitors.map((competitor) => (
                                <Button
                                    key={competitor}
                                    onClick={() => onSelect(competitor)}
                                    w="100%"
                                    justifyContent="start"
                                    textColor="#999999"
                                    variant="ghost"
                                    leftIcon={<Icon as={FaLeaf} color="#999999" />}
                                    _hover={{ bg: '#333333' }}
                                >
                                    {competitor}
                                </Button>
                            ))}
                        </VStack>
                    </Collapse>
                </VStack>

                {/* Settings and Help Fields */}
                <VStack spacing={0} align="start" width="100%">
                    <Button
                        onClick={toggleUtilities}
                        w="100%"
                        justifyContent="start"
                        textColor="#999999"
                        variant="ghost"
                        leftIcon={isUtilitiesOpen ? <Icon as={FaChevronUp} color="#999999" /> : <Icon as={FaChevronDown} color="#999999" />}
                        fontWeight="bold"
                        _hover={{ bg: '#333333' }}
                    >
                        Utilities
                    </Button>
                    <Collapse in={isUtilitiesOpen} style={{ width: '100%' }}>
                        <VStack spacing={0} align="start" width="100%" pl={4}>
                            <Button
                                w="100%"
                                justifyContent="start"
                                textColor="#999999"
                                variant="ghost"
                                leftIcon={<Icon as={FaCog} color="#999999" />}
                                _hover={{ bg: '#333333' }}
                            >
                                Settings
                            </Button>
                            <Button
                                w="100%"
                                justifyContent="start"
                                textColor="#999999"
                                variant="ghost"
                                leftIcon={<Icon as={FaQuestionCircle} color="#999999" />}
                                _hover={{ bg: '#333333' }}
                            >
                                Help
                            </Button>
                        </VStack>
                    </Collapse>
                </VStack>
            </VStack>
        </Box>
    );
};

export default Sidebar;
