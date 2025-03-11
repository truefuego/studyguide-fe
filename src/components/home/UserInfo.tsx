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
                <p className={`${clsx(color)} text-xl`}>{val}</p>
            </div>
        );
    }

  return (
    <div className='min-w-[320px] lg:w-[30vw] xl:w-[40vw] max-w-[576px] pt-4'>
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
        <div className='flex gap-4 md:gap-6 lg-gap-8 xl:gap-12'>
            <div className='m-4'>
                <JapanFlagIcon />
            </div>
            {renderUserIconInfo(FireIcon,5,'text-orange')}
            {renderUserIconInfo(SearchIcon,463,'text-blue')}
            {renderUserIconInfo(HeartRedIcon,4,'text-red')}
        </div>
    </div>
  )
}

export default UserInfo