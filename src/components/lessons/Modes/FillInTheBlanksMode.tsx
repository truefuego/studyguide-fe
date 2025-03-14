import React from 'react'
import Text from '../../common/Text';
import { IFillInTheBlanksModeProps } from './type';
import CustomInput from '../../common/CustomInput';

const FillInTheBlanksMode:React.FC<IFillInTheBlanksModeProps> = ({ selectedAnswer, setSelectedAnswer, question }) => {

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='w-[70vw] min-w-[300px] md:w-[60vw] flex flex-col gap-12 mt-8 whitespace-break-spaces'>
        <Text text='Fill in the blanks ...' className='text-2xl'/>
        <div className='flex gap-4 '>
          <Text text={question.split('___')[0]} className='text-2xl'/>
          <div className='border-b-3 border-dashed px-2 border-secondary-text'>
            <Text text={selectedAnswer} className='text-2xl' color='tertiary-text' />
          </div>
          <Text text={question.split('___')[1]} className='text-2xl'/>
        </div>
        <div className='self-center'>
          <CustomInput userInput={selectedAnswer} setUserInput={setSelectedAnswer}/>
        </div>
      </div>
    </div>
  )
}

export default FillInTheBlanksMode;
