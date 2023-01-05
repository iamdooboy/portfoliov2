import {
  Box,
  Image,
  chakra,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

export const ProjectCard = ({ title, description, imageSrc, imageAlt, id }) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Box
        bg="#fff"
        _dark={{ bg: '#2D3748' }}
        shadow="lg"
        rounded="lg"
        borderWidth="1px"
        borderColor={useColorModeValue('#d4d4d496', '#52525287')}
      >
        <NextLink href={`/${id}`} passHref scroll={false}>
          <LinkBox cursor="pointer">
            <Box px={4} py={2}>
              <LinkOverlay href={`/${id}`} target="_blank">
                <chakra.h1
                  color="gray.800"
                  _dark={{ color: 'white' }}
                  fontWeight="bold"
                  fontSize="xl"
                >
                  {title}
                </chakra.h1>
              </LinkOverlay>

              <chakra.p
                mt={1}
                fontSize="sm"
                color="gray.600"
                _dark={{ color: 'gray.400' }}
              >
                {description}
              </chakra.p>
            </Box>

            <Image
              h={36}
              w="full"
              fit="cover"
              p={2}
              src={imageSrc}
              alt={imageAlt}
            />
          </LinkBox>
        </NextLink>
      </Box>
    </motion.div>
  )
}
