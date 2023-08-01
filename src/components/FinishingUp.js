import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { Box, Stack, Text, Divider } from '@chakra-ui/react';

const FinishingUp = () => {
  const { isYearly, selectedPlan, addOnCharges, setFormStep } =
    useContext(FormContext);
  const calculateTotal = () => {
    let total = selectedPlan.price;
    for (const charge of addOnCharges) {
      total += charge.price;
    }
    return total;
  };
  console.log('RUNNING TOTAL: ', calculateTotal());
  return (
    <Box w={'full'} color={'cool-gray'}>
      <Stack direction={'column'} spacing={6}>
        <Stack>
          <Text fontSize={'3xl'} fontWeight={'bold'} color={'marine-blue'}>
            Finishing up
          </Text>
          <Text fontSize={'lg'}>
            Double-check evertyhing looks OK before confirming.
          </Text>
        </Stack>
        <Box p={4} bg={'alabaster'} rounded={'xl'}>
          <Stack direction={'row'} justify={'space-between'}>
            <Stack>
              <Text fontWeight={'bold'} color={'marine-blue'}>
                {selectedPlan.name}({isYearly ? 'Yearly' : 'Monthly'})
              </Text>
              <Text
                cursor={'pointer'}
                textDecoration={'underline'}
                fontSize={'sm'}
                onClick={() => setFormStep(2)}
              >
                Change
              </Text>
            </Stack>
            <Text fontWeight={'bold'} color={'marine-blue'}>
              ${selectedPlan.price}/{isYearly ? 'yr' : 'mo'}
            </Text>
          </Stack>
          <Divider my={4} borderColor={'cool-gray'} />
          {addOnCharges.map((charge, index) => (
            <Stack key={index} direction={'row'} justify={'space-between'}>
              <Text>{charge.name}</Text>
              <Text fontWeight={'bold'} color={'marine-blue'} fontSize={'sm'}>
                +${charge.price}
                {isYearly ? 'yr' : 'mo'}
              </Text>
            </Stack>
          ))}
        </Box>
        <Box px={4}>
          <Stack direction={'row'} justify={'space-between'}>
            <Text>Total (per {isYearly ? 'year' : 'month'})</Text>

            <Text color={'purplish-blue'} fontWeight={'bold'}>
              ${calculateTotal()}/{isYearly ? 'yr' : 'mo'}
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default FinishingUp;
