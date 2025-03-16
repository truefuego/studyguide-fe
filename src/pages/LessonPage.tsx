import React, { useCallback, useEffect, useState } from 'react'
import ScreenWrapper from '../components/common/ScreenWrapper'
import ProgressBar from '../components/lessons/ProgressBar'
import CustomButton from '../components/common/CustomButton';
import { CrossIcon, HeartRedIcon } from '../assets/icons/icons';
import Text from '../components/common/Text';
import CloseLessonPopUpModal from '../components/modals/CloseLessonPopUpModal';
import { useNavigate } from 'react-router-dom';
import { dummyLessonData } from '../constants/dummyConstants';
import LessonSummary from '../components/lessons/LessonSummary';
import { ILessonModeProps } from '../components/lessons/Modes/type';

const LessonPage:React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [totalCorrectGuessed, setTotalCorrectGuessed] = useState<number>(0);
    const [totalHearts, setTotalHearts] = useState<number>(5);
    const navigate = useNavigate();
    const [isCloseLessonModalOpen, setIsCloseLessonModalOpen] = useState<boolean>(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const currentLesson = dummyLessonData[currentStep];
    const correctOption = currentLesson?.props.correct;

    const handleCloseLesson = () => {
        navigate('/lessons');
    }

    const setCloseModalVisibility = () => {
        setIsCloseLessonModalOpen(prev => !prev);
    }

    const handleCheckClick = useCallback(() => {
        if(selectedAnswer === '' && currentStep < 10) {
            return;
        }
        if(currentStep === 10) {
            console.log(totalCorrectGuessed);
            console.log('End Game');
            navigate('/lessons')
        }
        if(selectedAnswer === correctOption) {
            setTotalCorrectGuessed(prev => prev+1);
        } else {
            setTotalHearts(prev => prev-1);
        }
        setSelectedAnswer('');
        setCurrentStep(prev => Math.min(10,prev+1));
    }, [selectedAnswer, currentStep, correctOption, totalCorrectGuessed, navigate]);


    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                handleCheckClick();
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleCheckClick]);

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
                {currentStep < 10 && currentLesson?.LessonMode ? React.createElement(currentLesson.LessonMode as React.FC<ILessonModeProps>, {
                    selectedAnswer,
                    setSelectedAnswer,
                    ...currentLesson.props
                }) : <LessonSummary />}
                <div className='w-[100%] border-primary-border border-t-2'>
                    <div className='flex w-[100%] md:w-[80%] justify-between'>
                        <div />
                        <CustomButton 
                            text={currentStep === 10 ? 'CONTINNUE' : 'CHECK'} 
                            isClickable={selectedAnswer !== '' || currentStep === 10} 
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