import React from 'react'
import OptionButton from './components/OptionButton';
import Text from '../../common/Text';
import { Avatar, ThinkingDots } from '../../../assets/icons/icons';
import { ISelectOptionsModeProps } from './type';

const SelectOptionsMode:React.FC<ISelectOptionsModeProps> = ({ selectedOption, setSelectedOption, question, options }) => {

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='w-[70vw] min-w-[300px] md:w-[60vw] flex flex-col gap-4 mt-8'>
        <div className='flex items-center gap-12'>
          <Avatar />
          <div className='flex items-end gap-2'>
            <ThinkingDots />
            <div>
              <Text text={question} className='text-2xl border-3 border-tertiary-text rounded-2xl p-2 px-8 select-none'/>
            </div>
          </div>
        </div>
        <div className='grid gap-4 justify-center'>
          {options.map((item, index) => <OptionButton key={index} index={index+1} text={item} selectedOption={selectedOption} onPress={setSelectedOption}/>)}
        </div>
      </div>
    </div>
  )
}

export default SelectOptionsMode;
