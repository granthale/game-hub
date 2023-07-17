import { Image, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./colorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>   
  );
};

export default Navbar;
