import React, { useState } from 'react'
import codeAnt from "./assets/codeanticon.png"
import dropdown from "./assets/dropdownicon.png"
import one from "./assets/one.png"
import two from "./assets/two.png"
import three from "./assets/three.png"
import four from "./assets/four.png"
import five from "./assets/five.png"
import six from "./assets/six.png"
import seven from "./assets/seven.png"
import eight from "./assets/eight.png"
import nine from "./assets/nine.png"
import ten from "./assets/ten.png"
import eleven from "./assets/eleven.png"
import twel from "./assets/twel.png"
import thirteen from "./assets/thirteen.png"
import SectionOne from './Components/SectionOne'

const App = () => {
  const [value, setValue] = useState(false)
  const data = [
    {
      id: "1",
      img: two,
      title: "AI Code Review"
    },
    {
      id: "2",
      img: three,
      title: "Cloud Security"
    },
    {
      id: "3",
      img: four,
      title: "How to Use"
    },
    {
      id: "4",
      img: five,
      title: "Settings"
    }
  ]
  const datatwo = [
    {
      id: "1",
      img: six,
      title: "Support"
    },
    {
      id: "2",
      img: seven,
      title: "Logout"
    }
  ]
  const datathree = [
    {
      id: 1,
      title: "design-system",
      public: "Public",
      typeone: "React",
      db: "7320 KB",
      time: "Updated 1 day ago"
    },
    {
      id: 2,
      title: "codeant-ci-app",
      public: "Private",
      typeone: "Javascript",
      db: "4521 KB",
      time: "Updated 2 day ago"
    },
    {
      id: 3,
      title: "analytics-dashboard",
      public: "Private",
      typeone: "Python",
      db: "4521 KB",
      time: "Updated 5 day ago"
    },
    {
      id: 4,
      title: "mobile-app",
      public: "Public",
      typeone: "Swift",
      db: "3096 KB",
      time: "Updated 3 day ago"
    },
    {
      id: 5,
      title: "e-commerce-platform",
      public: "Private",
      typeone: "Java",
      db: "6210 KB",
      time: "Updated 6 day ago"
    },
    {
      id: 6,
      title: "blog-website",
      public: "Public",
      typeone: "HTML/CSS",
      db: "1876 KB",
      time: "Updated 4 day ago"
    },
    {
      id: 7,
      title: "social-network",
      public: "Private",
      typeone: "PHP",
      db: "5432 KB",
      time: "Updated 7 day ago"
    },
  ]
  return (
    <div>
      <div className='w-full h-[100%] flex  sm:bg-[#FAFAFA] '>
        <div className='sm:block hidden'>
          <div className=' left sm:pt-[24px]  px-[20px] h-full border border-[#E9EAEB] bg-[#FFFFFF] flex flex-col justify-between items-center'>
            <div className='leftone flex flex-col gap-[16px]'>
              <div className='flex flex-col justify-center items-start gap-[20px]'>
                <div className='flex gap-[11px] items-center'>
                  <img className='w-[28.5px] h-[32px]' src={codeAnt} alt="" />
                  <p className='sm:text-[24px] sm:font-[400]'>CodeAnt Ai</p>
                </div>
                <div className='flex justify-center items-center gap-[6px]  px-[12px] py-[8px]  h-[40px] border border-[#D5D7DA] rounded-[8px]'>
                  <p className='sm:text-[16px] font-[400]'>UtkarshDhairyaPanwar...</p>
                  <img className='w-[13.15px] h-[7.24px]' src={dropdown} alt="" />
                </div>
              </div>
              <div className='flex flex-col items-center gap-[10px] w-full'>
                <div className='bg-[#1570EF] w-full  py-[10px] flex px-[14px] items-center gap-[4px]  rounded-[8px]'>
                  <img className='w-[24px] h-[24px]' src={one} alt="" />
                  <p className='text-[16px] font-[600] text-[#FFFFFF]'>Repositories</p>
                </div>
                {
                  data.map((item, id) => (
                    <div key={id} className='flex w-full px-[14px] py-[10px] items-center gap-[4px] '>
                      <img className='w-[24px] h-[24px]' src={item.img} alt="" />
                      <p className='text-[16px] font-[600] text-[#414651]'>{item.title}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='lefttwo  w-full mb-[20px]'>
              {
                datatwo.map((item, id) => (
                  <div key={id} className='flex gap-[12px] justify-start px-[14px] py-[10px]  w-full'>
                    <img className='w-[24px] h-[24px]' src={item.img} alt="" />
                    <p className='text-[16px] font-[600] text-[#414651]'>{item.title}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='right p-[28px]  w-full sm:block hidden'>
          <div className='w-full rounded-[12px] border border-[#E9EAEB]   pt-[28px]  bg-[#FFFFFF] '>
            <div className='w-full flex justify-between items-center px-[24px]'>
              <div className='flex flex-col gap-[4px] items-start'>
                <p className='text-[#181D27] text-[24px] font-[600]'>Repositories</p>
                <p className='text-[#414651] text-[14px] font-[400]'>33 total repositories</p>
              </div>
              <div className='flex justify-center items-start gap-[8px]'>
                <div className='border flex justify-center gap-[4px] items-center border-[#D5D7DA] px-[14px] py-[10px] rounded-[8px]'>
                  <img className='w-[20px] h-[20px]' src={eight} alt="" />
                  <p className='text-[#414651] text-[14px] font-[400]'>Refresh All</p>
                </div>
                <div className='border flex justify-center gap-[4px] items-center bg-[#1570EF] px-[14px] py-[10px] rounded-[8px]'>
                  <img className='w-[20px] h-[20px]' src={nine} alt="" />
                  <p className='text-[#FFFFFF] text-[14px] font-[400]'>Add Repository</p>
                </div>
              </div>
            </div>
            <div className='px-[24px] mb-[16px]'>
              <div className='w-[369px] h-[44px] mt-[8px] rounded-[8px] flex  px-[14px] py-[10px] gap-[6px] items-center border border-[#D5D7DA]'>
                <img className='w-[20px] h-[20px]' src={ten} alt="" />
                <p className='text-[#414651] text-[16px] font-[400]'>Search Repositories</p>
              </div>
            </div>
            {
              datathree.map((item, id) => (
                <div key={id} className={`start px-[24px]  py-[24px] ${id == 1 ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} border-t-[1px] flex flex-col items-start gap-[12px]`}>
                  <div className='flex items-start gap-[8px]'>
                    <p className='text-[20px] text-[#181D27] font-[500] leading-[24px]'>{item.title}</p>
                    <p className='py-[2px] px-[10px] text-[#175CD3] bg-[#EFF8FF] border border-[#B2DDFF] rounded-full text-[16px]'>{item.public}</p>
                  </div>
                  <div className='flex items-center gap-[40px]'>
                    <div className='flex items-center gap-[6px]'>
                      <p className='text-[16px] font-[400] text-[#181D27]'>{item.typeone}</p>
                      <p className='w-[8px] h-[8px] bg-[#1570EF] rounded-full'></p>
                    </div>
                    <div className='flex items-center gap-[8px]'>
                      <img src={eleven} />
                      <p className='text-[16px] font-[400] text-[#181D27]'>{item.db}</p>
                    </div>
                    <p className='text-[16px] font-[400] text-[#181D27]'>{item.time}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='sm:hidden block w-full h-[100%] relative'>
          <div className='w-full h-[100%] flex  justify-between items-center '>
            <div className=' w-full p-[16px] border-[#E9EAEB] border-b-[1px] flex justify-between items-center'>
              <div className='flex items-center gap-[8px]'>
                <img src={codeAnt} className='w-[28.5px] h-[32px]' alt="" />
                <p className='text-[24px] font-[400] text-[#181D27]'>CodeAnt AI</p>
              </div>
              <img onClick={() => { setValue(!value) }} className='w-[24px] h-[24px]' src={value ? thirteen : twel} alt="" />
            </div>
          </div>
          <div className='w-full flex flex-col items-start px-[16px] py-[20px] gap-[16px]'>
            <p className='text-[#181D27] text-[24px] font-[600]'>Repositories</p>
            <p className='text-[#414651] text-[14px] font-[400]'>33 total repositories</p>
            <div className='flex justify-center items-start gap-[8px]'>
              <div className='border flex justify-center gap-[4px] items-center border-[#D5D7DA] px-[14px] py-[10px] rounded-[8px]'>
                <img className='w-[20px] h-[20px]' src={eight} alt="" />
                <p className='text-[#414651] text-[14px] font-[400]'>Refresh All</p>
              </div>
              <div className='border flex justify-center gap-[4px] items-center bg-[#1570EF] px-[14px] py-[10px] rounded-[8px]'>
                <img className='w-[20px] h-[20px]' src={nine} alt="" />
                <p className='text-[#FFFFFF] text-[14px] font-[400]'>Add Repository</p>
              </div>
            </div>
          </div>
          <div className='px-[16px] mb-[16px] w-full'>
            <div className='w-full h-[44px] mt-[8px] rounded-[8px] flex  px-[14px] py-[10px] gap-[6px] items-center border border-[#D5D7DA]'>
              <img className='w-[20px] h-[20px]' src={ten} alt="" />
              <p className='text-[#414651] text-[16px] font-[400]'>Search Repositories</p>
            </div>
          </div>
          {
            datathree.map((item, id) => (
              <div key={id} className={`start px-[24px]  py-[24px] ${id == 1 ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} border-t-[1px] flex flex-col items-start gap-[12px]`}>
                <div className='flex items-start gap-[8px]'>
                  <p className='text-[18px] text-[#181D27] font-[500] leading-[24px]  text-wrap'>{item.title}</p>
                  <p className='py-[2px] px-[10px] text-[#175CD3] bg-[#EFF8FF] border border-[#B2DDFF] rounded-full  text-wrap text-[14px]'>{item.public}</p>
                </div>
                <div className='flex items-center gap-[40px]'>
                  <div className='flex items-center gap-[6px]'>
                    <p className='text-[14px] font-[400] text-[#181D27] text-wrap'>{item.typeone}</p>
                    <p className='w-[8px] h-[8px] bg-[#1570EF] rounded-full'></p>
                  </div>
                  <div className='flex items-center gap-[8px]'>
                    <img src={eleven} />
                    <p className='text-[14px] font-[400] text-[#181D27]  text-wrap'>{item.db}</p>
                  </div>
                  <p className='text-[14px] font-[400] text-[#181D27] text-wrap'>{item.time}</p>
                </div>
              </div>
            ))
          }
          <div className={`${value ? 'w-full h-full absolute top-[70px] left-0 right-0 z-10 transition-all duration-[.5s]' : " hidden"}  `}>
            <div className='h-[466px] bg-[#FFFFFF] px-[16px] py-[20px] w-full flex flex-col justify-start items-start'>
              <div className='flex w-full  justify-center  items-center gap-[6px]  px-[12px] py-[8px]  h-[40px] border-[1px] border-[#D5D7DA] rounded-[8px]'>
                <p className='text-[16px] font-[400] text-[#181D27] w-full'>UtkarshDhairyaPanwar...</p>
                <img className='w-[13.15px] h-[7.24px]' src={dropdown} alt="" />
              </div>
              {
                data.map((item, id) => (
                  <div key={id} className='flex w-full px-[16px] py-[18px] items-center gap-[8px] '>
                    <img className='w-[24px] h-[24px]' src={item.img} alt="" />
                    <p className='text-[16px] font-[600] text-[#414651]'>{item.title}</p>
                  </div>
                ))
              }
              {
                datatwo.map((item, id) => (
                  <div key={id} className='flex gap-[12px] justify-start px-[14px] py-[10px]  w-full'>
                    <img className='w-[24px] h-[24px]' src={item.img} alt="" />
                    <p className='text-[16px] font-[600] text-[#414651]'>{item.title}</p>
                  </div>
                ))
              }
            </div>
            <div className='bg-[#6C6C6C4D] opacity-[30%] w-full h-[50vh]'>

            </div>
          </div>

        </div>
      </div >
      <SectionOne />
    </div>
  )
}

export default App
