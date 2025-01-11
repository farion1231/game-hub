import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize={"14px"}
      borderRadius={4}
      paddingX={2}
      colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : ""}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
