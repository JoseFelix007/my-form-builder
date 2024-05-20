import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDeleteSweep, MdOutlineClose } from "react-icons/md";

import './BaseQuestion.scss';

import MODES from "./Enums/Modes";

const BaseQuestion = ({ children, row_index, col_index, label, code, onEdit = () => {}, onDelete = () => {}, onModeChange = () => {} }) => {
  const [mode, setMode] = useState(MODES.normal);
  const [vLabel, setLabel] = useState(label);

  const handleOnEdit = () => {
    setMode(MODES.editable);
    onModeChange(MODES.editable);
    console.log("onEdit", mode);
    onEdit();
  }

  const handleCloseEdit = () => {
    setMode(MODES.normal);
    onModeChange(MODES.normal);
    console.log("closeEdit", mode);
  }

  const handleOnDelete = () => {
    console.log("onDelete");
    onDelete(row_index, col_index);
  }

  return (
    <>
      <div id={`question_${code}`} className="c-form-question">
        <span className='c-form-question--actions'>
          { mode == MODES.normal ? <LiaEditSolid onClick={handleOnEdit} className="icon" size={'1.5rem'} /> : '' }
          { mode == MODES.editable ? <MdOutlineClose onClick={handleCloseEdit} className="icon" size={'1.5rem'} /> : '' }
          <MdOutlineDeleteSweep onClick={handleOnDelete} className="icon" size={'1.5rem'} />
        </span>
        { mode == MODES.normal ? <label className="c-form-question--label" htmlFor={code}>{ vLabel }</label> : '' }
        { mode == MODES.editable ? <input className="c-form-question--label--input" type="text" name="label" id="label" value={vLabel} onChange={e => setLabel(e.target.value)}  /> : '' }
        { children ? children : '' }
      </div>
    </>
  );
}

export default BaseQuestion;