import { useState } from "react";
import BaseQuestion from "./BaseQuestion";
import MODES from "./Enums/Modes";

const TextQuestion = ({ index, label = 'Pregunta Tipo Texto', onDelete = () => {} }) => {
  const code = `text_${index}`;

  const [mode, setMode] = useState(MODES.normal);
  const [placeholder, setPlaceholder] = useState("Placeholder");

  const onEdit = () => {
    // onEdit();
  }

  const onModeChange = (value) => {
    setMode(value);
    console.log("value : ", mode);
  }

  const normal = mode == MODES.normal;
  const editable = mode == MODES.editable;

  return (
    <BaseQuestion index={index} code={code} label={label} onEdit={onEdit} onDelete={onDelete} onModeChange={onModeChange}>
      { normal ? <input className="c-input" type="text" id={code} name={code} placeholder={placeholder} disabled/> : '' }
      { editable ? <input className="c-input" type="text" id={code} name={code} value={placeholder} onChange={e => setPlaceholder(e.target.value)} /> : '' }
    </BaseQuestion>
  );
};

export default TextQuestion;