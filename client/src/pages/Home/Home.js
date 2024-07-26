import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text,
  Divider,
  Spinner,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { FaUsers, FaBox } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { fetchProducts } from '../../data/ProductsData';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Home = () => {
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
      filterProducts(data, selectedCompetitor, searchQuery);
      setLoading(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts(products, selectedCompetitor, searchQuery);
  }, [selectedCompetitor, searchQuery, products]);

  const handleCompetitorSelect = (selectedCompetitor) => {
    setSelectedCompetitor(selectedCompetitor);
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

  const competitorProductCounts = initialCompetitors.map((competitor) => {
    return {
      competitor,
      count: products.filter((product) =>
        product.brand.toLowerCase().includes(competitor.toLowerCase())
      ).length,
    };
  });

  const averagePrices = initialCompetitors.map((competitor) => {
    const filtered = products.filter((product) =>
      product.brand.toLowerCase().includes(competitor.toLowerCase())
    );
    if (filtered.length === 0) return { competitor, average: 0 };

    const total = filtered.reduce((sum, product) => sum + product.price, 0);
    const average = total / filtered.length;

    return {
      competitor,
      average,
    };
  });

  const getBackgroundColor = (labels) => {
    return labels.map((label) =>
      label === selectedCompetitor ? 'rgba(255, 205, 86, 0.6)' : 'rgba(50, 50, 50, 0.6)'
    );
  };

  const getBorderColor = (labels) => {
    return labels.map((label) =>
      label === selectedCompetitor ? 'rgba(255, 205, 86, 1)' : 'rgba(50, 50, 50, 1)'
    );
  };

  const numberOfProductsData = {
    labels: initialCompetitors,
    datasets: [
      {
        label: 'Number of Products',
        data: competitorProductCounts.map((item) => item.count),
        backgroundColor: "#121212",
        borderColor: getBorderColor(initialCompetitors),
        borderWidth: 1,
        fill: true,
        tension: 0.1,
        pointRadius: 5,
      },
    ],
  };

  const numberOfProductsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const marketShareData = {
    labels: initialCompetitors,
    datasets: [
      {
        data: competitorProductCounts.map((item) => item.count),
        backgroundColor: getBackgroundColor(initialCompetitors),
        borderColor: getBorderColor(initialCompetitors),
        borderWidth: 1,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  const averagePriceData = {
    labels: averagePrices.map((item) => item.competitor),
    datasets: [
      {
        label: 'Average Price',
        data: averagePrices.map((item) => item.average),
        backgroundColor: getBackgroundColor(averagePrices.map((item) => item.competitor)),
        borderColor: getBorderColor(averagePrices.map((item) => item.competitor)),
        borderWidth: 1,
      },
    ],
  };

  const averagePriceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Flex minHeight="100vh" bg="#121212" color="#999999" flexDirection="column">
      <Sidebar competitors={initialCompetitors} onSelect={handleCompetitorSelect} />
      <Flex
        direction="column"
        flex="1"
        ml="20%"
        p={4}
        pt={20}
        overflowY="auto"
        maxHeight="calc(100vh - 80px)"
      >
        <Flex direction="row" justify="space-between" mb={4} mt={12} width="95%">
          <Box
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))"
            display="flex"
            alignItems="center"
            flex="1"
            mr={2}
            justifyContent="center"
          >
            <Flex direction="column" align="center">
              <Icon as={FaUsers} boxSize={8} color="#999999" mb={2} />
              <Text fontSize="lg" color="#999999">
                Total Competitors
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#999999">
                {initialCompetitors.length}
              </Text>
            </Flex>
          </Box>

          <Box
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))"
            display="flex"
            alignItems="center"
            flex="1"
            ml={2}
            justifyContent="center"
          >
            <Flex direction="column" align="center">
              <Icon as={FaBox} boxSize={8} color="#999999" mb={2} />
              <Text fontSize="lg" color="#999999">
                Total Products
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#999999">
                {products.length}
              </Text>
            </Flex>
          </Box>
        </Flex>

        <Flex direction="row" justify="space-between" mb={8} width="95%">
          <Box
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))"
            flex="1"
            mr={2}
            height="350px"
          >
            <Heading as="h2" size="md" color="#999999" mb={4}>
              Average Price per Competitor
            </Heading>
            {loading ? (
              <Spinner size="xl" color="#999999" />
            ) : (
              <Bar data={averagePriceData} options={averagePriceOptions} />
            )}
          </Box>

          <Box
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))"
            flex="1"
            ml={2}
            height="350px"
          >
            <Heading as="h2" size="md" color="#999999" mb={4}>
              Market Share
            </Heading>
            {loading ? (
              <Spinner size="xl" color="#999999" />
            ) : (
              <Doughnut data={marketShareData} options={donutOptions} />
            )}
          </Box>
        </Flex>

        <Box
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          bgGradient="linear(to-b, rgba(32, 32, 32, 0.9), rgba(18, 18, 18, 0.9))"
          mb={8}
          width="95%"
          height="350px"
        >
          <Heading as="h2" size="md" color="#999999" mb={4}>
            Number of Products per Competitor
          </Heading>
          {loading ? (
            <Spinner size="xl" color="#999999" />
          ) : (
            <Line data={numberOfProductsData} options={numberOfProductsOptions} />
          )}
        </Box>

        <Divider my={8} borderColor="gray.600" width="95%" />
      </Flex>
    </Flex>
  );
};

export default Home;
