import './BaseQuestion.scss';

const BaseQuestion = ({ children, label, code }) => {
  return (
    <>
      <div id={`question_${code}`} className="c-form-question">
        <label htmlFor={code}>{ label }</label>
        { children ? children : 'Basic Field' }
      </div>
    </>
  );
}

export default BaseQuestion;