import { Container, Text, VStack, Box, Image, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box boxSize="sm">
          <Image src="/images/hero-image.jpg" alt="Clothing Brand" />
        </Box>
        <Text fontSize="4xl" fontWeight="bold">Welcome to Our Clothing Store</Text>
        <Text fontSize="xl">Discover the latest trends in fashion</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;