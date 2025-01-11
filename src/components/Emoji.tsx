import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.png";
import thumbsUp from "../assets/thumbs-up.png";
import bullsEye from "../assets/bullseye.png";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };
  return <Image {...emojiMap[rating_top]} boxSize="25px" marginTop={1} />;
};

export default Emoji;
