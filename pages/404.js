import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={7} />
      <Box align="center" mt={12}>
        <NextLink href="/" passHref>
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
        <Image src="/404.png" width={425} height={425} alt="404" />
      </Box>
      <Divider my={4} />
    </Container>
  )
}

export default NotFound
