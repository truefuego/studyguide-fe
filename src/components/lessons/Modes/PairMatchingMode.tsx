import React, { useState } from 'react'
import { IPairMatchingModeProps } from './type';
import PairButton from './components/PairButton';
import Text from '../../common/Text';
import { convertStringToMapping } from '../../../utils/utils';

const PairMatchingMode:React.FC<IPairMatchingModeProps> = ({ options, correct }) => {
  const [processedOptions, setProcessedOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const correctAnswers = convertStringToMapping(correct);


  return (
    <div className='h-full flex flex-col items-center'>
      <div className='w-[70vw] min-w-[300px] md:w-[60vw] flex flex-col gap-12 mt-8'>
        <Text text='Select the matching pairs' className='text-xl'/>
        <div className='grid grid-rows-5 grid-flow-col gap-x-16 gap-y-4 self-center'>
          {options.map((item, index) => (
            <PairButton
              key={index}
              index={index}
              correctIndex={correctAnswers[index]}
              option={item}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              processedOptions={processedOptions}
              setProcessedOptions={setProcessedOptions}
            />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PairMatchingMode;
