import React from 'react'
import Text from '../common/Text';
import { dummyGraphUsageData } from '../../constants/dummyConstants';
import UsageGraphItem from './UsageGraphItem';

const UsageGraph:React.FC = () => {
  return (
    <div className='my-8 bg-graph-bg border-2 w-fit border-graph-border rounded-2xl'>
        <div className='flex'>
            <div className='flex flex-col m-4 mt-8 mr-2 gap-2 self-center items-end'>
                <Text text='Mon' className='text-xs' />
                <Text text='Wed' className='text-xs' />
                <Text text='Fri' className='text-xs' />
            </div>
            <div className='mt-6 mb-2 mr-8 grid grid-flow-col grid-rows-7 gap-1'>
                {dummyGraphUsageData.map(item => <UsageGraphItem key={item.date} count={item.count}/>)}
            </div>
        </div>
        <div className='flex gap-4 place-self-end items-center mb-2 mr-8'>
            <Text text='Less' className='text-sm text-tertiary-text'/>
            <div className='flex gap-1'>
                <UsageGraphItem count={0}/>
                <UsageGraphItem count={1}/>
                <UsageGraphItem count={3}/>
                <UsageGraphItem count={5}/>
                <UsageGraphItem count={7}/>
            </div>
            <Text text='More' className='text-sm text-tertiary-text'/>
        </div>
    </div>
  )
}

export default UsageGraph;
