import React from 'react'
import Text from '../common/Text';
import { IRecentLessonsItemProps } from './type';

const RecentLessonsItem:React.FC<IRecentLessonsItemProps> = ({ title, score, time, date, duration, points }) => {
  return (
    <div className='flex items-center justify-between px-4 p-1 border-b-3 border-card-border'>
        <div>
            <Text text={title} className='text-lg'/>
            <Text text={date + ' - ' + time} className='text-tertiary-text text-sm'/>
        </div>
        <div className='flex flex-col items-end'>
            <Text text={score + ' / 10'} className='text-lg'/>
            <div className='flex gap-8'>
                <Text text={duration} className='text-sm text-tertiary-text'/>
                <Text text={'+' + points.toString()} className='text-sm' color='accent-green'/>
            </div>
        </div>
    </div>
  )
}

export default RecentLessonsItem;
