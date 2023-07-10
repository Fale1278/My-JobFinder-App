import React from 'react'
import blue from '../../Assets/blue.jpg'



const ValueDiv = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-400px block'>The vvalue that holds us true and to account</h1>


      <div className=" grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#e5e3f5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={blue} alt="" />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautifully simple are at the heart of what we do.</p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#efd3e8] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={blue} alt="" />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautifully simple are at the heart of what we do.</p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#c9bda7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={blue} alt="" />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>Things being made beautifully simple are at the heart of what we do.</p>
        </div>

        
      </div>
    </div>
  )
}

export default ValueDiv