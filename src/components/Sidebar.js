import {
  Box,
  UnorderedList,
  ListItem,
  Stack,
  Text,
  Circle,
  Flex,
} from '@chakra-ui/react';
import bgImage from '../images/bg-sidebar-desktop.svg';
import bgImageMobile from '../images/bg-sidebar-mobile.svg';

const Sidebar = ({ formStep }) => {
  return (
    <Box
      bgImage={{ base: bgImageMobile, md: bgImage }}
      maxWidth={{ base: 'unset', md: '274px' }}
      w={'100%'}
      bgRepeat={{ base: 'no-repeat', md: undefined }}
      objectFit={{ base: 'fill', md: undefined }}
      aspectRatio={{ base: undefined, md: '274/568' }}
      p={5}
      h={{ base: '175px', sm: '100%' }}
    >
      <Stack pt={{ base: 5, md: 10 }} ml={{ base: 0, md: 5 }}>
        <Flex
          as={UnorderedList}
          direction={{ base: 'row', md: 'column' }}
          spacing={{ base: 0, md: 8 }}
          styleType={'none'}
          textAlign={'left'}
          mx={{ base: 'auto', md: 'unset' }}
        >
          <Box mr={{ base: 4, md: 0 }}>
            <SidebarItem step={1} text={'YOUR INFO'} formStep={formStep} />
          </Box>
          <Box mr={{ base: 4, md: 0 }}>
            <SidebarItem step={2} text={'SELECT PLAN'} formStep={formStep} />
          </Box>
          <Box mr={{ base: 4, md: 0 }}>
            <SidebarItem step={3} text={'ADD-ONS'} formStep={formStep} />
          </Box>
          <SidebarItem step={4} text={'SUMMARY'} formStep={formStep} />
        </Flex>
      </Stack>
    </Box>
  );
};

export default Sidebar;

const SidebarItem = ({ step, text, formStep }) => {
  return (
    <ListItem w={'fit-content'}>
      <Stack direction={'row'} align={'center'} color={'light-gray'}>
        <Circle
          border={'1px'}
          size={'30px'}
          bgColor={formStep === step ? 'light-blue' : ''}
          fontWeight={'bold'}
        >
          <Text
            fontSize={'xs'}
            color={formStep === step ? 'marine-blue' : 'White'}
          >
            {step}
          </Text>
        </Circle>

        <Stack
          direction={'column'}
          spacing={0}
          ml={2}
          justify={'center'}
          lineHeight={'shorter'}
          display={{ base: 'none', sm: 'flex' }}
        >
          <Text fontSize={'xs'} color={'cool-gray'}>
            STEP {step}
          </Text>
          <Text color={'White'} fontSize={'sm'} fontWeight={'semibold'}>
            {text}
          </Text>
        </Stack>
      </Stack>
    </ListItem>
  );
};
