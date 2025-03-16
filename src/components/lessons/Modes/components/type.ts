export interface OptionButtonProps {
    index: number;
    text: string;
    selectedOption: string;
    onPress: (text: string) => void;
};

export interface IPairButtonProps {
    index: number;
    option: string;
    correctIndex: number
    selectedOptions: string[];
    processedOptions: string[];
    setSelectedOptions: (text: string[]) => void;
    setProcessedOptions: (text: string[]) => void;
};

export interface IWordButtonProps {
    text: string;
    handleSelect: () => void;
}
