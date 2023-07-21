import { useState, useEffect } from 'react';
import { Box, Stack, Text, Checkbox } from '@chakra-ui/react';
import { addOns } from '../data/paymentPlans';

const AddOns = ({ setAddOnCharges, isYearly }) => {
  //   console.log('ADD ONS: ', addOns);
  const billing = isYearly ? addOns.yearly : addOns.monthly;

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
          <CheckBoxAddOn addOnDetails={addOn} isYearly={isYearly} />
        ))}
      </Stack>
    </Box>
  );
};

export default AddOns;

const CheckBoxAddOn = ({ addOnDetails, isYearly }) => {
  return (
    <Box p={6} w={'100%'} border="1px" rounded="lg">
      <Stack direction={'row'}>
        <Checkbox mr={4} />
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
