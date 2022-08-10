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
          {title}
        </chakra.h1>
        <chakra.p
          mt={1}
          fontSize="sm"
          color="gray.600"
          _dark={{ color: 'gray.400' }}
        >
          {description}
        </chakra.p>
      </Box>

      <Image h={36} w="full" fit="cover" mt={2} src={imageSrc} alt={imageAlt} />

      <Flex
        alignItems="center"
        justifyContent="space-between"
        py={2}
        bg="#2D3748"
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
