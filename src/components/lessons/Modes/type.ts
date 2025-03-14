export interface ISelectOptionsModeProps {
    selectedAnswer: string;
    setSelectedAnswer: (text: string) => void;
    question: string;
    options: string[];
};

export interface IFillInTheBlanksModeProps {
    selectedAnswer: string;
    setSelectedAnswer: (text: string) => void;
    question: string;
};
