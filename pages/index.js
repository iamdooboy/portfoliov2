import React from 'react'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Badge,
  Img,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
  createIcon,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon, StarIcon } from '@chakra-ui/icons'
import { Project } from '../components/project'
import { Footer } from '../components/footer'

const property = {
  imageUrl: 'https://bit.ly/2Z4KKcF',
  imageAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Modern home in city center in the heart of historic Los Angeles',
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 4
}

const Page = () => {
  return (
    <Container>
      <Heading as="h4" size="md" pb={5}>
        About Me
      </Heading>
      <p>
        Takuya is a freelance and a full-stack developer based in Osaka with a
        passion for building digital services/stuff he wants. He has a knack for
        all things launching products, from planning and designing all the way
        to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own
        product called{' '}
      </p>
      <Heading as="h4" size="md" py={10}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Project />
        <Project />
        <Project />
        <Project />
      </SimpleGrid>
      <Footer />
    </Container>
  )
}

export default Page
