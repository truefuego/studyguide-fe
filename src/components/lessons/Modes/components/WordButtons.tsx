import React from 'react'
import Text from '../../../common/Text'
import { IWordButtonProps } from './type'

const WordButtons:React.FC<IWordButtonProps> = ({ text, handleSelect }) => {
  return (
    <div className={`flex gap-4 border-3 min-w-[300px] w-[80vw] md:w-[25vw] max-w-[500px] transition-all duration-300 rounded-2xl p-2 cursor-pointer`} onClick={handleSelect}>
        <Text
            text={text} 
            className={`transition-all w-full flex items-center justify-center -translate-x-4 duration-300 select-none`}
        />
    </div>
  )
}

export default WordButtons