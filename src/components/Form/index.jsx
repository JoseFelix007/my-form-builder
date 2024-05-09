
import { useState } from 'react';
import Card from "../Utils/Card";
import './Form.scss';
import { getFormQuestionByType } from "./Questions/Builder";

const Form = () => {
  const [questions, setQuestions] = useState([]);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const onDropQuestion = (ev) => {
    const type = ev.dataTransfer.getData("type");
    console.log("drop ", type);
    const question = getFormQuestionByType(type);
    setQuestions(questions.concat(question));
  };

  return (
    <>
      <Card>
        <div className='form' onDrop={onDropQuestion} onDragOver={allowDrop}>
          { questions.map((Question, key) =>  <Question key={key} index={key}/>) }
        </div>
      </Card>
    </>
  );
}

export default Form;