import React from 'react'
import { ArrowIcon } from '../../assets/icons/icons'
import Text from '../common/Text'
import RecentLessonsItem from './RecentLessonsItem'
import { dummyRecentLessonsData } from '../../constants/dummyConstants'

const RecentLessons:React.FC = () => {
  return (
    <div className='bg-card-bg min-w-[320px] w-[40vw] max-w-[370px] h-[420px] rounded-2xl border-3 border-card-border'>
        <div className='text-secondary-text flex justify-between items-center p-3 px-4 border-b-3 border-card-border cursor-default'>
            <Text text='Recent Lessons' className='text-secondary-text text-xl'/>
            <ArrowIcon />
        </div>
        {dummyRecentLessonsData.map((item, index) => <RecentLessonsItem key={index} title={item.title} score={item.score} date={item.date} time={item.time} duration={item.duration} points={item.points}/>)}
    </div>
  )
}

export default RecentLessons