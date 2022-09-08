import React from 'react'
import { HStack, Text, useColorModeValue } from '@chakra-ui/react'

const ProjectStack = ({ stackArr }) => {
  return (
    <HStack mt={4} mb={2} ml={-2}>
      <span>
        {stackArr.map((stack, index) => (
          <Text
            key={index}
            fontSize="sm"
            display="inline-block"
            color={useColorModeValue('gray', '#a8b2d1')}
            mx={2}
          >
            {stack}
          </Text>
        ))}
      </span>
    </HStack>
  )
}

export default ProjectStack
