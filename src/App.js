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
        maxW={'800px'}
        mx={'auto'}
        mt={{ base: 0, md: 12 }}
        bg={{ base: 'light-gray', md: 'white' }}
        h={'fit-content'}
        borderRadius={'2xl'}
      >
        <Sidebar />

        <Box
          bg={'white'}
          ml={{ base: 0, md: '-30px' }}
          borderRadius={{ base: '2xl', md: 'unset' }}
          px={{ base: 5, md: 'unset' }}
          mx={{ base: 5, md: 'unset' }}
          mt={{ base: -20, md: 0 }}
          mb={{ base: '150px', md: 'unset' }}
          zIndex={{ base: 'auto', md: 1 }}
          maxW={'100%'}
        >
          <FormContainer />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
