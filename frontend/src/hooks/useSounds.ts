import useSound from "use-sound";
import hohoho from "../assets/sounds/hohoho.mp3";
import jingle_bells from "../assets/sounds/jingle_bells_cut.mp3";
import wishyoumerry from "../assets/sounds/we_wish_you_a_merry_christmas.mp3";
import correct from "../assets/sounds/Correct-answer.mp3";
import incorrect from "../assets/sounds/Incorrect-answer.mp3";

const useSounds = () => {
  const [jingle] = useSound(jingle_bells);
  const [santa] = useSound(hohoho);
  const [merryXmas] = useSound(wishyoumerry);
  const [soundCorrect] = useSound(correct);
  const [soundIncorrect] = useSound(incorrect);

  return { jingle, santa, merryXmas, soundCorrect, soundIncorrect };
};

export default useSounds;
