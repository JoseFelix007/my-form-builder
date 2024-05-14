import './BaseQuestion.scss';

const BaseQuestion = ({ children, type, Icon = null }) => {
  const onDragQuestion = (ev) => {
    console.log("drag");
    ev.dataTransfer.setData("type", type);
  };

  return (
    <>
      <div id='question-1' className="c-question" draggable onDragStart={onDragQuestion} data-type={type}>
        <span className='c-question--icon'>{ Icon ? <Icon  size={'1.5rem'} /> : '' }</span>
        { children ? children : '' }
      </div>
    </>
  );
}

export default BaseQuestion;