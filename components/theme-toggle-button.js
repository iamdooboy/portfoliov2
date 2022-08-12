import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 0, opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
          variant="ghost"
          aria-label="Toggle theme"
          icon={useColorModeValue(
            <MoonIcon color="white" />,
            <SunIcon color="yellow.300" />
          )}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
