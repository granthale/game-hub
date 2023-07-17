import "./App.css";
import { Button, ButtonGroup, useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "dark" : "light"}</Button>
  );
}

export default App;
