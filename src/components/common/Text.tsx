import clsx from 'clsx';
import React from 'react'

interface ITextProps{
    text: string;
    className?: string;
}

const Text:React.FC<ITextProps> = ({ text, className }) => {
  return (
    <p className={`text-primary-text ${clsx(className)}`}>{text}</p>
  )
}

export default Text