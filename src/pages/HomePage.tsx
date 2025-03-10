import React from 'react'
import ScreenWrapper from '../components/common/ScreenWrapper'
import UserAvatar from '../components/home/UserAvatar'
import UserInfo from '../components/home/UserInfo'

const HomePage:React.FC = () => {
  return (
    <ScreenWrapper>
      <UserAvatar />
      <UserInfo />
    </ScreenWrapper>
  )
}

export default HomePage