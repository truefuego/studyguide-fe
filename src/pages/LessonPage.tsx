import React, { useState } from 'react'
import ScreenWrapper from '../components/common/ScreenWrapper'
import ProgressBar from '../components/lessons/ProgressBar'
import CustomButton from '../components/common/CustomButton';

const LessonPage:React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const handleCheckClick = () => {
        if(currentStep === 10) {
            console.log('End Game');
        }
        setCurrentStep(prev => Math.min(10,prev+1));
    }

    return (
        <ScreenWrapper className='pb-0 px-0'>
            <div className='flex flex-col justify-between w-full'>
                <div className='flex flex-col items-center'>
                    <ProgressBar value={currentStep} max={10} />
                </div>
                <div className='w-[100%] border-primary-border border-t-2 '>
                    <div className='flex w-[100%] md:w-[80%] justify-between'>
                        <div />
                        <CustomButton text={currentStep === 10 ? 'CONTINNUE' : 'CHECK'} onClick={handleCheckClick} color='accent-green'/>
                    </div>
                </div>
            </div>
        </ScreenWrapper>
    )
}

export default LessonPage