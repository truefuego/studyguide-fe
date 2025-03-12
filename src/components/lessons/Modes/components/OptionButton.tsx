import React from 'react'
import { OptionButtonProps } from './type'
import Text from '../../../common/Text'

const OptionButton:React.FC<OptionButtonProps> = ({ text, index, selectedOption, onPress }) => {
  const isSelected = text === selectedOption;
  const handleSelect = () =>  {
    onPress(isSelected ? '' : text);
  }

  return (
    <div className={`flex gap-4 border-3 min-w-[300px] w-[80vw] md:w-[25vw] max-w-[500px] transition-all duration-300 rounded-2xl p-2 cursor-pointer ${isSelected ? 'border-select-button-active bg-select-button-active/10' : 'border-tertiary-text'}`} onClick={handleSelect}>
      <div className={`flex justify-center border-2 h-7 w-8 rounded-lg ${isSelected ? 'border-select-button-active bg-select-button-active/10' : 'border-tertiary-text'}`}>
        <Text 
          text={index.toString()} 
          className={`transition-all duration-300 select-none ${isSelected ? 'text-select-button-active' : 'text-tertiary-text'}`} 
          color={`${isSelected ? 'select-button-active' : ''}`}
        />
      </div>
      <Text 
        text={text} 
        className={`transition-all w-full flex items-center justify-center -translate-x-4 duration-300 select-none ${isSelected ? 'text-select-button-active' : 'text-tertiary-text'}`} 
        color={`${isSelected ? 'select-button-active' : ''}`}
      />
    </div>
  )
}

export default OptionButton;
