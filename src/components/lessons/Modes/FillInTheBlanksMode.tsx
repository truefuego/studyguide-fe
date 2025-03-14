import React from 'react'
import Text from '../../common/Text';
import { IFillInTheBlanksModeProps } from './type';
import CustomInput from '../../common/CustomInput';

const FillInTheBlanksMode:React.FC<IFillInTheBlanksModeProps> = ({ selectedAnswer, setSelectedAnswer, question }) => {

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='w-[70vw] min-w-[300px] md:w-[60vw] flex flex-col gap-12 mt-8'>
        <Text text={question.replace('___', selectedAnswer)} className='text-2xl'/>
        <div className='self-center'>
          <CustomInput userInput={selectedAnswer} setUserInput={setSelectedAnswer}/>
        </div>
      </div>
    </div>
  )
}

export default FillInTheBlanksMode;
