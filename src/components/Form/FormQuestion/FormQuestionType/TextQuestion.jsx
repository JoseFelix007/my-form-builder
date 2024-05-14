import BaseQuestion from "./BaseQuestion";

const TextQuestion = ({ index, label = 'Pregunta Tipo Texto', onDelete = () => {} }) => {
  const code = `text_${index}`;

  const onEdit = () => {
    // onEdit();
  }

  return (
    <BaseQuestion index={index} code={code} label={label} onEdit={onEdit} onDelete={onDelete}>
      <input disabled className="c-form-question--text" type="text" id={code} name={code} placeholder={`Placeholder ${index}`} />
    </BaseQuestion>
  );
};

export default TextQuestion;