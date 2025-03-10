import React from 'react'

interface IWrapperComponentProps {
    children: React.ReactNode;
}

const ScreenWrapper:React.FC<IWrapperComponentProps> = ({ children }) => {
  return (
    <div className='bg-primary-bg w-[calc(100vw-224px)] p-12'>
        {children}
    </div>
  )
}

export default ScreenWrapper