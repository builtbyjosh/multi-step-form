import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PersonalInfoForm from './PersonalInfoForm';
import PlanSelectForm from './PlanSelectForm';
import AddOns from './AddOns';
import FinishingUp from './FinishingUp';
import ThankYou from './ThankYou';

const FormContainer = ({ formStep, setFormStep }) => {
  const [isYearly, setIsYearly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState();
  const [addOnCharges, setAddOnCharges] = useState([]);

  const { form, register } = useForm();

  console.log('SELECTED PLAN: ', selectedPlan);
  console.log('ADD ON CHARGES: ', addOnCharges);

  return (
    <Box
      px={{ base: 'unset', md: 6 }}
      py={{ base: 6, md: 12 }}
      h={{ base: 'unset', md: '90%' }}
      mx={'auto'}
      maxW={'100%'}
    >
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
      {formStep === 5 && <ThankYou />}
    </Box>
  );
};

export default FormContainer;
