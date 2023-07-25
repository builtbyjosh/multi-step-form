import { Box, Button, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import PersonalInfoForm from './PersonalInfoForm';
import PlanSelectForm from './PlanSelectForm';
import AddOns from './AddOns';
import { useForm } from 'react-hook-form';
import FinishingUp from './FinishingUp';

const FormContainer = () => {
  const [formStep, setFormStep] = useState(1);
  const [isYearly, setIsYearly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState();
  const [addOnCharges, setAddOnCharges] = useState([]);
  const handleNextStep = () => {
    if (formStep < 4) {
      setFormStep(prevStep => prevStep + 1);
    }
  };

  const { form, register } = useForm();

  const handlePreviousStep = () => {
    if (formStep > 1) {
      setFormStep(prevStep => prevStep - 1);
    }
  };
  console.log('SELECTED PLAN: ', selectedPlan);
  console.log('ADD ON CHARGES: ', addOnCharges);
  return (
    <Box mx={'auto'} maxW={'100%'}>
      <Box h={'90%'}>
        {formStep === 1 && <PersonalInfoForm />}
        {formStep === 2 && (
          <PlanSelectForm
            setSelectedPlan={setSelectedPlan}
            setIsYearly={setIsYearly}
            isYearly={isYearly}
          />
        )}
        {formStep === 3 && (
          <AddOns setAddOnCharges={setAddOnCharges} isYearly={isYearly} />
        )}
        {formStep === 4 && (
          <FinishingUp
            isYearly={isYearly}
            selectedPlan={selectedPlan}
            addOnCharges={addOnCharges}
            setFormStep={setFormStep}
          />
        )}
      </Box>
      <Box>
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
    </Box>
  );
};

export default FormContainer;
