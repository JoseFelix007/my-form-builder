
import { useState } from 'react';
import Card from "../Utils/Card";
import { buildFormQuestion } from "./FormQuestion/FormQuestionBuilder";
import './Form.scss';

const Form = () => {
  const [formQuestions, setformQuestions] = useState([]);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const onDragEnter = (ev) => {
    const dropArea = ev.target;
    dropArea.classList.add("drop-area--on-drag");
  }

  const onDragLeave = (ev) => {
    const dropArea = ev.target;
    dropArea.classList.remove("drop-area--on-drag");
  }

  const onDeleteQuestion = (index) => {
    let newFormQuestions = [...formQuestions];
    newFormQuestions = newFormQuestions.filter((q, idx) => idx !== index);
    setformQuestions(newFormQuestions);
  }

  const addQuestionToCol = (ev) => {
    console.log("drop col");
    const type = ev.dataTransfer.getData("type");

    const question = buildFormQuestion(type);
    setformQuestions(formQuestions.concat([question]));

    const dropArea = ev.target;
    dropArea.classList.remove("drop-area--on-drag");
  }

  return (
    <>
      <Card>
        <div className='form'>
          {
            formQuestions.length > 0 &&
            formQuestions.map((question, index) => {
              const Component = question.component;
              return Component ? (<Component key={index} index={index} onDelete={(index) => onDeleteQuestion(index)}/>) : '';
            })
          }
          <div className='drop-area' onDrop={addQuestionToCol} onDragOver={allowDrop} onDragEnter={onDragEnter} onDragLeave={onDragLeave}>
            <span className='message'>+ Suelta aquí las preguntas que desees</span>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Form;