import './Question.scss';

const Question = ({ children, type }) => {
  const onDragQuestion = (ev) => {
    console.log("drag");
    ev.dataTransfer.setData("type", type);
  };

  return (
    <>
      <div id='question-1' className="c-question" draggable onDragStart={onDragQuestion} data-type={type}>
        { children ? children : 'Basic Field' }
      </div>
    </>
  );
}

export default Question;