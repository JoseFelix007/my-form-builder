import { useRef, useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDeleteSweep, MdOutlineClose } from "react-icons/md";

import './styles/BaseQuestion.scss';
import '../../../../styles/Utils.scss';

import MODES from "./Enums/Modes";

const BaseQuestion = ({ children, index, label, code, onEdit = () => {}, onDelete = () => {}, onModeChange = () => {} }) => {
  const [mode, setMode] = useState(MODES.normal);
  const [vLabel, setLabel] = useState(label);
  const question = useRef(null);

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
    onDelete(index);
  }

  return (
    <div ref={question} className="c-f-question | relative flex-row gap w-full">
      <div className="c-f-question--content | flex-col gap w-full">
        { mode == MODES.normal ? <label className="c-f-question--label" htmlFor={code}>{ vLabel }</label> : '' }
        { mode == MODES.editable ? <input className="c-f-question--label c-input" type="text" name="label" id="label" value={vLabel} onChange={e => setLabel(e.target.value)}  /> : '' }
        { children ? children : '' }
      </div>
      <div className="c-f-question--actions | flex-col align-center">
        { mode == MODES.normal ? <LiaEditSolid onClick={handleOnEdit} className="c-icon" size={'1.5rem'} /> : '' }
        { mode == MODES.editable ? <MdOutlineClose onClick={handleCloseEdit} className="c-icon" size={'1.5rem'} /> : '' }
        <MdOutlineDeleteSweep onClick={handleOnDelete} className="c-icon" size={'1.5rem'} />
      </div>
    </div>
  );
}

export default BaseQuestion;