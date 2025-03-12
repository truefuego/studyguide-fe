import React from "react";
import ModalWrapper from "./ModalWrapper";
import Text from "../common/Text";
import { ICloseLessonPopUpModalProps } from "./type";

const CloseLessonPopUpModal: React.FC<ICloseLessonPopUpModalProps> = ({
    isModalOpen,
    setIsModalOpen,
    closeLessonAction,
    }) => {
    return (
        <ModalWrapper
            title="Leaving so soon?"
            isOpen={isModalOpen}
            onClose={setIsModalOpen}
            closeModalText="Continue Lesson"
            onPressAction={closeLessonAction}
            actionText="Exit Anyway"
        >
            <Text
                text="Your progress in this lesson will be lost. Are you sure you want to exit?"
                color="secondary-text"
                className="text-lg"
            />
        </ModalWrapper>
    );
};

export default CloseLessonPopUpModal;
