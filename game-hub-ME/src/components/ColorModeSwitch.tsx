import { Button, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Button colorScheme="green" onClick={toggleColorMode}>Toggle {colorMode === "light" ? "dark" : "light"}</Button>
  )
}

export default ColorModeSwitch