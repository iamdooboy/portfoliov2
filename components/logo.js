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
  // const avatar = '/punk.png'
  // const avatar2 = '/punk_with_glasses.png'
  const avatar = '/notion_no_bg.png'
  const avatar2 = './notion_no_bg (1).png'

  const [image, setImage] = useState(avatar)

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
            onMouseEnter={() => setImage(avatar2)}
            onMouseOut={() => setImage(avatar)}
            color="white"
          />
          <Text
            pt={3}
            color={useColorModeValue('white', 'whiteAlpha.900')}
            onMouseEnter={() => setImage(avatar2)}
            onMouseOut={() => setImage(avatar)}
          >
            Duy Le
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
