import React, { useEffect, useState } from 'react'
import { Avatar, EditIcon } from '../../assets/icons/icons';
import { clockPreferences } from '../../constants/constants';

const UserAvatar:React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString('en-IN', clockPreferences));
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleString('en-IN', clockPreferences));
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleEditAvatar = () => {
        console.log('Edit');
    }
  
  return (
    <div className='relative bg-tertiary-text h-[256px] md:w-[576px] shadow-md rounded-2xl shadow-black flex justify-center items-end'>
        <div className='translate-y-[1px]'>
            <Avatar />
        </div>
        <div className='absolute flex flex-col right-0 h-full justify-between items-end'>
            <div className='border-3 border-primary-border rounded-xl p-2 shadow-lg m-2 h-fit w-fit cursor-pointer' onClick={handleEditAvatar}>
                <EditIcon />
            </div>
            <div className='m-4 -mb-1 cursor-default'>{currentTime.replace(', ', ' - ')}</div>
        </div>
    </div>
  )
}

export default UserAvatar;
