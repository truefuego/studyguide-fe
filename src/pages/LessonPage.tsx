import React, { useState } from 'react'
import ScreenWrapper from '../components/common/ScreenWrapper'
import ProgressBar from '../components/lessons/ProgressBar'
import CustomButton from '../components/common/CustomButton';
import { CrossIcon, HeartRedIcon } from '../assets/icons/icons';
import Text from '../components/common/Text';
import CloseLessonPopUpModal from '../components/modals/CloseLessonPopUpModal';
import { useNavigate } from 'react-router-dom';
import SelectOptionsMode from '../components/lessons/Modes/SelectOptionsMode';

const LessonPage:React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [totalCorrectGuessed, setTotalCorrectGuessed] = useState<number>(0);
    const [totalHearts, setTotalHearts] = useState<number>(5);
    const navigate = useNavigate();
    const [isCloseLessonModalOpen, setIsCloseLessonModalOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const correctOption = 'option 1'

    const handleCloseLesson = () => {
        navigate('/lessons');
    }

    const setCloseModalVisibility = () => {
        setIsCloseLessonModalOpen(prev => !prev);
    }

    const handleCheckClick = () => {
        if(currentStep === 10) {
            console.log(totalCorrectGuessed);
            console.log('End Game');
        }
        if(selectedOption === correctOption) {
            setTotalCorrectGuessed(prev => prev+1);
        } else {
            setTotalHearts(prev => prev-1);
        }
        setSelectedOption('');
        setCurrentStep(prev => Math.min(10,prev+1));
    }

    return (
        <ScreenWrapper className='pb-0 px-0'>
            <div className='flex flex-col justify-between w-full'>
                <div className='flex flex-col items-center'>
                    <div className='flex gap-8 items-center'>
                        <div className='text-tertiary-text cursor-pointer' onClick={setCloseModalVisibility}>
                            <CrossIcon />
                        </div>
                        <ProgressBar value={currentStep} max={10} />
                        <div className='flex items-center gap-2'>
                            <HeartRedIcon />
                            <Text text={totalHearts.toString()} color='red'/>
                        </div>
                    </div>
                </div>
                <SelectOptionsMode 
                    selectedOption={selectedOption} 
                    setSelectedOption={setSelectedOption} 
                    question={'Question?'}
                    option1={'option 1'}
                    option2={'option 2'}
                    option3={'option 3'}
                    option4={'option 4'}
                />
                <div className='w-[100%] border-primary-border border-t-2'>
                    <div className='flex w-[100%] md:w-[80%] justify-between'>
                        <div />
                        <CustomButton 
                            text={currentStep === 10 ? 'CONTINNUE' : 'CHECK'} 
                            isClickable={selectedOption !== ''} 
                            onClick={handleCheckClick}
                            color='accent-green'
                        />
                    </div>
                </div>
            </div>
            <CloseLessonPopUpModal isModalOpen={isCloseLessonModalOpen} setIsModalOpen={setCloseModalVisibility} closeLessonAction={handleCloseLesson}/>
        </ScreenWrapper>
    )
}

export default LessonPage