import BaseQuestion from "./BaseQuestion";

const TextQuestion = ({ index, label = 'Text Question' }) => {
  const code = `text_${index}`;

  return (
    <BaseQuestion code={code} label={label}>
      <input className="c-form-question--text" type="text" id={code} name={code} placeholder={`question ${index}`} />
    </BaseQuestion>
  );
};

export default TextQuestion;