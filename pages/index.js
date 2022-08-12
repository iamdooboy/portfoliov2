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
import Banner from '../components/banner'
import Layout from '../components/layouts/article'

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
    <Layout>
      <Container>
        <Heading as="h4" size="md" pb={5}>
          About Me
        </Heading>
        <Text>
          Hi, I'm Duy (doo-ee). I'm a Web Developer/Designer who enjoys crafting
          software that is maintainable, scalable, and easy to use. I've worked
          with a wide variety of tools and frameworks and focus on my favorites:
        </Text>
        <br />
        <Text>
          UX Design:{' '}
          <Heading as="span" fontSize="sm" letterSpacing="wider">
            Sketch, Photoshop, Illustrator
          </Heading>
        </Text>
        <br />
        <Text>
          Development:{' '}
          <Heading as="span" fontSize="sm" letterSpacing="wider">
            VanillaJS + ES6, ReactJS, SaSS/SCSS, Chakra UI
          </Heading>{' '}
          on the Front-End, and{' '}
          <Heading as="span" fontSize="sm" letterSpacing="wider">
            NodeJS, Express and MongoDB
          </Heading>{' '}
          on the Back-end, and server-side rendering with{' '}
          <Heading as="span" fontSize="sm" letterSpacing="wider">
            Next.js
          </Heading>{' '}
        </Text>
        <Heading as="h4" size="md" py={10}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} spacingX={4} spacingY={4} mb={2}>
          <Project
            title="Budget Tracker"
            description="A budget tracking web app to help you maintain a healthy cash flow and stay on top of your finances. Track your spending and income in a simple and intuitive user interface. "
            imageSrc="/inkdrop_eyecatch.png"
            imageAlt="Budget Tracker"
            id="budgettracker"
          />
          <Project
            title="Inkdrop"
            description="A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support. The life-time revenue is more than $300k."
            imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            imageAlt="InkDrop"
          />
          <Project
            title="Inkdrop"
            description="A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support. The life-time revenue is more than $300k."
            imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            imageAlt="InkDrop"
          />
          <Project
            title="Inkdrop"
            description="A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support. The life-time revenue is more than $300k."
            imageSrc="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            imageAlt="InkDrop"
          />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Page
