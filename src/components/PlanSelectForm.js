import { useState } from 'react';
import { Box, Stack, Text, Image, Switch } from '@chakra-ui/react';
import { paymentPlans } from '../data/paymentPlans';

const PlanSelectForm = () => {
  const [isYearly, setisYearly] = useState(true);
  const billing = isYearly ? paymentPlans.yearly : paymentPlans.monthly;
  return (
    <Box pt={12}>
      <Stack direction={'column'} spacing={6}>
        <Stack>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            Select your plan
          </Text>
          <Text fontSize={'lg'}>
            You have the option of monthly or yearly billing.
          </Text>
        </Stack>
      </Stack>
      <Stack direction={'row'} my={5} justify={'space-between'}>
        {billing.map(plan => (
          <PlanCard planData={plan} isYearly={isYearly} />
        ))}
      </Stack>
      <Stack
        direction={'row'}
        w={'100%'}
        h={'30px'}
        align={'center'}
        justify={'center'}
        bgColor={'light-gray'}
        fontSize={'sm'}
        fontWeight={'bold'}
        spacing={8}
        rounded={'md'}
      >
        <Text>Monthly</Text>
        <Switch isChecked={isYearly} onChange={() => setisYearly(!isYearly)} />
        <Text>Yearly</Text>
      </Stack>
    </Box>
  );
};

export default PlanSelectForm;

const PlanCard = ({ planData, isYearly }) => {
  return (
    <Box
      border="1px"
      rounded="lg"
      h="150px"
      w={'110px'}
      p={2}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Image src={planData.icon} alignSelf="flex-start" />
      <Stack
        direction="column"
        spacing={0}
        // alignSelf="flex-end"

        textAlign={'left'}
      >
        <Text>{planData.name}</Text>
        <Text>
          ${planData.price}/{isYearly ? 'yr' : 'mo'}
        </Text>
        {isYearly && <Text>2 months free</Text>}
      </Stack>
    </Box>
  );
};
