export interface ISelectOptionsModeProps {
    selectedOption: string;
    setSelectedOption: (text: string) => void;
    question: string;
    options: string[];
};
