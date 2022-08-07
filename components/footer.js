import React from 'react'
import { chakra, Flex, Icon } from '@chakra-ui/react'
import { FaLinkedinIn } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Flex
      w="full"
      as="footer"
      flexDir={{ base: 'column', sm: 'row' }}
      align="center"
      justify="space-between"
      py="4"
      _dark={{
        bg: 'gray.800'
      }}
    >
      <chakra.p
        fontSize="sm"
        fontWeight="400"
        color="gray.500"
        _dark={{
          color: 'white.600'
        }}
      >
        Duy Le © 2022
      </chakra.p>

      <chakra.p
        py={{ base: '2', sm: '0' }}
        fontSize="sm"
        fontWeight="400"
        color="gray.500"
        _dark={{
          color: 'white.600'
        }}
      >
        All rights reserved
      </chakra.p>

      <Flex mx="-2">
        <chakra.a
          href="#"
          mx="2"
          color="gray.600"
          _dark={{ color: 'gray.300', _hover: { color: 'gray.400' } }}
          _hover={{
            color: 'gray.500'
          }}
          aria-label="Facebook"
        >
          <Icon boxSize="3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"></path>
          </Icon>
        </chakra.a>

        <chakra.a
          href="#"
          mx="2"
          color="gray.600"
          _dark={{ color: 'gray.300', _hover: { color: 'gray.400' } }}
          _hover={{
            color: 'gray.500'
          }}
          aria-label="Github"
        >
          <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
          </Icon>
        </chakra.a>
      </Flex>
    </Flex>
  )
}
