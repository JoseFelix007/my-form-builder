
import { useState } from 'react';
import Card from "../Utils/Card";
import { buildFormQuestion } from "./FormQuestion/FormQuestionBuilder";
import FormQuestionList from './FormQuestion/FormQuestionList';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import './styles/Form.scss';

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

  const addQuestion = (ev) => {
    console.log("drop");
    const type = ev.dataTransfer.getData("type");
    const questionId = `question_${type}_${formQuestions.length}`;
    const question = buildFormQuestion(questionId, type);
    setformQuestions(formQuestions.concat([question]));

    const dropArea = ev.target;
    dropArea.classList.remove("drop-area--on-drag");
  }

  const onDragEnd = ({destination, source}) => {
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const newFormQuestions = [...formQuestions];
    [newFormQuestions[source.index], newFormQuestions[destination.index]] = [newFormQuestions[destination.index], newFormQuestions[source.index]];
    setformQuestions(newFormQuestions);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Card>
        <Droppable droppableId='form'>
          { (provided) => (
            <FormQuestionList innerRef={provided.innerRef} formQuestions={formQuestions} onDeleteQuestion={onDeleteQuestion} placeholder={provided.placeholder} {...provided.droppableProps}/>
          )}
        </Droppable>
        <div className='drop-area' onDrop={addQuestion} onDragOver={allowDrop} onDragEnter={onDragEnter} onDragLeave={onDragLeave}>
          <span className='message'>+ Suelta aquí las preguntas que desees</span>
        </div>
      </Card>
    </DragDropContext>
  );
}

export default Form;