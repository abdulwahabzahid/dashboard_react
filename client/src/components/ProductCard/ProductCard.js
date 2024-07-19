import React, { useState } from 'react';
import { Flex, VStack, Text, IconButton, Box, Image, Button, Link } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const getRandomImage = () => {
    const images = [
        "https://www.greenhousemegastore.com/cdn/shop/files/QUE4041870.jpg?v=1711477538&width=1080",
        "https://www.greenhousemegastore.com/cdn/shop/files/QUE4031490.jpg?v=1711484979&width=1080",
        "https://www.greenhousemegastore.com/cdn/shop/files/QUE4037410.jpg?v=1711733402&width=1080"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

const ProductCard = ({ product }) => {
    const [showContent, setShowContent] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(null);

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const handleVariantClick = (variant) => {
        setSelectedVariant(variant);
    };

    const competitorUrls = {
        Hydrobuilder: 'https://hydrobuilder.com/brands/growers-choice/growers-choice-led-grow-lights/growers-choice-roi-e720-full-spectrum-led-grow-light.html',
        Trimleaf: 'https://trimleaf.com/products/growers-choice-roi-e720-led-grow-light-fixture',
        Sylvane: 'https://www.sylvane.com/quest-dual-110-overhead-dehumidifier.html'
    };

    const greenthumbdepotPrice = selectedVariant
        ? selectedVariant.competitors.find(competitor => competitor.name === 'Greenthumbdepot')?.price || 0
        : product.competitors.find(competitor => competitor.name === 'Greenthumbdepot')?.price || 0;
    const lowerPricedCompetitors = (selectedVariant ? selectedVariant.competitors : product.competitors).filter(competitor => competitor.price < greenthumbdepotPrice);

    return (
        <Flex
            width="100%"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            mb={4}
            flexDirection={{ base: 'column', md: 'row' }}
        >
            {showContent && (
                <Box width={{ base: '100%', md: '40%' }} position="relative" ml={{ base: 0, md: 4 }}>
                    <Image
                        src={getRandomImage()}
                        alt={product.name}
                        borderRadius="lg"
                        objectFit="cover"
                        height="70%"
                        width="85%"
                    />
                </Box>
            )}

            <VStack
                width={{ base: '100%', md: showContent ? '60%' : '100%' }}
                p={6}
                alignItems={{ base: 'flex-start', md: 'stretch' }}
                textAlign={{ base: 'left', md: 'initial' }}
            >
                <Flex justifyContent="space-between" alignItems="center" width="100%">
                    <Text fontSize="md" fontWeight="bold" flex="1">
                        {product.name}
                    </Text>
                    <IconButton
                        icon={showContent ? <MinusIcon /> : <AddIcon />}
                        onClick={toggleContent}
                        size="sm"
                        aria-label={showContent ? 'Hide Content' : 'Show Content'}
                        colorScheme="blue"
                        variant="outline"
                        alignSelf="flex-end"
                    />
                </Flex>

                <Text fontSize="sm" color="gray.500">SKU: {selectedVariant ? selectedVariant.SKU : product.SKU}</Text>
                <Text fontSize="sm" color="gray.500">Greenthumbdepot Price: ${greenthumbdepotPrice}</Text>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: showContent ? 'auto' : 0, opacity: showContent ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden', width: '100%' }}
                >
                    {showContent && (
                        <VStack spacing={2} alignItems="stretch" marginTop={2} width="100%">
                            {product.variants && (
                                <Box>
                                    <Text fontSize="sm" fontWeight="bold">Variants:</Text>
                                    <Flex>
                                        {product.variants.map((variant, index) => (
                                            <Button
                                                key={index}
                                                size="sm"
                                                onClick={() => handleVariantClick(variant)}
                                                variant={selectedVariant === variant ? 'solid' : 'outline'}
                                                colorScheme="blue"
                                                mr={2}
                                            >
                                                {variant.name}
                                            </Button>
                                        ))}
                                    </Flex>
                                </Box>
                            )}

                            {lowerPricedCompetitors.length > 0 ? (
                                lowerPricedCompetitors.map((competitor, index) => (
                                    <Box
                                        key={index}
                                        borderWidth="1px"
                                        borderRadius="md"
                                        padding={2}
                                        bg="gray.100"
                                        width="100%"
                                    >
                                        <Link
                                            href={competitorUrls[competitor.name]}
                                            isExternal
                                            color="blue.500"
                                        >
                                            <Text>{competitor.name}</Text>
                                            <Text fontSize="sm">Price: ${competitor.price}</Text>
                                        </Link>
                                    </Box>
                                ))
                            ) : (
                                <Box borderWidth="1px" borderRadius="md" padding={2} bg="gray.100" width="100%">
                                    <Text>No competitor with a lower price than Greenthumbdepot</Text>
                                </Box>
                            )}
                        </VStack>
                    )}
                </motion.div>

                <Flex mt={4} width="100%" justifyContent="space-between">
                    <Button
                        size="sm"
                        colorScheme="red"
                        as="a"
                        href="https://greenthumbdepot.com/products/netafim-techlock-fittings?variant=48496240066843"
                        target="_blank"
                        width="48%"
                    >
                        View Product
                    </Button>
                    <Button
                        size="sm"
                        colorScheme="teal"
                        as="a"
                        href="https://greenthumbdepot.com/products/netafim-techlock-fittings?variant=48496240066843"
                        target="_blank"
                        width="48%"
                    >
                        Update Price
                    </Button>
                </Flex>
            </VStack>
        </Flex>
    );
};

export default ProductCard;
