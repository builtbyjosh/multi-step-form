import { Box, Button, Stack } from '@chakra-ui/react';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import PersonalInfoForm from './PersonalInfoForm';
import PlanSelectForm from './PlanSelectForm';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';
import ThankYou from './ThankYou';

const FormContainer = () => {
  const { formStep, setFormStep, handleSubmit, errors } =
    useContext(FormContext);

  const handlePreviousStep = () => {
    if (formStep > 1) {
      setFormStep(prevStep => prevStep - 1);
    }
  };

  const handleNextStep = async () => {
    if (errors) {
      console.log(errors);
    } else {
      console.log('no errors');
    }
    if (formStep < 4) {
      const isValid = await handleSubmit();
      if (!isValid) return;
    }

    if (formStep === 4) {
      handleSubmit(data => {
        console.log(data);
      })();
    }

    setFormStep(prevStep => prevStep + 1);
  };

  return (
    <Box
      px={{ base: 'unset', md: 6 }}
      py={{ base: 6, md: 12 }}
      h={{ base: 'unset', md: '90%' }}
      mx={'auto'}
      maxW={'100%'}
    >
      <form onSubmit={handleSubmit(handleNextStep)}>
        <Box mb={20}>
          {formStep === 1 && <PersonalInfoForm />}
          {formStep === 2 && <PlanSelectForm />}
          {formStep === 3 && <AddOns />}
          {formStep === 4 && <FinishingUp />}
          {formStep === 5 && <ThankYou />}
        </Box>
        {formStep < 5 && (
          <Box
            p={{ base: 6, md: 'unset' }}
            mt={{ base: 30, md: 'unset' }}
            bg={'white'}
            w={'full'}
            position={{ base: 'fixed', md: 'unset' }}
            bottom={{ base: 0, md: 'unset' }}
            left={{ base: 0, md: 'unset' }}
            right={{ base: 0, md: 'unset' }}
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
                type="submit"
                variant={'unstyled'}
                px={3}
                bgColor={'marine-blue'}
                color={'white'}
                fontWeight={'normal'}
                cursor={'pointer'}
              >
                {formStep === 4 ? 'Confirm' : 'Next Step'}
              </Button>
            </Stack>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default FormContainer;
