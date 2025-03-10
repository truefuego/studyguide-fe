import React from 'react'
import { motion } from 'framer-motion';
import { IWrapperComponentProps } from './type';

const ScreenWrapper:React.FC<IWrapperComponentProps> = ({ children }) => {
  return (
    <motion.div className='bg-primary-bg md:w-[calc(100vw-224px)] w-screen p-12' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .3 }}}>
      {children}
    </motion.div>
  )
}

export default ScreenWrapper