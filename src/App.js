import React from 'react';
import { Box, Text, Link, Stack, Grid } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <Box h={'100vh'}>
      <Stack
        direction={'row'}
        p={4}
        display={'flex'}
        maxW={'950px'}
        mx={'auto'}
        mt={12}
        bgColor={'alabaster'}
        h={'fit-content'}
        borderRadius={'2xl'}
        bg={'white'}
      >
        <Sidebar />
        <FormContainer />
      </Stack>
    </Box>
  );
}

export default App;
