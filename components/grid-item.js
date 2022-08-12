import {
  Box,
  Code,
  Text,
  Tag,
  TagLeftIcon,
  TagLabel,
  useColorModeValue
} from '@chakra-ui/react'

export const GridItem = ({ children, href, icon }) => (
  // <Button
  //   leftIcon={icon}
  //   colorScheme="black"
  //   variant="outline"
  //   size="xs"
  //   href={href}
  //   m={'auto'}
  //   mx={'3px'}
  // >
  //   {children}
  // </Button>
  // <Code children={children} mx={2} />
  <Text
    fontSize="sm"
    display="inline-block"
    color={useColorModeValue('gray', '#a8b2d1')}
    mx={2}
  >
    {children}
  </Text>
  // <Tag size={'sm'} variant="ghost" colorScheme="red" mx={1}>
  //   <TagLeftIcon boxSize="15px" as={icon} />
  //   <TagLabel>{children}</TagLabel>
  // </Tag>
)
