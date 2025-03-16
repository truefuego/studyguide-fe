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

export interface IPairMatchingModeProps {
    selectedAnswer?: string;
    setSelectedAnswer: (text: string) => void;
    question: string;
    options: string[];
    correct: string;
}

export interface ILessonModeProps {
    selectedAnswer?: string;
    setSelectedAnswer?: (text: string) => void;
    question?: string;
    options?: string[];
    correct?: string;
}

export interface ISentenceBuildingModeProps {
    question: string;
    options: string[];
    selectedAnswer: string;
    setSelectedAnswer: (text: string) => void;
}