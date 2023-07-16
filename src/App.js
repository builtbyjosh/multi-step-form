import React from 'react';
import { Box, Text, Link, Stack, Grid } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Box textAlign="center" h={''} fontSize="xl">
      <Stack direction={'row'}>
        <Sidebar />
        <Text>Multi Step Form</Text>
      </Stack>
    </Box>
  );
}

export default App;
