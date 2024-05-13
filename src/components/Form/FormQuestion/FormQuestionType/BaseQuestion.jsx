import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDeleteSweep } from "react-icons/md";

import './BaseQuestion.scss';

const BaseQuestion = ({ children, label, index, code, onEdit = () => {}, onDelete = () => {} }) => {
  const handleOnEdit = () => {
    console.log("onEdit");
    onEdit();
  }

  const handleOnDelete = () => {
    console.log("onDelete");
    onDelete(index);
  }

  return (
    <>
      <div id={`question_${code}`} className="c-form-question">
        <span className='c-form-question--actions'>
          <LiaEditSolid onClick={handleOnEdit} className="icon" size={'1.5rem'} />
          <MdOutlineDeleteSweep onClick={handleOnDelete} className="icon" size={'1.5rem'} />
        </span>
        <label htmlFor={code}>{ label }</label>
        { children ? children : 'Basic Field' }
      </div>
    </>
  );
}

export default BaseQuestion;