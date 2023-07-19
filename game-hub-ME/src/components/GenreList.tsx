import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  setSelectedGenre: (genre: Genre | null) => void;
}

const GenreList = ({ selectedGenre, setSelectedGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List spacing={2}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px" paddingX="10px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImgUrl(genre.image_background)}
            ></Image>
            <Button
              isActive={genre == selectedGenre ? true : false}
              variant="link"
              fontSize="lg"
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
