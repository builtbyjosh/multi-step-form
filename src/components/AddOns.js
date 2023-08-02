import { Box, Stack, Text, Checkbox } from '@chakra-ui/react';
import { addOns } from '../data/paymentPlans';
import { useState, useContext, useEffect } from 'react';
import { FormContext } from '../context/FormContext';

const AddOns = () => {
  const { addOnCharges, setAddOnCharges, isYearly, register, setValue } =
    useContext(FormContext);
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

  useEffect(() => {
    register('addOns');
    setValue('addOns', addOnCharges);
  }, [addOnCharges, register, setValue]);

  return (
    <Stack direction={'column'} spacing={6}>
      <Stack>
        <Text fontSize={'3xl'} fontWeight={'bold'}>
          Pick add-ons
        </Text>
        <Text fontSize={'lg'} color={'cool-gray'}>
          Add-ons help enhance your gaming experience
        </Text>
      </Stack>
      {billing.map((addOn, index) => (
        <CheckBoxAddOn
          key={index}
          index={index}
          addOnDetails={addOn}
          isYearly={isYearly}
          handleCheckBoxChange={handleCheckBoxChange}
        />
      ))}
    </Stack>
  );
};

export default AddOns;

const CheckBoxAddOn = ({ addOnDetails, handleCheckBoxChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { isYearly, addOnCharges } = useContext(FormContext);
  useEffect(() => {
    const isAddOnSelected = addOnCharges.some(
      addOn => addOn.id === addOnDetails.id
    );
    setIsChecked(isAddOnSelected);
  }, [addOnCharges, addOnDetails]);

  const handleCheck = e => {
    setIsChecked(!isChecked);
    handleCheckBoxChange(e, addOnDetails);
  };
  return (
    <Box
      p={{ base: 2, md: 6 }}
      w={'100%'}
      border="1px"
      rounded="lg"
      borderColor={isChecked ? 'purplish-blue' : 'light-gray'}
      bg={isChecked ? 'alabaster' : null}
    >
      <Stack direction={'row'}>
        <Checkbox
          isChecked={isChecked}
          mr={{ base: 2, md: 4 }}
          size={'lg'}
          onChange={e => handleCheck(e)}
        />
        <Stack direction={'row'} justify={'space-between'} w={'full'}>
          <Stack
            direction={'column'}
            spacing={0}
            textAlign={'left'}
            lineHeight={{ base: 1.5, md: 1.1 }}
          >
            <Text fontWeight={'bold'} fontSize={'md'}>
              {addOnDetails.name}
            </Text>
            <Text color={'cool-gray'} fontSize={{ base: 'xs', md: 'lg' }}>
              {addOnDetails.desc}
            </Text>
          </Stack>
          <Text my={'auto'} color={'purplish-blue'}>
            +${addOnDetails.price}/{isYearly ? 'yr' : 'mo'}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
