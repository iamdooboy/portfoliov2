import { Heading, Text, Container } from '@chakra-ui/react'
import HookForm from '../components/HookForm'

const Contact = () => {
  return (
    <Container>
      <Heading as="h4" size="md" variant="section-title">
        Get In Touch
      </Heading>
      <Text mt={3} mb={6}>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </Text>
      <HookForm />
    </Container>
  )
}

export default Contact
