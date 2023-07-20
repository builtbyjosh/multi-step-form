import { useState, useEffect } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { addOns } from '../data/paymentPlans';

const AddOns = ({ setAddOnCharges, isYearly }) => {
  //   console.log('ADD ONS: ', addOns);
  return (
    <Box pt={12}>
      <Stack direction={'column'} spacing={6}>
        <Stack>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            Pick add-ons
          </Text>
          <Text fontSize={'lg'}>
            Add-ons help enhance your gaming experience
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AddOns;
