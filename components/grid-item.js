import { Box, Button } from '@chakra-ui/react'

export const GridItem = ({ children, href, icon }) => (
  <Button
    leftIcon={icon}
    colorScheme="black"
    variant="outline"
    size="xs"
    href={href}
    m={'auto'}
    mx={'3px'}
  >
    {children}
  </Button>
)
