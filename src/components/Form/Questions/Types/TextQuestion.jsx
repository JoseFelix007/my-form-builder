import Question from "../Question";

const TextQuestion = ({ index, label = 'Text Question' }) => {
    const code = `text_${index}`;

    return (
        <Question code={code} label={label}>
            <input className="c-form-question--text" type="text" id={code} name={code} placeholder={`question ${index}`}/>
        </Question>
    );
};

export default TextQuestion;