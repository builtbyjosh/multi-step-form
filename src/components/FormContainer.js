import { Box, Button, Stack, Spacer } from '@chakra-ui/react';
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
      h={{ base: 'unset', md: '100%' }}
      w={'100%'}
      position={'relative'}
    >
      <form onSubmit={handleSubmit(handleNextStep)}>
        <Box w={'full'}>
          {formStep === 1 && <PersonalInfoForm />}
          {formStep === 2 && <PlanSelectForm />}
          {formStep === 3 && <AddOns />}
          {formStep === 4 && <FinishingUp />}
          {formStep === 5 && <ThankYou />}
        </Box>
        {formStep < 5 && (
          <Box
            position={{ base: 'fixed', md: 'absolute' }}
            bottom={0}
            left={0}
            right={0}
            px={4}
            py={{ base: 4, md: 'unset' }}
            justifyContent={formStep > 1 ? 'space-between' : 'flex-end'}
            bg={'white'}
            w={'full'}
          >
            <Stack direction={'row'} spacing={6}>
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
              <Spacer />
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
