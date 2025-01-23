import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  return (
    <Text>
      {expanded ? children : children.substring(0, limit)}...
      <Button
        onClick={() => setExpanded(!expanded)}
        size="xs"
        colorScheme="yellow"
        marginLeft={2}
        fontWeight="bold"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
