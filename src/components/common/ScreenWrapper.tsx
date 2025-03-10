import React from 'react'

interface IWrapperComponentProps {
    children: React.ReactNode;
}

const ScreenWrapper:React.FC<IWrapperComponentProps> = ({ children }) => {
  return (
    <div className='bg-primary-bg md:w-[calc(100vw-224px)] w-screen p-12'>
        {children}
    </div>
  )
}

export default ScreenWrapper