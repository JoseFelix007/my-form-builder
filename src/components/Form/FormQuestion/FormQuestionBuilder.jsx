import { TextQuestion, RadioQuestion } from "./FormQuestionType";

export const buildFormQuestion = (id, type) => {
  const question = {
    id: id,
    type: type,
    component: null
  };

  switch (type) {
    case 'text':
      question.component = TextQuestion;
      break;
    case 'radio':
      question.component = RadioQuestion;
      break;
    default:
      break;
  }

  return question;
};
