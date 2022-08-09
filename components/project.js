import React from 'react'
import { Box, Flex, Image, chakra, Badge } from '@chakra-ui/react'

export const Project = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <Box maxW="xs" bg="#fff" _dark={{ bg: '#2D3748' }} shadow="lg" rounded="lg">
      <Box px={4} py={2}>
        <chakra.h1
          color="gray.800"
          _dark={{ color: 'white' }}
          fontWeight="bold"
          fontSize="xl"
        >
          Inkdrop
        </chakra.h1>
        <chakra.p
          mt={1}
          fontSize="sm"
          color="gray.600"
          _dark={{ color: 'gray.400' }}
        >
          A Markdown note-taking app with 100+ plugins, cross-platform and
          encrypted data sync support. The life-time revenue is more than $300k.
        </chakra.p>
      </Box>

      <Image
        h={36}
        w="full"
        fit="cover"
        mt={2}
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        alt="NIKE AIR"
      />

      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={2}
        bg="gray.900"
        _dark={{ bg: '#011627' }}
        roundedBottom="lg"
        px={'auto'}
      >
        <Badge mx={1} variant="solid" colorScheme="green" fontSize=".5em">
          MonogDB
        </Badge>
        <Badge mx={1} colorScheme="gray" fontSize=".5em">
          Express
        </Badge>
        <Badge mx={1} colorScheme="teal" fontSize=".5em">
          React
        </Badge>
        <Badge mx={1} variant="solid" colorScheme="green" fontSize="0.5em">
          Node
        </Badge>
        <Badge mx={1} variant="solid" colorScheme="blue" fontSize=".5em">
          MUI
        </Badge>
      </Flex>
    </Box>
  )
}
