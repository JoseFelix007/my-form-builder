import Card from "../Utils/Card";
import { TextQuestion } from "./FormBuilderQuestion/FormBuilderQuestionType";

const FormBuilder = () => {
  return (
    <>
      <Card title="Basic fields">
        <TextQuestion />
      </Card>
    </>
  );
}

export default FormBuilder;