import React from 'react'
import {BiTimeFive} from 'react-icons/bi'


const Data = [
  {
    id:1,
    title:'Web Developer',
    time: 'Now',
    location:'Canada',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, eius?',
    company: 'Novac Linus Co.'
  },

  {
    id:2,
    title:'Software Eng',
    time: 'Now',
    location:'Brazil',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, eius?',
    company: 'ABnB Limited Co.'
  },

  {
    id:3,
    title:'UI/UX Designer',
    time: 'Now',
    location:'Nigeria',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, eius?',
    company: 'Nhub Foundation.'
  },

  {
    id:4,
    title:'FullStack Developer',
    time: 'Now',
    location:'United States',
    desc:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, eius?',
    company: 'Amica Co..'
  },
]

const JobDiv = () => {
  return (
    <div>
      <div className="job-container flex gap-10 justify-center flex-wrap items-center py-10">
       {
        Data.map(({id,title,time,location,desc,company}) => {
          return(
            <div key={id} className="group group/item singleJob p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white '>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive />{time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {desc}
            </p>
  
            <div className="company flex items-center gap-2">
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white' >Apply Now</button>
          </div>
          )
        })
       }
      </div>
    </div>
  )
}

export default JobDiv