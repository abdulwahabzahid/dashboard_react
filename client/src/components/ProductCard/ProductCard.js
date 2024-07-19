import React, { useState } from 'react';
import { Flex, VStack, Text, IconButton, Box, Image, Button, Link, useToast, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { AddIcon, MinusIcon, WarningIcon } from '@chakra-ui/icons';
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
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [discountedSelectedPrice, setDiscountedSelectedPrice] = useState(null);
    const [selectedCompetitorName, setSelectedCompetitorName] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const cancelRef = React.useRef();

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const handleVariantClick = (variant) => {
        setSelectedVariant(variant);
    };

    const handleFlagClick = () => {
        toast({
            title: 'Flagged as really low price.',
            description: "The competitor's price has been flagged for review.",
            status: 'warning',
            duration: 3000,
            isClosable: true,
        });
    };

    const handleUpdatePriceClick = (price, competitorName) => {
        setSelectedPrice(price);
        setDiscountedSelectedPrice(price); 
        setSelectedCompetitorName(competitorName);
        onOpen();
    };

    const confirmUpdatePrice = () => {
        if (selectedPrice !== null && selectedCompetitorName) {
            if (selectedVariant) {
                const updatedCompetitors = selectedVariant.competitors.map((competitor) =>
                    competitor.name === 'Greenthumbdepot'
                        ? { ...competitor, price: selectedPrice, discountedPrice: discountedSelectedPrice }
                        : competitor
                );
                setSelectedVariant({ ...selectedVariant, competitors: updatedCompetitors });
            } else {
                const updatedCompetitors = product.competitors.map((competitor) =>
                    competitor.name === 'Greenthumbdepot'
                        ? { ...competitor, price: selectedPrice, discountedPrice: discountedSelectedPrice }
                        : competitor
                );
                // You may need to handle state updates or other effects here as required
            }
            toast({
                title: 'Price Updated.',
                description: `The product price has been updated to $${discountedSelectedPrice}.`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }
        onClose();
    };

    const competitorUrls = {
        Hydrobuilder: 'https://hydrobuilder.com/brands/growers-choice/growers-choice-led-grow-lights/growers-choice-roi-e720-full-spectrum-led-grow-light.html',
        Trimleaf: 'https://trimleaf.com/products/growers-choice-roi-e720-led-grow-light-fixture',
        Sylvane: 'https://www.sylvane.com/quest-dual-110-overhead-dehumidifier.html'
    };

    const greenthumbdepotPrice = selectedVariant
        ? selectedVariant.competitors.find(competitor => competitor.name === 'Greenthumbdepot')?.price || 0
        : product.competitors.find(competitor => competitor.name === 'Greenthumbdepot')?.price || 0;
    const greenthumbdepotDiscountedPrice = selectedVariant
        ? selectedVariant.competitors.find(competitor => competitor.name === 'Greenthumbdepot')?.discountedPrice || 0
        : product.competitors.find(competitor => competitor.name === 'Greenthumbdepot')?.discountedPrice || 0;
    const lowerPricedCompetitors = (selectedVariant ? selectedVariant.competitors : product.competitors).filter(competitor => competitor.price < greenthumbdepotPrice);

    const reallyLowPriceThreshold = 100; 

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
                <Text fontSize="sm" color="gray.500">
                    Greenthumbdepot Price: <Text as="span" textDecoration="line-through">${greenthumbdepotPrice}</Text> ${greenthumbdepotDiscountedPrice}
                </Text>

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
                                                mt={2}
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
                                        display="flex"
                                        mt={4}
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Link
                                            href={competitorUrls[competitor.name]}
                                            isExternal
                                            color="blue.500"
                                            flex="1"
                                        >
                                            <Text>{competitor.name}</Text>
                                            <Text fontSize="sm">
                                                Price: <Text as="span" textDecoration="line-through">${competitor.price}</Text> ${competitor.discountedPrice}
                                            </Text>
                                        </Link>
                                        {competitor.price < reallyLowPriceThreshold && (
                                            <IconButton
                                                icon={<WarningIcon />}
                                                size="sm"
                                                aria-label="Flag as low price"
                                                colorScheme="red"
                                                onClick={handleFlagClick}
                                                ml={2}
                                            />
                                        )}
                                        <Button
                                            size="sm"
                                            colorScheme="teal"
                                            onClick={() => handleUpdatePriceClick(competitor.discountedPrice, competitor.name)}
                                            ml={2}
                                        >
                                            Update Price
                                        </Button>
                                    </Box>
                                ))
                            ) : (
                                <Box borderWidth="1px" borderRadius="md" padding={2} bg="gray.100" width="100%">
                                    <Text>No competitor with a lower price than Greenthumbdepot</Text>
                                </Box>
                            )}

                            {/* Conditional rendering for the buttons */}
                            {showContent && (
                                <Flex mt={4} width="100%" justifyContent="center">
                                    <Button
                                        size="sm"
                                        colorScheme="red"
                                        as="a"
                                        href="https://greenthumbdepot.com/products/netafim-techlock-fittings?variant=48496240066843"
                                        target="_blank"
                                        width="35%"
                                        p={6}
                                    >
                                        View Product
                                    </Button>
                                </Flex>
                            )}
                        </VStack>
                    )}
                </motion.div>
            </VStack>

            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                leastDestructiveRef={cancelRef}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Confirm Price Update
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure you want to update the price to ${selectedPrice}?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="teal" onClick={confirmUpdatePrice} ml={3}>
                                Confirm
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Flex>
    );
};

export default ProductCard;
