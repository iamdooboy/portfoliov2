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
  const logo = '/logo.png'
  const logo2 = '/logo2.png'

  const [image, setImage] = useState(logo)

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image
            //transform={'scaleX(-1)'}
            width={'40px'}
            height={'40px'}
            alt="logo"
            src={image}
            onMouseEnter={() => setImage(logo2)}
            onMouseOut={() => setImage(logo)}
            opacity={useColorModeValue('1', '.92')}
          />
          <Text
            pt={3}
            color={useColorModeValue('white', 'whiteAlpha.900')}
            onMouseEnter={() => setImage(logo2)}
            onMouseOut={() => setImage(logo)}
          >
            Duy Le
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
