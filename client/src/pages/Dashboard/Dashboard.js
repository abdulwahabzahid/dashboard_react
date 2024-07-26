import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text,
  Divider,
  Button,
  Spinner,
  SimpleGrid,
  Heading,
  Icon,
  Link
} from '@chakra-ui/react';
import { FaUsers, FaBox, FaExternalLinkAlt } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { fetchProducts } from '../../data/ProductsData';
import Navbar from '../../components/Navbar/Navbar';

const Dashboard = () => {
  const initialCompetitors = [
    "Greenhouse",
    "Sylvane",
    "Trimleaf",
    "Hydrobuilder",
    "MightyBox",
    "Growgen",
    "Growace",
  ];
  const [selectedCompetitor, setSelectedCompetitor] = useState('');
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      console.log(data)
      filterProducts(data, selectedCompetitor, searchQuery);
      setLoading(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts(products, selectedCompetitor, searchQuery);
  }, [selectedCompetitor, searchQuery, products]);

  const handleCompetitorSelect = async (selectedCompetitor) => {
    setSelectedCompetitor(selectedCompetitor);
  };

  const getCompetitorUrl = (competitor) => {
    switch (competitor) {
      case 'Greenhouse':
        return 'https://greenhousemegastore.com';
      case 'Sylvane':
        return 'https://sylvane.com';
      case 'Hydrobuilder':
        return 'https://hydrobuilder.com';
      case 'Trimleaf':
        return 'https://trimleaf.com';
      case 'Growace':
        return 'https://growace.com';
      case 'Growgen':
        return 'https://growgeneration.com';
      case 'MightyBox':
        return 'https://mightyboxsupply.com';
      default:
        return '#';
    }
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const filterProducts = (productsList, competitor, query) => {
    const updatedFilteredProducts = productsList.filter(
      (product) =>
        (competitor === '' ||
          product.brand.toLowerCase().includes(competitor.toLowerCase())) &&
        (query === '' ||
          product.name.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(updatedFilteredProducts);
  };

  return (
    <Flex minHeight="100vh" bg="#121212" color="#999999">
      <Sidebar competitors={initialCompetitors} onSelect={handleCompetitorSelect} />
      <Flex direction="column" flex="1" ml="20%" p={4} pt={20}>
        <Flex direction="column" mb={4}>
          {/* Header Section */}

          {/* Products Section */}
          <Box
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))"
            width="95%"
          >
            <Box
              mt={4}
              width="95%"
              mb={8}
            >
              <Flex direction="row" align="center" justify="space-between" mb={4} width="100%">
                <Flex align="center">
                  <Heading as="h1" size="lg" color="#999999" mr={1}>
                    {selectedCompetitor ? `${selectedCompetitor} Products List` : 'Aggregate Products List'}
                  </Heading>
                  {selectedCompetitor && (
                    <span
                      onClick={() => {
                        window.open(getCompetitorUrl(selectedCompetitor), '_blank');
                      }}
                      style={{ cursor: 'pointer', marginTop: "2%" }}

                    >
                      <Icon as={FaExternalLinkAlt} boxSize={4} color="#999999" />
                    </span>
                  )}
                </Flex>
                <SearchBar query={searchQuery} onQueryChange={handleSearchQueryChange} />
              </Flex>
            </Box>
            {loading ? (
              <Box textAlign="center" p={4}>
                <Spinner size="lg" color="teal.500" />
              </Box>
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={4} width="100%">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <ProductCard key={`${product.id}-${index}`} product={product} />
                  ))
                ) : (
                  <Box p={4} textAlign="center">
                    <Text fontSize="lg" color="#999999">
                      No products match your search criteria.
                    </Text>
                    <Button colorScheme="teal" mt={4} onClick={() => setSearchQuery('')}>
                      Clear Search
                    </Button>
                  </Box>
                )}
              </SimpleGrid>
            )}
          </Box>
        </Flex>

        {/* Footer Section */}
        <Box
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))" // More subtle vertical gradient background
          width="95%"
        >
          <Divider my={6} borderColor="#999999" borderRadius="md" />
          <Box textAlign="center">
            <Text fontSize="md" color="#999999">
              &copy; {new Date().getFullYear()} Shopify-GTD Products Scraper App. All rights
              reserved.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
