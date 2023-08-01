import { Stack, Text, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

const PersonalInfoForm = () => {
  return (
    <Stack direction={'column'} spacing={6}>
      <Stack>
        <Text fontSize={'3xl'} fontWeight={'bold'}>
          Personal info
        </Text>
        <Text fontSize={'lg'}>
          Please provide your name, email address, and phone number
        </Text>
      </Stack>
      <FormInput type="text" text="Name" name="name" />
      <FormInput type="email" text="Email Address" name="email" />
      <FormInput type="tel" text="Phone Number" name="phone" />
    </Stack>
  );
};

export default PersonalInfoForm;

const FormInput = ({ type, text, name }) => {
  const { register, errors } = useContext(FormContext);

  return (
    <FormControl>
      <FormLabel fontWeight="bold">{text}</FormLabel>
      <Input type={type} {...register(name, { required: true })} />
      {errors && errors[name] && <Text>This field is required</Text>}
    </FormControl>
  );
};
