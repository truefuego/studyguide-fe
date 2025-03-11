import React from 'react'
import ScreenWrapper from '../components/common/ScreenWrapper'
import UserAvatar from '../components/home/UserAvatar'
import UserInfo from '../components/home/UserInfo'
import RecentLessons from '../components/home/RecentLessons'
import UsageGraph from '../components/home/UsageGraph'
import Text from '../components/common/Text'
import PracticeButton from '../components/home/PracticeButton'

const HomePage:React.FC = () => {
  return (
    <ScreenWrapper>
      <div className='w-fit'>
        <div className='flex lg:gap-20 gap-12 flex-col lg:flex-row'>
          <div>
            <UserAvatar />
            <UserInfo />
          </div>
          <RecentLessons />
        </div>
        <UsageGraph />
        <div>
          <Text text='Practice' className='text-2xl mb-2' />
          <div className='flex gap-8'>
            <PracticeButton text='VERBS' link='lessons/verbs' />
            <PracticeButton text='VOCABULARY' link='lessons/vocabulary' />
            <PracticeButton text='SENTENCES' link='lessons/sentences' />
          </div>
        </div>
      </div>
    </ScreenWrapper>
  )
}

export default HomePage