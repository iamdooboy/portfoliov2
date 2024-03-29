import Image from 'next/image'
import {
  Box,
  Heading,
  useColorModeValue,
  Center,
  Icon,
  Text
} from '@chakra-ui/react'
import { MdLocationOn } from 'react-icons/md'

const Banner = () => {
  return (
    <Box
      textAlign="center"
      bg={useColorModeValue('#283b57', '#2D3748')}
      pt={16}
      color="white"
    >
      <Image src="/images/profile-pic.png" width={80} height={80} alt="logo" />
      <Heading mb={2} as="h4" size="md">
        Duy Le
      </Heading>
      <Text mb={2} as="h5" size="xs">
        Full Stack Developer
      </Text>

      <Center pb={5}>
        <Icon as={MdLocationOn} boxSize={6} mr={1} />
        Boston, MA
      </Center>
    </Box>
  )
}

export default Banner
