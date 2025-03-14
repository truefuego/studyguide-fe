export interface ITextProps{
    text: string;
    className?: string;
    color?: string;
};

export interface IWrapperComponentProps {
    children: React.ReactNode;
    className?: string;
};

export interface ICustomButtonProps {
    text: string;
    color: string;
    onClick: () => void;
    isClickable: boolean;
};

export interface ICustomInputProps {
    userInput: string;
    setUserInput: (text: string) => void;
};
