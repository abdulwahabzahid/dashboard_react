import React, { useState } from 'react';
import { Flex, VStack, Text, IconButton, Box, Image, Button, useToast, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const [showContent, setShowContent] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [discountedSelectedPrice, setDiscountedSelectedPrice] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(product);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const cancelRef = React.useRef();

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const handleUpdatePriceClick = (price) => {
        setSelectedPrice(price);
        setDiscountedSelectedPrice(price); 
        onOpen();
    };

    const confirmUpdatePrice = () => {
        if (selectedPrice !== null) {
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

    const extractCompetitorName = (url) => {
        let match = url.match(/www\.(.*?)\.com/);
        if (!match) {
            match = url.match(/https:\/\/(.*?)\.com/);
        }
        return match ? match[1] : 'Unknown';
    };

    const handleVariantClick = (variant) => {
        setCurrentProduct(variant);
    };

    const handleRevertToBaseProduct = () => {
        setCurrentProduct(product);
    };

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
                        src={currentProduct.imageURL || 'https://via.placeholder.com/150'}
                        alt={currentProduct.name}
                        borderRadius="lg"
                        objectFit="contain"
                        height="90%"
                        width="90%"
                        mt={3}
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
                        {currentProduct.name}
                    </Text>
                    <IconButton
                        icon={showContent ? <MinusIcon /> : <AddIcon />}
                        onClick={() => {
                            if (showContent) {
                                handleRevertToBaseProduct();
                            }
                            toggleContent();
                        }}
                        size="sm"
                        aria-label={showContent ? 'Revert to Base Product' : 'Show Content'}
                        colorScheme="blue"
                        variant="outline"
                        alignSelf="flex-end"
                    />
                </Flex>


                {/* <Text fontSize="sm" fontWeight="bold" color="green.500">Competitor: {extractCompetitorName(currentProduct.brand)}</Text> */}
                <Text fontSize="sm" color="gray.500">SKU: {currentProduct.SKU}</Text>
                <Text fontSize="sm" color="gray.500">
                    {currentProduct.discountedPrice ? (
                        <>
                            <span >Price: </span>
                            <span style={{ textDecoration: 'line-through' }}>${currentProduct.price}</span> ${currentProduct.discountedPrice}
                        </>
                    ) : (
                        `Price: $${currentProduct.price}`
                    )}
                </Text>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: showContent ? 'auto' : 0, opacity: showContent ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden', width: '100%' }}
                >
                    {showContent && (
                        <VStack spacing={2} alignItems="stretch" marginTop={2} width="100%">
                            <Flex wrap="wrap" gap={2} width="100%">
                                {product.variants.map((variant, index) => (
                                    <Button
                                        key={index}
                                        size="sm"
                                        border="1px solid black"
                                        color="#999999"
                                        bg="#121212"
                                        _hover={{ bg: 'black', color: 'white' }}
                                        onClick={() => handleVariantClick(variant)}
                                    >
                                        {variant.name}
                                    </Button>
                                ))}
                            </Flex>

                            <Flex mt={4} width="100%" justifyContent="flex-start" gap={4}>
                                <Button
                                    size="sm"
                                    colorScheme="teal"
                                    width="45%"
                                    p={5}
                                    onClick={() => handleUpdatePriceClick(currentProduct.price)}
                                >
                                    Update Price
                                </Button>
                                <Button
                                    size="sm"
                                    colorScheme="red"
                                    width="45%"
                                    as="a"
                                    p={5}
                                    href={currentProduct.brand}
                                    target="_blank"
                                >
                                    View Product
                                </Button>
                            </Flex>
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
