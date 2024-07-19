import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiCompass, FiSettings, FiMenu } from 'react-icons/fi';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Information', icon: FiCompass },
  { name: 'Settings', icon: FiSettings },
];

const SimpleSidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg="gray.900" color="white" overflow="hidden">
      <SidebarContent onClose={() => onClose()} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" bg="gray.900">
        {children}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg="gray.900"
      color="white"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="full"
        flexDirection="column"
        justifyContent="center"
        mx="8"
        alignItems="center"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="white">
          Navigation
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        {LinkItems.map((link, index) => (
          <NavItem key={index} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
          color="white"
        />
      )}
      <Text color="white">{children}</Text>
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg="gray.900"
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu color="white" />}
      />
      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold" color="white">
        Dashboard
      </Text>
    </Flex>
  );
};

export default SimpleSidebar;
