import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
  FaGlobe,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    nintendo: SiNintendo,
    mac: FaApple,
    web: FaGlobe,
  };

  return (
    <HStack marginY={2} spacing={3}>
      {platforms.map((p) => (
        <Icon as={iconMap[p.slug]} key={p.id} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
