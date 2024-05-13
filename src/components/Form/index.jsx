
import { useState } from 'react';
import Card from "../Utils/Card";
import { buildFormQuestion } from "./FormQuestion/FormQuestionBuilder";
import './Form.scss';

const Form = () => {
  const [questions, setQuestions] = useState([]);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const onDropQuestion = (ev) => {
    const type = ev.dataTransfer.getData("type");
    console.log("drop ", type);
    const question = buildFormQuestion(type);
    setQuestions(questions.concat(question));
  };

  return (
    <>
      <Card>
        <div className='form' onDrop={onDropQuestion} onDragOver={allowDrop}>
          { 
            questions.length > 0 ? 
            questions.map((Question, key) =>  <Question key={key} index={key}/>) :
            <p className='message'>Suelta aquí las preguntas que desees</p>
          }
        </div>
      </Card>
    </>
  );
}

export default Form;