import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack marginBottom={2} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore game={game}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating_top={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
