import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Spacer } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box mb={4}>
    <NextLink href="/" passHref>
      <Link>Projects</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading as="h3" display="inline-block" fontSize={19} mb={4}>
      {children}
    </Heading>
    <Spacer />
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
