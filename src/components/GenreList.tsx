import useGenres from "../hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} marginTop={9}>
        Genres
      </Heading>
      <List>
        {/* {error && <Text>{error}</Text>}
        {isLoading && <Spinner />} */}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover" // to make the image cover the whole box
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
