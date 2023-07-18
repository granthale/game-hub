import { Game } from "../hooks/useGames"
import { Badge } from '@chakra-ui/react'

interface Props {
    game: Game;
}

const CriticScore = ({game} : Props) => {
  return (
    <Badge paddingX={2} colorScheme="green" variant="solid">{game.metacritic}</Badge>
  );
};

export default CriticScore