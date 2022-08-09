import Head from 'next/head'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import NavBar from '../navbar'
import Banner from '../banner'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} bg={useColorModeValue('#EDF3F8', '#1A202C')}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Duy Le - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Banner />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
