import React from "react";
import { Box, Button, Container, Heading, SimpleGrid, Text, Image, useColorModeValue, VStack, Icon } from "@chakra-ui/react";
import { FaYoutube, FaSpotify, FaFilm } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Get Your Favorite Subscriptions at 50% Discount!
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ServiceCard icon={FaYoutube} colorScheme="red" serviceName="YouTube Premium" description="Enjoy ad-free videos and music on YouTube!" bgColor={bgColor} textColor={textColor} />
          <ServiceCard icon={FaFilm} colorScheme="red" serviceName="Netflix" description="Stream your favorite shows and movies!" bgColor={bgColor} textColor={textColor} />
          <ServiceCard icon={FaSpotify} colorScheme="green" serviceName="Spotify Premium" description="Listen to music without interruptions!" bgColor={bgColor} textColor={textColor} />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

const ServiceCard = ({ icon, colorScheme, serviceName, description, bgColor, textColor }) => (
  <Box
    p={5}
    shadow="md"
    borderWidth="1px"
    backgroundColor={bgColor}
    color={textColor}
    borderRadius="lg"
    textAlign="center"
    role="group"
    _hover={{
      borderColor: colorScheme + ".400",
    }}
  >
    <Icon as={icon} w={16} h={16} color={colorScheme + ".400"} />
    <Heading as="h3" size="lg" mt={4} mb={2}>
      {serviceName}
    </Heading>
    <Text p={2}>{description}</Text>
    <Button
      colorScheme={colorScheme}
      variant="outline"
      mt={4}
      size="lg"
      _groupHover={{
        bg: colorScheme + ".400",
        color: "white",
      }}
    >
      Buy Now
    </Button>
  </Box>
);

export default Index;
