import React from 'react'
import { ProjectCard } from '../components/project-card'
import Layout from '../components/layouts/article'
import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { projects } from '../projects'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h4" size="md" variant="section-title">
          About Me
        </Heading>
        <Text>
          Hi, I&apos;m Duy (doo-ee). I&apos;m a Web Developer/Designer who
          enjoys crafting software that is maintainable, scalable, and easy to
          use. I&apos;ve worked with a wide variety of tools and frameworks and
          focus on my favorites:
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
        <Heading as="h4" size="md" pt={8} variant="section-title">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} spacingX={4} spacingY={4} mb={2}>
          {Object.keys(projects).map((key, index) => (
            <ProjectCard
              key={index}
              title={projects[key].title}
              description={projects[key].shortDescription}
              imageSrc={projects[key].thumbnail}
              imageAlt={projects[key].imageAlt}
              id={projects[key].id}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Page
