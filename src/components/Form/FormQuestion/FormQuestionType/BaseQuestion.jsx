import { useRef, useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDeleteSweep, MdOutlineClose, MdDragIndicator } from "react-icons/md";

// import './BaseQuestion.scss';
import './styles/BaseQuestion.scss';
import './styles/Utils.scss';

import MODES from "./Enums/Modes";

const BaseQuestion = ({ children, innerRef, index, label, code, onEdit = () => {}, onDelete = () => {}, onModeChange = () => {}, ...otherProps }) => {
  const [mode, setMode] = useState(MODES.normal);
  const [vLabel, setLabel] = useState(label);
  const question = useRef(null);
  const questionDrag = useRef(null);

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

  const onDragQuestion = () => {
    console.log("onDragQuestion");
    // question.current.classList.add('hidden');
    // questionDrag.current.classList.remove('hidden');
  }

  return (
    <div ref={innerRef} id={`question_${code}`} className="c-f-question | flex-row gap w-full" {...otherProps}>
      <div className="c-f-question--drag | grabbable flex-row align-center" draggable onDragStart={onDragQuestion}>
        <MdDragIndicator size={'1.5rem'}/>
        <span ref={questionDrag} className="c-f-question--label | w-full hidden">{ vLabel }</span>
      </div>
      <div ref={question} className="c-f-question--content | relative flex-col gap w-full">
        <span className='c-f-question--actions | absolute'>
          { mode == MODES.normal ? <LiaEditSolid onClick={handleOnEdit} className="c-icon" size={'1.5rem'} /> : '' }
          { mode == MODES.editable ? <MdOutlineClose onClick={handleCloseEdit} className="c-icon" size={'1.5rem'} /> : '' }
          <MdOutlineDeleteSweep onClick={handleOnDelete} className="c-icon" size={'1.5rem'} />
        </span>
        { mode == MODES.normal ? <label className="c-f-question--label" htmlFor={code}>{ vLabel }</label> : '' }
        { mode == MODES.editable ? <input className="c-f-question--label c-input" type="text" name="label" id="label" value={vLabel} onChange={e => setLabel(e.target.value)}  /> : '' }
        { children ? children : '' }
      </div>
    </div>
  );
}

export default BaseQuestion;