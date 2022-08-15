import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: props => ({
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
