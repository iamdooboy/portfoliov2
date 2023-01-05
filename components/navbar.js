import Logo from './logo'
import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuList,
  MenuButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('#fff', 'whiteAlpha.900')
  const bgActive = useColorModeValue('teal.400', 'teal.200')

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? bgActive : undefined}
        color={active ? 'black' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#283b57db', '#2d3748ba')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
          <LinkItem
            target="_blank"
            href="/resume.pdf"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            Resume
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/iamdooboy/portfoliov2"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                icon={
                  <HamburgerIcon
                    color={useColorModeValue('#fff', 'whiteAlpha.800')}
                  />
                }
                variant="outline"
                borderColor={useColorModeValue(
                  'RGBA(255, 255, 255, 0.36)',
                  'RGBA(255, 255, 255, 0.16)'
                )}
              />
              <MenuList>
                <NextLink href="/contact" passHref>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
                <NextLink href="/resume.pdf" passHref>
                  <MenuItem as={Link}>Resume</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/iamdooboy/portfoliov2"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
