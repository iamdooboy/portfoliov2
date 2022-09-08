import React from 'react'
import NextLink from 'next/link'
import { HStack, Flex, Button, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <Link isExternal _hover={{ textDecoration: 'none' }}>
        {children}
      </Link>
    </NextLink>
  )
}

const ProjectButtons = ({ host, git }) => {
  return (
    <Flex align="center" my={4}>
      <HStack mt={3} spacing="15px">
        <LinkItem href={host}>
          <Button
            leftIcon={<ExternalLinkIcon />}
            colorScheme="teal"
            variant="solid"
          >
            Launch
          </Button>
        </LinkItem>
        <LinkItem href={git}>
          <Button
            leftIcon={<IoLogoGithub />}
            colorScheme="teal"
            variant="outline"
          >
            GitHub
          </Button>
        </LinkItem>
      </HStack>
    </Flex>
  )
}

export default ProjectButtons
