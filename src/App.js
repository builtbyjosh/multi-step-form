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
        maxW={'950px'}
        mx={'auto'}
        mt={{ base: 0, md: 12 }}
        bg={'light-gray'}
        h={'fit-content'}
        borderRadius={'2xl'}
      >
        <Sidebar />
        <Box
          bg={'white'}
          ml={{ base: 0, md: '-30px' }}
          borderRadius={{ base: '2xl', md: null }}
          px={{ base: 5, md: null }}
          mx={{ base: 5, md: null }}
          mt={{ base: -20, md: 0 }}
          zIndex={{ base: 'auto', md: 1 }}
        >
          <FormContainer setFormStep={setFormStep} formStep={formStep} />
        </Box>
        {formStep < 5 && (
          <Box
            p={{ base: 6, md: null }}
            mt={{ base: 12, md: null }}
            // my={{ base: 6, md: null }}
            bg={'white'}
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
      </Stack>
    </Box>
  );
}

export default App;
