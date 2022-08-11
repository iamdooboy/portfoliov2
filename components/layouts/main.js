import Head from 'next/head'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import NavBar from '../navbar'
import Banner from '../banner'
import { Footer } from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" bg={useColorModeValue('#EDF3F8', '#1A202C')}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Duy Le - Homepage</title>
      </Head>
      <NavBar path={router.asPath} />
      <Banner />
      <Container maxW="container.sm" pt={10}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
