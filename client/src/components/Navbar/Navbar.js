import React from 'react';
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack, Heading } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="fixed" top="0" width="100%" bg="gray.900" px={6} color="white" zIndex="999">
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Heading size="md">Shopify-GTD Products Scraper</Heading>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Link px={2} py={1} rounded="md" _hover={{ bg: 'gray.700' }} href="#">
                Products
              </Link>
              <Link px={2} py={1} rounded="md" _hover={{ bg: 'gray.700' }} href="#">
                Search
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Link px={2} py={1} rounded="md" _hover={{ bg: 'gray.700' }} href="#">
                Products
              </Link>
              <Link px={2} py={1} rounded="md" _hover={{ bg: 'gray.700' }} href="#">
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
