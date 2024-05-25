import { Draggable } from '@hello-pangea/dnd';
import { MdDragIndicator } from "react-icons/md";
import './styles/FormQuestionDraggable.scss';
import '../../../styles/Utils.scss';

const FormQuestionDraggable = ({ index, formQuestion, onDeleteQuestion }) => {
  const Component = formQuestion.component;

  return Component ? (
    <Draggable draggableId={formQuestion.id} index={index}>
      {(provided_2) => (
        <div id={formQuestion.id} className="c-f-draggable | flex-row gap w-full" ref={provided_2.innerRef} {...provided_2.draggableProps}>
          <div className="c-f-draggable--icon | grabbable flex-row align-center" {...provided_2.dragHandleProps}>
            <MdDragIndicator size={'1.5rem'}/>
          </div>
          <Component index={index} onDelete={(index) => onDeleteQuestion(index)} />
        </div>
      )}
    </Draggable>
  ) : '';
};

export default FormQuestionDraggable;