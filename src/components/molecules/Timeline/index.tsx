import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import jobs from '../../../../utils/json/jobs.json'

const Timeline = () => {
  return (
    <section className='grid md:grid-row-4 gap-26'>
      {jobs.map(data => (
        <div className="relative flex justify-between" key={data.id}>
          <div className="relative flex-1 mb-26 rounded shadow-gray-100 shadow-md p-38">
            <div className="relative z-20 ">
              <div className="text-13 capitalize font-serif font-medium text-gray-700">{data.duration}
                <span className='text-13 font-serif capitalize font-medium ml-6 text-gray-600'>| {data.company}</span>
              </div>
              <h3 className="text-22 sm:text-26 my-13">{data.jobTitle}</h3>
               <ul  className='list-disc ml-18 mb-10'>
                {data.responsibilities.map((data) => (
                  <li className='text-15 sm:text-18 font-serif leading-paragraph'key={data}>{data}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Timeline