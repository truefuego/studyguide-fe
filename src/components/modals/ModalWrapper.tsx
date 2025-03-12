import Text from "../common/Text";
import { IModalWrapperProps } from "./type";
import { CrossIcon } from "../../assets/icons/icons";
import { motion } from "framer-motion";

const ModalWrapper:React.FC<IModalWrapperProps> = ({ 
    title, 
    isOpen, 
    onClose, 
    actionText, 
    onPressAction, 
    closeModalText, 
    children 
}) => {  

    return (
        <motion.div className={`absolute top-0 z-10 transition-all duration-300`} aria-labelledby="modal-title" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? '' : 'none', transition: { duration: .3 }}} exit={{}}>
            <div className="fixed inset-0 bg-primary-bg/75 transition-opacity z-10" aria-hidden="true" onClick={onClose} />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-2xl bg-graph-bg border-2 border-graph-border text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="flex w-full items-center p-2 px-3 justify-between">
                            <Text text={title} color="secondary-text" className="text-xl"/>
                            <div className="text-tertiary-text cursor-pointer" onClick={onClose}>
                                <CrossIcon />
                            </div>
                        </div>
                        <div className="p-3">
                            {children}
                        </div>
                        {actionText && (
                            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-3">
                                <button type="button" className="inline-flex w-full justify-center rounded-lg bg-red px-3 py-2 text-sm text-primary-bg shadow-lg hover:bg-accent-red cursor-pointer sm:ml-3 sm:w-auto" onClick={onPressAction}>{actionText}</button>
                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-lg border-2 border-primary-text text-secondary-text px-3 py-2 text-sm shadow-lg cursor-pointer hover:text-tertiary-text hover:border-tertiary-text sm:mt-0 sm:w-auto" onClick={onClose}>{closeModalText}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
  }

export default ModalWrapper;
