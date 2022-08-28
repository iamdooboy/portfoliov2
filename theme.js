import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: props => ({
      html: {
        overflow: 'overlay',
        scrollbarColor: '#1A202C #0a192f',
        '&::-webkit-scrollbar': {
          w: '6px'
        },
        '&::-webkit-scrollbar-track': {
          bg: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          bgColor: mode('#BFBFBF', '#969595')(props),
          border: '1px solid',
          borderColor: mode('#BFBFBF', '#969595')(props),
          borderRadius: '10px'
        }
      },
      body: {
        bg: mode('#EDF3F8', '#1A202C')(props)
      }
    })
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  },
  components: {
    Heading: {
      variants: {
        'section-title': {
          textDecoration: 'underline',
          fontSize: 20,
          textUnderlineOffset: 6,
          textDecorationColor: '#525252',
          textDecorationThickness: 4,
          marginTop: 4,
          marginBottom: 5
        }
      }
    }
  }
})

export default theme
