import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import job from '../../../../utils/json/ServerJobs.json'
import { ITimelineProps } from './type'

const Timeline = () => {
  return (<>
    {job.map((data: ITimelineProps) => (
      <div className="relative flex justify-between" key={data.id}>
        <div className="hidden py-3 md:block max-w-[160px] text-center flex-1 mr-15 mt-10 ">
          <h2 className="text-15 font-semibold text-gray-900">{data.company}</h2>
        </div>
        <div className="flex flex-col items-center w-10 px-15 mr-26 md:w-24">
          <div>
            <div className="flex items-center justify-center w-45 h-45 border border-gray-500 rounded-full">
              <FaBriefcase />
            </div>
          </div>
          <div className="w-[1px] h-full bg-gray-300"></div>
        </div>
        <div className="relative flex-1 mb-26 rounded shadow lg:mb-55 p-22">
          <div className="relative z-20">
            <div className="text-13 capitalize font-serif font-medium">{data.duration}
              <span className='text-13 font-serif capitalize  md:hidden font-medium ml-6'>| {data.company}</span>
            </div>
            <h3 className="text-22  sm:text-26 mb-13">{data.jobTitle}</h3>
            {data.responsibilities.map((data) => (
              <ul key={data} className='list-disc ml-18 mb-10'>
                <li className='text-15 sm:text-18 leading-paragraph'>{data}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    ))}
  </>
  )
}

export default Timeline