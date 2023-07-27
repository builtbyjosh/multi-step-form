import {
  Box,
  UnorderedList,
  ListItem,
  Stack,
  Text,
  Circle,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import bgImage from '../images/bg-sidebar-desktop.svg';
import bgImageMobile from '../images/bg-sidebar-mobile.svg';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveItem = index => {
    setActiveIndex(index);
  };
  return (
    <Box
      bgImage={{ base: bgImageMobile, md: bgImage }}
      bgSize={'auto'}
      maxWidth={{ base: null, md: '274px' }}
      w={'100%'}
      bgRepeat={'no-repeat'}
      objectFit={{ base: 'fill', md: null }}
      aspectRatio={{ base: null, md: '274/568' }}
      p={5}
      h={{ base: '250px', md: null }}
    >
      <Stack pt={{ base: 5, md: 10 }} ml={{ base: 0, md: 5 }}>
        <Flex
          as={UnorderedList}
          direction={{ base: 'row', md: 'column' }}
          spacing={{ base: 0, md: 8 }}
          styleType={'none'}
          textAlign={'left'}
          mx={{ base: 'auto', md: null }}
        >
          <Box mr={{ base: 4, md: 0 }}>
            <SidebarItem
              step={1}
              text={'YOUR INFO'}
              activeIndex={activeIndex}
              handleActiveItem={handleActiveItem}
            />
          </Box>
          <Box mr={{ base: 4, md: 0 }}>
            <SidebarItem
              step={2}
              text={'SELECT PLAN'}
              activeIndex={activeIndex}
              handleActiveItem={handleActiveItem}
            />
          </Box>
          <Box mr={{ base: 4, md: 0 }}>
            <SidebarItem
              step={3}
              text={'ADD-ONS'}
              activeIndex={activeIndex}
              handleActiveItem={handleActiveItem}
            />
          </Box>
          {/* <Box mr={{ base: 4, md: 0 }}> */}
          <SidebarItem
            step={4}
            text={'SUMMARY'}
            activeIndex={activeIndex}
            handleActiveItem={handleActiveItem}
          />
          {/* </Box> */}
        </Flex>
      </Stack>
    </Box>
  );
};

export default Sidebar;

const SidebarItem = ({ step, text, activeIndex, handleActiveItem }) => {
  return (
    <ListItem
      onClick={() => handleActiveItem(step)}
      cursor="pointer"
      w={'fit-content'}
    >
      <Stack direction={'row'} align={'center'} color={'light-gray'}>
        <Circle
          border={'1px'}
          size={'30px'}
          bgColor={activeIndex === step ? 'light-blue' : ''}
          fontWeight={'bold'}
        >
          <Text
            fontSize={'xs'}
            color={activeIndex === step ? 'marine-blue' : 'White'}
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
          hidden={{ base: true, md: false }}
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
