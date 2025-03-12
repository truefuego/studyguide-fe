export interface OptionButtonProps {
    index: number;
    text: string;
    selectedOption: string;
    onPress: (text: string) => void;
};
