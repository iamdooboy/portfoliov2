import Head from 'next/head'
import { Box, Container, Heading } from '@chakra-ui/react'
import NavBar from '../navbar'
import Banner from '../banner'
import Image from 'next/image'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
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
