import { Stack, Text, Image, Center } from '@chakra-ui/react';
import checkMark from '../images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <Stack
      mx={'auto'}
      mt={{ base: 'unset', md: '100px' }}
      w={'75%'}
      h={'100%'}
      align={'center'}
      justify={'center'}
    >
      <Stack textAlign={'center'}>
        <Image src={checkMark} mx={'auto'} />
        <Stack mt={6} textAlign={'center'}>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Thank you!
          </Text>
          <Text color={'cool-gray'}>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ThankYou;
