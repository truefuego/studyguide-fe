import React from 'react'
import { ICustomButtonProps } from './type'
import Text from './Text'
import clsx from 'clsx'

const CustomButton:React.FC<ICustomButtonProps> = ({ text, color, onClick, isClickable }) => {
  return (
    <div className={`px-8 p-3 rounded-xl transition-all duration-300 ${isClickable ? `bg-${clsx(color)}` : 'bg-button-inactive pointer-events-none'} cursor-pointer w-fit m-3 select-none`} onClick={() => onClick?.()}>
      <Text text={text} color='primary-bg'/>
    </div>
  )
}

export default CustomButton