import { Box, Stack, Text, Checkbox } from '@chakra-ui/react';
import { addOns } from '../data/paymentPlans';
import { useState } from 'react';

const AddOns = ({ setAddOnCharges, isYearly }) => {
  const billing = isYearly ? addOns.yearly : addOns.monthly;

  const handleCheckBoxChange = (e, addOnData) => {
    if (e.target.checked === true) {
      setAddOnCharges(addOnCharges => [...addOnCharges, addOnData]);
    } else {
      setAddOnCharges(addOnCharges =>
        addOnCharges.filter(item => item.id !== addOnData.id)
      );
    }
  };
  return (
    <Box pt={12} w={'full'}>
      <Stack direction={'column'} spacing={6}>
        <Stack>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            Pick add-ons
          </Text>
          <Text fontSize={'lg'}>
            Add-ons help enhance your gaming experience
          </Text>
        </Stack>
        {billing.map((addOn, index) => (
          <CheckBoxAddOn
            index={index}
            addOnDetails={addOn}
            isYearly={isYearly}
            handleCheckBoxChange={handleCheckBoxChange}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default AddOns;

const CheckBoxAddOn = ({ addOnDetails, isYearly, handleCheckBoxChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = e => {
    setIsChecked(!isChecked);
    handleCheckBoxChange(e, addOnDetails);
  };
  return (
    <Box
      p={6}
      w={'100%'}
      border="1px"
      rounded="lg"
      borderColor={isChecked ? 'purplish-blue' : 'light-gray'}
      bg={isChecked ? 'alabaster' : null}
    >
      <Stack direction={'row'}>
        <Checkbox mr={4} size={'lg'} onChange={e => handleCheck(e)} />
        <Stack direction={'row'} justify={'space-between'} w={'full'}>
          <Stack
            direction={'column'}
            spacing={0}
            textAlign={'left'}
            lineHeight={1.1}
          >
            <Text fontWeight={'bold'} fontSize={'md'}>
              {addOnDetails.name}
            </Text>
            <Text fontSize={'msm'}>{addOnDetails.desc}</Text>
          </Stack>
          <Text my={'auto'}>
            +${addOnDetails.price}/{isYearly ? 'yr' : 'mo'}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
