import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      transition="transform .25s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
