import clsx from 'clsx';
import React from 'react'
import { ITextProps } from './type';

const Text:React.FC<ITextProps> = ({ text, className }) => {
  return (
    <p className={`text-primary-text ${clsx(className)}`}>{text}</p>
  )
}

export default Text