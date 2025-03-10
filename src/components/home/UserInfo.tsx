import React from 'react'
import Text from '../common/Text'
import { userLanguageFlags } from '../../constants/constants'

const UserInfo:React.FC = () => {
    const userData = {
        userName: 'Ankit Sharma',
        userTag: 'truefuego',
        joiningDate: 'April 2024'
    }

  return (
    <div className='flex md:w-[576px] justify-between pt-4'>
        <div>
            <Text text={userData.userName} className='text-2xl'/>
            <Text text={`@${userData.userTag}`} className='text-tertiary-text'/>
            <Text text={`Joined ${userData.joiningDate}`} className='text-tertiary-text'/>
        </div>
        <div className='flex gap-2'>
            {userLanguageFlags.map((Item, index) => <div key={index} className='cursor-pointer'><Item /></div>)}
        </div>
    </div>
  )
}

export default UserInfo