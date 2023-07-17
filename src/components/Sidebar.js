import {
  Box,
  UnorderedList,
  ListItem,
  Stack,
  Text,
  Circle,
  Container,
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
    <Box bgImage={bgImage} maxWidth="274px" w={'100%'} aspectRatio={'274/568'}>
      <Box pt={10} ml={5}>
        <UnorderedList spacing={8} styleType={'none'} textAlign={'left'}>
          <SidebarItem
            step={1}
            text={'YOUR INFO'}
            activeIndex={activeIndex}
            handleActiveItem={handleActiveItem}
          />
          <SidebarItem
            step={2}
            text={'SELECT PLAN'}
            activeIndex={activeIndex}
            handleActiveItem={handleActiveItem}
          />
          <SidebarItem
            step={3}
            text={'ADD-ONS'}
            activeIndex={activeIndex}
            handleActiveItem={handleActiveItem}
          />
          <SidebarItem
            step={4}
            text={'SUMMARY'}
            activeIndex={activeIndex}
            handleActiveItem={handleActiveItem}
          />
        </UnorderedList>
      </Box>
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
