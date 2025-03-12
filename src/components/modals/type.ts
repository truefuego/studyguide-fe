export interface IModalWrapperProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    actionText?:string;
    onPressAction?: () => void;
    closeModalText?: string;
};

export interface ICloseLessonPopUpModalProps {
    isModalOpen: boolean;
    setIsModalOpen: () => void;
    closeLessonAction: () => void;
};
