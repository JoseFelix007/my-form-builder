import FormQuestionDraggable from './FormQuestionDraggable';

const FormQuestionList = ({ innerRef, formQuestions, onDeleteQuestion, placeholder, ...droppableProps }) => {
  return (
    <div className='form | relative flex-col gap-1 w-full max-h-70 overflow-y-scroll scrollbar' ref={innerRef} {...droppableProps}>
      {
        formQuestions.length > 0 &&
        formQuestions.map((formQuestion, index) => (
          <FormQuestionDraggable key={formQuestion.id} index={index} formQuestion={formQuestion} onDeleteQuestion={onDeleteQuestion}/>
        ))
      }
      {placeholder}
    </div>
  );
};

export default FormQuestionList;