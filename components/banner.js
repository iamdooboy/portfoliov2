import Logo from './logo'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Container,
  Box,
  Link,
  HStack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorMode,
  useColorModeValue,
  Center,
  Icon
} from '@chakra-ui/react'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrLinkedinOption, GrGithub } from 'react-icons/gr'
import { MdLocationOn } from 'react-icons/md'

const Banner = () => {
  return (
    <Box
      textAlign="center"
      bg={useColorModeValue('#38434E', '#011627')}
      pt={14}
      color="white"
    >
      <Image src="/images/profile-pic.png" width={70} height={70} alt="logo" />
      <Heading mb={2} as="h4" size="md">
        Duy Le
      </Heading>
      <Heading mb={2} as="h6" size="xs">
        Full Stack Developer
      </Heading>

      <Center pb={3}>
        <Icon as={MdLocationOn} boxSize={6} />
        Boston, MA
        <HStack></HStack>
      </Center>
    </Box>
  )
}

export default Banner
