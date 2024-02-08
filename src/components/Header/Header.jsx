import React from 'react';
import {
  ChakraProvider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
    },
  },
});

function Header() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        padding="1rem"
        bg="blue.500"
        color="yellow"
      >
        <Box>
          <Heading as="h1" fontSize="xl">
            Traveller
          </Heading>
        </Box>

        <Box display="flex" alignItems="center">
          <Box fontSize="sm" color="yellow.300" marginRight="2">
            Explore places
          </Box>
          <InputGroup size="sm">
            <Input placeholder="Search" />
            <InputRightElement children="🔍" />
          </InputGroup>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Header;
