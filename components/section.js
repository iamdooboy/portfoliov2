import React from 'react'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Divider,
  Badge,
  Image,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
  createIcon,
  HStack,
  chakra,
  Link,
  Flex,
  Button,
  Center,
  VStack,
  Wrap,
  WrapItem,
  StackDivider,
  AspectRatio,
  List,
  ListItem,
  Spacer,
  Tag
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from './layouts/article'
import P from './paragraph'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { SlideData } from './slideData'
import { Title, WorkImage, Meta } from './work'
import {
  SiMongodb,
  SiReact,
  SiMaterialui,
  SiNodedotjs,
  SiExpress,
  SiVercel
} from 'react-icons/si'
import NavBar from './navbar'
import { GridItem } from './grid-item'
import { Footer } from './footer'
const section = () => {
  return (
    <Layout title="Budget Tracker">
      <Container>
        <Title>Budget Tracker</Title>
        <Carousel infiniteLoop autoPlay showThumbs={false}>
          {SlideData.map(slide => {
            return <WorkImage src={slide.image} />
          })}
        </Carousel>
        <P>
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new playlists of
          recommended tracks based on your existing playlists and more.
        </P>
        <HStack pt={4}>
          <span>
            <GridItem href="/" icon={<SiMongodb />}>
              MongoDB
            </GridItem>
            <GridItem href="/" icon={<SiExpress />}>
              ExpressJS
            </GridItem>
            <GridItem href="/" icon={<SiReact />}>
              React
            </GridItem>
            <GridItem href="/" icon={<SiNodedotjs />}>
              NodeJS
            </GridItem>
            <GridItem href="/" icon={<SiMaterialui />}>
              Material UI
            </GridItem>
            <GridItem href="/" icon={<SiVercel />}>
              Vercel
            </GridItem>
          </span>
        </HStack>

        <Divider borderColor="lightgray" pt={4} />

        <Flex align="center">
          <HStack mt={3} spacing="15px" pb={4}>
            <Button
              leftIcon={<ExternalLinkIcon />}
              colorScheme="teal"
              variant="solid"
            >
              Launch
            </Button>
            <Button
              leftIcon={<IoLogoGithub />}
              colorScheme="teal"
              variant="outline"
            >
              GitHub
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Layout>
  )
}

export default section
