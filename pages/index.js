import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello World! I am a full stack developer
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={4}>
          <Heading as="h2" variant="page-title">
            Duy Le
          </Heading>
          <p>Digitial Designer and Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
