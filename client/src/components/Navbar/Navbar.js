import React from 'react';
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const today = new Date().toLocaleDateString('en-GB'); // Format date as DD/MM/YYYY

  return (
    <>
      <Box position="fixed" top="0" width="100%" bg="#121212" px={6} py={6} color="#999999" zIndex="999">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center" flex="1">
            <Flex direction="column" align="start" flex="1">
              <Heading size="md" color="#999999">
                Hello, Abdul Wahab
              </Heading>
              <Text color="#999999">{today}</Text>
            </Flex>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              flex="1"
              justify="end"
            >
            </HStack>
            <Button
              colorScheme="whiteAlpha"
              color="white"
              border="1px"
              borderColor="gray.300"
              variant="outline"
            >
              Logout
            </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Link px={2} py={1} rounded="md" _hover={{ bg: 'gray.600' }} href="#">
                Products
              </Link>
              <Link px={2} py={1} rounded="md" _hover={{ bg: 'gray.600' }} href="#">
                Search
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
