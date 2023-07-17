import {
  Box,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const PersonalInfoForm = () => {
  return (
    <Box pt={12}>
      <Stack direction={'column'} spacing={6}>
        <Stack>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            Personal info
          </Text>
          <Text fontSize={'lg'}>
            Please provide your name, email address, and phone number
          </Text>
        </Stack>
        <FormInput type="text" text="Name" />
        <FormInput type="email" text="Email Address" />
        <FormInput type="tel" text="Phone Number" />
      </Stack>
    </Box>
  );
};

export default PersonalInfoForm;

const FormInput = ({ type, text }) => {
  return (
    <FormControl>
      <FormLabel fontWeight={'bold'}>{text}</FormLabel>
      <Input type={type} />
    </FormControl>
  );
};
