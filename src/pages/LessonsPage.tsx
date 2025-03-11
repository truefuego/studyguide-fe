import React from 'react'
import Text from '../components/common/Text'
import ScreenWrapper from '../components/common/ScreenWrapper'
import LessonsButton from '../components/lessons/LessonsButton'
import { dummyBasicsData, dummyLessonTags, dummyPracticeTags } from '../constants/dummyConstants'

const LessonsPage:React.FC = () => {
  return (
    <ScreenWrapper>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-6'>
          <Text text='Grammar' className='text-2xl'/>
          <div className='grid grid-cols-2 gap-8 w-fit'>
            {dummyLessonTags.map((item, index) => <LessonsButton key={index} tag={item.tag} complete={item.complete} total={item.total}/>)}
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <Text text='Practice' className='text-2xl'/>
          <div className='grid grid-cols-2 gap-8 w-fit'>
            {dummyPracticeTags.map((item, index) => <LessonsButton key={index} tag={item.tag} complete={item.complete} total={item.total}/>)}
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <Text text='Basics' className='text-2xl'/>
          <div className='grid grid-cols-2 gap-8 w-fit'>
            {dummyBasicsData.map((item, index) => <LessonsButton key={index} tag={item.tag} complete={item.complete} total={item.total}/>)}
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default LessonsPage