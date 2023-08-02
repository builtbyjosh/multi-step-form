import { Stack, Text, Image, Center } from '@chakra-ui/react';
import checkMark from '../images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <Center m={'auto'} textAlign={'center'} w={'75%'} h={'100%'}>
      <Stack>
        <Image src={checkMark} mx={'auto'} />
        <Stack mt={6}>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Thank you!
          </Text>
          <Text color={'cool-gray'}>
            Thanks for confirming your subscription! We hope you have fun using
            our platfrom. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ThankYou;
