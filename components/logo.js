import Link from 'next/link'
//import Image from 'next/image'
import { Text, useColorModeValue, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
`

const Logo = () => {
  const punk = '/punk.png'
  const coolPunk = '/punk_with_glasses.png'

  const [image, setImage] = useState(punk)

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image
            width={'40px'}
            height={'40px'}
            alt="logo"
            src={image}
            onMouseEnter={() => setImage(coolPunk)}
            onMouseOut={() => setImage(punk)}
          />
          <Text
            pt={3}
            color={useColorModeValue('white', 'whiteAlpha.900')}
            onMouseEnter={() => setImage(coolPunk)}
            onMouseOut={() => setImage(punk)}
          >
            Duy Le
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
