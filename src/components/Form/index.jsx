
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

  const onDeleteQuestion = (row_index, col_index) => {
    let newFormQuestions = [...formQuestions];
    newFormQuestions[row_index] = newFormQuestions[row_index].filter((q, idx) => idx !== col_index);
    setformQuestions(newFormQuestions);
  }

  const addQuestionToCol = (ev) => {
    console.log("drop col");
    const type = ev.dataTransfer.getData("type");

    const question = buildFormQuestion(type);
    setformQuestions(formQuestions.concat([[question]]));

    const dropArea = ev.target;
    dropArea.classList.remove("drop-area--on-drag");
  }

  const addQuestionToRow = (ev, index) => {
    console.log("drop row");
    const type = ev.dataTransfer.getData("type");
    let newFormQuestions = [...formQuestions];
    const question = buildFormQuestion(type);
    newFormQuestions[index] = newFormQuestions[index].concat(question);
    setformQuestions(newFormQuestions);

    const dropArea = ev.target;
    dropArea.classList.remove("drop-area--on-drag");
  }

  return (
    <>
      <Card>
        <div className='form'>
          {
            formQuestions.length > 0 &&
            formQuestions.map((row, row_index) => {
                return (
                  <div className='form-row' key={row_index}>
                    {
                      row.map((question, col_index) => {
                        const Component = question.component;
                        return Component ? (<Component key={col_index} row_index={row_index} col_index={col_index} onDelete={(row_index, col_index) => onDeleteQuestion(row_index, col_index)}/>) : '';
                      })
                    }
                    <div className='drop-area' onDrop={(ev) => addQuestionToRow(ev, row_index)} onDragOver={allowDrop} onDragEnter={onDragEnter} onDragLeave={onDragLeave}>
                      <span className='message'>+</span>
                    </div>
                  </div>
                );
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