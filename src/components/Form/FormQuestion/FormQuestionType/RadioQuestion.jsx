import { useState } from "react";
import BaseQuestion from "./BaseQuestion";
import MODES from "./Enums/Modes";
import { MdOutlineClose } from "react-icons/md";

const RadioQuestion = ({ row_index, col_index, label = 'Pregunta Tipo Radio', onDelete = () => {} }) => {
  const code = `text_${row_index}_${col_index}`;

  const [mode, setMode] = useState(MODES.normal);
  const [options, setOptions] = useState(["opcion 1"]);

  const onEdit = () => {
    // onEdit();
  }

  const onModeChange = (value) => {
    setMode(value);
    console.log("value : ", mode);
  }

  const onOptionChange = (value, idx) => {
    const newOptions = [...options];
    newOptions[idx] = value;
    setOptions(newOptions);
  }

  const onAddOption = () => {
    const newOptions = [...options];
    const newIdx = newOptions.length + 1;
    newOptions.push(`opcion ${newIdx}`);
    setOptions(newOptions);
  }

  const onDeleteOption = (index) => {
    const newOptions = options.filter((opt, idx) => idx !== index);
    setOptions(newOptions);
  }

  const normal = mode == MODES.normal;
  const editable = mode == MODES.editable;

  return (
    <BaseQuestion row_index={row_index} col_index={col_index} code={code} label={label} onEdit={onEdit} onDelete={onDelete} onModeChange={onModeChange}>
      <div className="c-form-question--options">
      { options.length > 0 && options.map((option, idx) => 
        (
          <div key={idx} className="c-form-question--radio" >
            <input type="radio" value={option} id={`opt_${idx}`} disabled/>
            { normal ? <label htmlFor={`opt_${idx}`}>{ option }</label> : '' }
            { editable ? (
              <>
                <input type="text" value={option} id={`opt_${idx}`} onChange={e => onOptionChange(e.target.value, idx)}/>
                <MdOutlineClose className="icon close" size={'1.5rem'} onClick={() => onDeleteOption(idx)} />
              </>
            ) : '' }
          </div>
        )
      ) }
      { editable ? 
          <div className="c-form-question--radio c-form-question--radio--new" onClick={onAddOption}>
            <input type="radio" value="" id={`opt_radio_add`} disabled/>
            <input type="text" value="Añadir opcion" id={`opt_add`} disabled  /> 
          </div>
        : '' }
      </div>
    </BaseQuestion>
  );
};

export default RadioQuestion;