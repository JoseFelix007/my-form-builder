import BaseQuestion from "./BaseQuestion";

const TextQuestion = ({ row_index, col_index, label = 'Pregunta Tipo Texto', onDelete = () => {} }) => {
  const code = `text_${row_index}_${col_index}`;

  const onEdit = () => {
    // onEdit();
  }

  return (
    <BaseQuestion row_index={row_index} col_index={col_index} code={code} label={label} onEdit={onEdit} onDelete={onDelete}>
      <input disabled className="c-form-question--text" type="text" id={code} name={code} placeholder={`Placeholder ${row_index} ${col_index}`} />
    </BaseQuestion>
  );
};

export default TextQuestion;