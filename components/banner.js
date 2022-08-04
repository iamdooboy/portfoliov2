import Logo from './logo'
import NextLink from 'next/link'
import Image from 'next/image'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'

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
      <Heading as="h6" size="xs">
        Full Stack Developer
      </Heading>
    </Box>
  )
}

export default Banner
