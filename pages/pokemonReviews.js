import Layout from '../components/layouts/article'
import Title from '../components/project/project-title'
import Carousel from '../components/project/project-carousel'
import Description from '../components/project/project-description'
import Stack from '../components/project/project-stack'
import Buttons from '../components/project/project-buttons'
import { Container } from '@chakra-ui/react'
import { projects } from '../projects'

const PokemonReviews = () => {
  const { pokemonReview } = projects
  const { title, images, description, stack, host, git } = pokemonReview
  return (
    <Layout title="Pokemon Reviews">
      <Container>
        <Title title={title} />
        <Carousel images={images} />
        <Description description={description} />
        <Stack stackArr={stack} />
        <Buttons host={host} git={git} />
      </Container>
    </Layout>
  )
}

export default PokemonReviews
