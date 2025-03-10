import React from 'react'
import Text from '../common/Text'
import { userLanguageFlags } from '../../constants/constants'
import { FireIcon, HeartRedIcon, JapanFlagIcon, SearchIcon } from '../../assets/icons/icons'
import clsx from 'clsx'

const UserInfo:React.FC = () => {
    const userData = {
        userName: 'Ankit Sharma',
        userTag: 'truefuego',
        joiningDate: 'April 2024',
        streak: 5,
        hintBalance: 463,
        hearts: 4,
    }

    const renderUserIconInfo = (Icon: string, val: number, color: string) => {
        return (
            <div className='flex items-center gap-2'>
                <Icon />
                <p className={`text-${clsx(color)} text-xl`}>{val}</p>
            </div>
        );
    }

  return (
    <div className='md:w-[576px] pt-4'>
        <div className='flex justify-between'>
            <div>
                <Text text={userData.userName} className='text-2xl'/>
                <Text text={`@${userData.userTag}`} className='text-tertiary-text'/>
                <Text text={`Joined ${userData.joiningDate}`} className='text-tertiary-text'/>
            </div>
            <div className='flex gap-2'>
                {userLanguageFlags.map((Item, index) => <div key={index} className='cursor-pointer'><Item /></div>)}
            </div>
        </div>
        <div className='flex gap-12'>
            <div className='m-4'>
                <JapanFlagIcon />
            </div>
            {renderUserIconInfo(FireIcon,5,'orange')}
            {renderUserIconInfo(SearchIcon,463,'blue')}
            {renderUserIconInfo(HeartRedIcon,4,'red')}
        </div>
    </div>
  )
}

export default UserInfo