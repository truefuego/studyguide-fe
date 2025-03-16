import React from 'react'
import { IPairButtonProps } from './type'
import Text from '../../../common/Text'

const PairButton:React.FC<IPairButtonProps> = ({ option, index, selectedOptions, processedOptions, setSelectedOptions, setProcessedOptions }) => {
  const isSelected = selectedOptions.includes(option);
  const isProcessed = processedOptions.includes(option);

  const isMatchingPairs = () => {
    return true;
  };
  
  const handleSelect = () => {
    setSelectedOptions([...selectedOptions, option]);
    if(isMatchingPairs()) {
      setProcessedOptions([...processedOptions, ...selectedOptions]);
    } else {
      setSelectedOptions([]);
    }
  }

  return (
    <div className={`flex gap-4 border-3 min-w-[160px] w-[80vw] md:w-[25vw] max-w-[300px] transition-all duration-300 rounded-2xl p-2 cursor-pointer ${isSelected ? 'border-select-button-active bg-select-button-active/10' : 'border-tertiary-text'} ${isProcessed ? 'select-none' : ''}`} onClick={handleSelect}>
      <div className={`flex justify-center border-2 h-7 w-8 rounded-lg ${isSelected ? 'border-select-button-active bg-select-button-active/10' : 'border-tertiary-text'}`}>
        <Text 
          text={index.toString()} 
          className={`transition-all duration-300 select-none ${isSelected ? 'text-select-button-active' : 'text-tertiary-text'}`} 
          color={`${isSelected ? 'select-button-active' : ''}`}
        />
      </div>
      <Text 
        text={option} 
        className={`transition-all w-full flex items-center justify-center -translate-x-4 duration-300 select-none ${isSelected ? 'text-select-button-active' : 'text-tertiary-text'}`} 
        color={`${isSelected ? 'select-button-active' : ''}`}
      />
    </div>
  )
}

export default PairButton