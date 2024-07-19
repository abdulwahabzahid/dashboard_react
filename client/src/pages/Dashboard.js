import React, { useState } from 'react';
import { Flex, VStack, Heading, Box, Text, Divider, Button } from '@chakra-ui/react';
import BrandSelector from '../components/BrandSelector/BrandSelector';
import ProductCard from '../components/ProductCard/ProductCard';
import initialProducts from '../data/ProductsData';
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
  const initialBrands = ['Quest', 'CenturionPro', "Grower's Choice"];
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandSelect = (selectedBrand) => {
    setSelectedBrand(selectedBrand);
  };

  const filteredProducts = selectedBrand
    ? initialProducts.filter((product) => product.brand === selectedBrand)
    : initialProducts;

  return (
    <>
      <Navbar />
      <Flex minHeight="100vh" flexDirection="column" alignItems="center" bg="gray.100" p={4} pt={20}>
        <Flex flexDirection="column" p={4} borderRadius="lg" boxShadow="lg" bg="white" width="70%" maxWidth="1200px">
          <Box bg="gray.900" color="white" p={6} mb={4} borderRadius="md" boxShadow="md">
            <Heading size="lg">Products Dashboard</Heading>
          </Box>
          <BrandSelector brands={initialBrands} onSelect={handleBrandSelect} />

          <VStack spacing={4} mt={4} width="100%" alignItems="stretch">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </VStack>

          {filteredProducts.length === 0 && (
            <Box p={4} textAlign="center">
              <Text fontSize="lg" color="gray.600">No products found for the selected brand.</Text>
              <Button colorScheme="teal" mt={4} onClick={() => setSelectedBrand(null)}>Clear Filter</Button>
            </Box>
          )}

          <Divider my={6} />

          <Box textAlign="center">
            <Text fontSize="md" color="gray.600">&copy; {new Date().getFullYear()} Shopify-GTD Products Scraper App. All rights reserved.</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Dashboard;
