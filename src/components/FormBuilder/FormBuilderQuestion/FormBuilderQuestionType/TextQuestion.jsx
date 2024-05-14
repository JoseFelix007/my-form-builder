import { PiTextbox } from "react-icons/pi";
import BaseQuestion from "./BaseQuestion";

const TextQuestion = () => {
  return (
    <BaseQuestion type="text" Icon={PiTextbox}>
      <span>Tipo Texto</span>
    </BaseQuestion>
  );
};

export default TextQuestion;