import Card from "../Utils/Card";
import { TextQuestion, RadioQuestion } from "./FormBuilderQuestion/FormBuilderQuestionType";

const FormBuilder = () => {
  return (
    <>
      <Card title="Preguntas básicas">
        <TextQuestion />
        <RadioQuestion />
      </Card>
    </>
  );
}

export default FormBuilder;