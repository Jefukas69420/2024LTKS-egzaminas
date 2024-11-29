import React, { useEffect } from 'react';
import { Box, Text, Stack, useColorMode, IconButton, Heading, VStack, HStack, Button, Image, useToast, useColorModeValue } from '@chakra-ui/react';
import { IoTrashOutline } from 'react-icons/io5';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';  // Import the useAuth hook

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { isLoggedIn, handleLogout } = useAuth(); // Get authentication state
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  
  const footerBgColor = useColorModeValue('white', 'gray.800');
  const footerTextColor = useColorModeValue('gray.800', 'white');

  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        title: "Not logged in",
        description: "You need to log in to view your favorites.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      navigate('/login'); // Redirect user to login if they are not logged in
    }
  }, [isLoggedIn, navigate, toast]);

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Heading as="h2" size="lg" mb={4}>
        Your Favorites
      </Heading>

      <Box
        flex="1"
        overflowY="auto"
        mb={6}
      >
        {cart.length === 0 ? (
          <Text textAlign="center" fontSize="lg" color="gray.600">
            Your favorite list is empty.
          </Text>
        ) : (
          <>
            {cart.map((product) => (
              <Box
                key={product.productID}
                borderWidth={1}
                borderRadius="lg"
                p={4}
                mb={4}
                bg={colorMode === "light" ? "gray.100" : "gray.800"}
                boxShadow="sm"
              >
                <HStack align="start" spacing={6} justify="space-between">
                  <Image
                    src={product.image}
                    alt={product.name}
                    boxSize="120px"
                    objectFit="cover"
                  />

                  <VStack align="start" spacing={2} flex="1">
                    <Text fontWeight="bold" fontSize="md" >{product.name}</Text>
                    <Text fontSize="sm">
                      Price: €{product.price.toFixed(2)}
                    </Text>
                    <Text fontSize="sm" noOfLines={2}>
                      Description: {product.description}
                    </Text>

                    <HStack spacing={4}>



                    </HStack>
                  </VStack>

                  <IconButton
                    icon={<IoTrashOutline />}
                    colorScheme="red"
                    onClick={() => {
                      removeFromCart(product.productID)
                      handleToggleRating();
                    }}
                    aria-label={`Remove ${product.name} from cart`}
                    variant="ghost"
                    size="lg"
                  />
                </HStack>
              </Box>
            ))}
          </>
        )}
      </Box>


    </Box>
  );
};

export default Cart;
