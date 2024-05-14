import Card from "../Utils/Card";
import { TextQuestion } from "./FormBuilderQuestion/FormBuilderQuestionType";

const FormBuilder = () => {
  return (
    <>
      <Card title="Preguntas básicas">
        <TextQuestion />
      </Card>
    </>
  );
}

export default FormBuilder;