import { IoMdRadioButtonOn } from "react-icons/io";
import BaseQuestion from "./BaseQuestion";

const RadioQuestion = () => {
  return (
    <BaseQuestion type="radio" Icon={IoMdRadioButtonOn}>
      <span>Tipo Radio</span>
    </BaseQuestion>
  );
};

export default RadioQuestion;