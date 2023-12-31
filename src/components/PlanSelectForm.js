import { useState, useEffect, useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { Box, Stack, Text, Image, Switch } from '@chakra-ui/react';
import { paymentPlans } from '../data/paymentPlans';

const PlanSelectForm = () => {
  const {
    selectedPlan,
    setSelectedPlan,
    setIsYearly,
    isYearly,
    register,
    setValue,
    errors,
  } = useContext(FormContext);
  const [activeIndex, setActiveIndex] = useState();
  const billing = isYearly ? paymentPlans.yearly : paymentPlans.monthly;
  const handleActiveItem = index => {
    setActiveIndex(index);
  };
  console.log('ERRORS: ', errors);

  useEffect(() => {
    setSelectedPlan(billing[activeIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, isYearly]);

  useEffect(() => {
    register('selectedPlan', { required: true });
    setValue('selectedPlan', selectedPlan);
    console.log('SELECTED PLAN: ', selectedPlan);
  }, [selectedPlan, register, setValue]);

  return (
    <Stack direction={'column'} spacing={6}>
      <Stack>
        <Text fontSize={'3xl'} fontWeight={'bold'}>
          Select your plan
        </Text>
        <Text fontSize={'lg'} color={'cool-gray'}>
          You have the option of monthly or yearly billing.
        </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={'space-between'}
      >
        {billing.map((plan, index) => (
          <PlanCard
            key={index}
            planData={plan}
            index={index}
            isYearly={isYearly}
            activeIndex={activeIndex}
            handleActiveItem={handleActiveItem}
          />
        ))}
      </Stack>
      <Stack
        direction={'row'}
        h={'30px'}
        align={'center'}
        justify={'center'}
        bgColor={'light-gray'}
        fontSize={'sm'}
        fontWeight={'bold'}
        spacing={8}
        rounded={'md'}
        mb={5}
      >
        <Text>Monthly</Text>
        <Switch isChecked={isYearly} onChange={() => setIsYearly(!isYearly)} />
        <Text>Yearly</Text>
      </Stack>
      {errors && errors.selectedPlan && (
        <Text textAlign={'center'} mt={6}>
          Please Choose a Plan to Continue
        </Text>
      )}
    </Stack>
  );
};

export default PlanSelectForm;

const PlanCard = ({
  planData,
  index,
  activeIndex,
  handleActiveItem,
  isYearly,
}) => {
  return (
    <Box
      border={'1px'}
      rounded={'lg'}
      h={{ base: 'unset', md: '150px' }}
      w={{ base: 'unset', md: '110px' }}
      p={{ base: 5, md: 2 }}
      display={'flex'}
      flexDirection={{ base: 'row', md: 'column' }}
      justifyContent={{ base: 'unset', md: 'space-between' }}
      alignItems={{ base: 'flex-start', md: 'unset' }}
      onClick={() => handleActiveItem(index)}
      bgColor={activeIndex === index ? 'light-blue' : ''}
    >
      <Image
        src={planData.icon}
        alignSelf={{ base: 'unset', md: 'flex-start' }}
      />
      <Stack
        direction="column"
        spacing={0}
        ml={{ base: 4, md: 'unset' }}
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
