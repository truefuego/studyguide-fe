import React from 'react'
import Text from '../../common/Text'
import { sidePanelItems } from '../../../constants/constants'
import SidePanelButton from './SidePanelButton'

const SidePanel:React.FC = () => {
  return (
    <div className='flex flex-col bg-side-panel-bg w-56 h-screen justify-between border-r-2 border-primary-border'>
      <div>
        <Text text='STUDY GUIDE' className='text-2xl text-center border-b-2 p-4 border-primary-border'/>
        <div className='flex flex-col gap-5 m-4 mt-12'>
          {sidePanelItems.map((item, index) => <SidePanelButton key={index} text={item.text} Icon={item.Icon}/>)}
        </div>
      </div>
      <div className='p-4'>
        <div>
          <p className='text-accent-red text-xl'>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SidePanel