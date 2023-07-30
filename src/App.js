import { useState } from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import FormContainer from './components/FormContainer';

function App() {
  const [formStep, setFormStep] = useState(1);
  const handleNextStep = () => {
    if (formStep < 5) {
      setFormStep(prevStep => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (formStep > 1) {
      setFormStep(prevStep => prevStep - 1);
    }
  };

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
        <Sidebar formStep={formStep} />

        <Box
          bg={'white'}
          ml={{ base: 0, md: '-30px' }}
          borderRadius={{ base: '2xl', md: 'unset' }}
          px={{ base: 5, md: 'unset' }}
          mx={{ base: 5, md: 'unset' }}
          mt={{ base: -20, md: 0 }}
          zIndex={{ base: 'auto', md: 1 }}
          maxW={'100%'}
        >
          <FormContainer setFormStep={setFormStep} formStep={formStep} />
          {formStep < 5 && (
            <Box
              p={{ base: 6, md: 'unset' }}
              mt={{ base: 30, md: 'unset' }}
              // my={{ base: 6, md: 'unset' }}
              bg={'white'}
              w={'full'}
              position={{ base: 'absolute', md: 'unset' }}
            >
              <Stack
                direction={'row'}
                justify={formStep > 1 ? 'space-between' : 'flex-end'}
              >
                {formStep > 1 && (
                  <Button
                    onClick={handlePreviousStep}
                    variant={'unstyled'}
                    px={3}
                    color={'cool-gray'}
                    fontWeight={'normal'}
                    cursor={'pointer'}
                  >
                    Go Back
                  </Button>
                )}
                <Button
                  onClick={handleNextStep}
                  variant={'unstyled'}
                  px={3}
                  bgColor={'marine-blue'}
                  color={'white'}
                  fontWeight={'normal'}
                  cursor={'pointer'}
                >
                  Next Step
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
