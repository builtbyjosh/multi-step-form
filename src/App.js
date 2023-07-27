import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <Box h={'100vh'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        p={{ base: 0, md: 4 }}
        display={'flex'}
        maxW={'950px'}
        mx={'auto'}
        mt={{ base: 0, md: 12 }}
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
