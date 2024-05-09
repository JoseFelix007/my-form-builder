import { TextQuestion } from "./Types";

export const getFormQuestionByType = (type) => {
    switch (type) {
        case 'text':
            return TextQuestion;
        default:
            return null;
    }
};
