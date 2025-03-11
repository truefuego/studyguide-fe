import React from 'react'
import ScreenWrapper from '../components/common/ScreenWrapper'
import UserAvatar from '../components/home/UserAvatar'
import UserInfo from '../components/home/UserInfo'
import RecentLessons from '../components/home/RecentLessons'
import UsageGraph from '../components/home/UsageGraph'

const HomePage:React.FC = () => {
  return (
    <ScreenWrapper>
      <div className=' w-fit'>
        <div className='flex lg:gap-20 gap-12 flex-col lg:flex-row'>
          <div>
            <UserAvatar />
            <UserInfo />
          </div>
          <RecentLessons />
        </div>
        <UsageGraph />
      </div>
    </ScreenWrapper>
  )
}

export default HomePage