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
      <Text>
        Hi, I'm Duy (doo-ee). I'm a Web Developer/Designer who enjoys crafting
        software that is maintainable, scalable, and easy to use. I've worked
        with a wide variety of tools and frameworks. To avoid spreading myself
        too thin and clutter, I focus on my favorites:
      </Text>
      <br />
      <Text> UX Design: Sketch, Photoshop, Illustrator</Text>
      <br />
      <Text>
        Development: VanillaJS + ES6, ReactJS, SaSS/SCSS, Chakra UI on the
        Front-End, and NodeJS, Express and MongoDB on the back end.
      </Text>
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
