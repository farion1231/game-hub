import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetail from "../hooks/UseGameDetail";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  if (!game) return <Text>Can't find the game</Text>;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
