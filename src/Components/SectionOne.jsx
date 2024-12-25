import React, { useState } from 'react'
import codeAnt from "../assets/codeanticon.png"
import largerloco from "../assets/largerlogo.png"
import group from "../assets/group.png"
import github from "../assets/github.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import icon5 from "../assets/icon5.png"
import arrow from "../assets/arrow.png"
import bigicon from "../assets/bigicon.png"



const SectionOne = () => {
    const [value, setValue] = useState(false)
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className='left basis-[50%] bg-[#FFFFFF] flex justify-center items-center w-full h-full '>
                <div className='hidden sm:block'>
                    <div className='w-[447px] h-[170px] rounded-[24px] shadow-custom  py-[10px] mb-[250px] '>
                        <div className='flex justify-start gap-[8px] px-[14px] py-[10px]'>
                            <img className='w-[28px] h-[31px]' src={codeAnt} alt="" />
                            <p className='text-[18px] font-[700] text-[#081735]'>AI to Detect & Autofix Bad Code</p>
                        </div>
                        <p className='w-[447px] h-[1px] bg-[#E6E8F0] mr-[15px]'></p>
                        <div className='w-full flex justify-around items-center pt-[14px]'>
                            <div className='flex flex-col items-center gap-[3px]'>
                                <p className='text-[18px] text-[#081735] font-[700]'>30+</p>
                                <p className='text-[14px] text-[#171717] font-[400]'>Language Support</p>
                            </div>
                            <div className='flex flex-col items-center gap-[3px]'>
                                <p className='text-[18px] text-[#081735] font-[700]'>10K+</p>
                                <p className='text-[14px] text-[#171717] font-[400]'>Developers</p>
                            </div>
                            <div className='flex flex-col items-center gap-[3px]'>
                                <p className='text-[18px] text-[#081735] font-[700]'>100k+</p>
                                <p className='text-[14px] text-[#171717] font-[400]'>Hours Saved</p>
                            </div>
                        </div>
                        <div className='w-[270px] h-[164px] bg-[#FFFFFF] rounded-[24px] shadow-custom px-[16px] py-[10px] ml-[190px] mt-[20px]'>
                            <div className='flex justify-between items-center px-[5px] py-[6px]'>
                                <img className='w-[56px] h-[56px]' src={group} alt="" />
                                <div className='flex flex-col'>
                                    <div className='flex gap-[2px]'>
                                        <img className='w-[24px] h-[24px]' src={arrow} alt="" />
                                        <p className='text-[#0049C6] text-[14px] font-[700]'>14%</p>
                                    </div>
                                    <p className='text-[#171717] text-[12px] font-[400]'>This week</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-start items-start px-[16px] '>
                                <p className='text-[#171717] text-[14px] font-[400]'>Issues Fixed</p>
                                <p className='text-[#081735] text-[32px] font-[700]'>500K+</p>
                            </div>
                            <img className='w-[284px] h-[319px] ml-[-300px] mt-[-80px]' src={largerloco} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:basis-[50%] w-full sm:h-full flex flex-col justify-center items-center gap-[12px] sm:bg-[#FAFAFA]'>
                <div className='w-[572px] h-[502px] bg-[#FFFFFF] border-[1px] border-[#E9EAEB] rounded-[12px] px-[24px] py-[36px] gap-[14px] flex flex-col justify-start items-center'>
                    <div className='flex items-center'>
                        <img className='w-[35px] h-[40px]' src={bigicon} alt="" />
                        <p className='text-[30px] font-[400] text-[#181D27]'>CodeAnt AI</p>
                    </div>
                    <p className='text-[#181D27] text-[24px] sm:text-[32px] font-[600]'>Welcome to CodeAnt AI</p>
                    <div className='flex items-center w-full gap-[4px]'>
                        <button className={`w-full text-[20x] font-[600]   ${value ? "bg-[#FAFAFA] text-[#171717] border" : "bg-[#1570EF] text-[#FFFFFF]  "} py-[12px] rounded-[10px]  `} onClick={() => { setValue(!value) }}>SAAS</button>
                        <button className={`w-full  py-[12px] text-[20x] font-[600] ${value ? 'bg-[#1570EF] text-[#FFFFFF]' : 'bg-[#FAFAFA]'}  border-[1px] border-[#E9EAEB] rounded-[8px] shadow-custom `} onClick={() => { setValue(!value) }}>Self Hosted</button>
                    </div>
                    <p className='w-full h-[1px] bg-[#D5D7DA] mt-[10px]'></p>
                    <div className='w-full flex flex-col justify-center items-center px-[24px] gap-[8px]'>
                        <div className='w-full rounded-[8px] flex justify-center items-start gap-[10px] px-[17px] py-[10px] border-[1px] border-[#D8DAE5]'>
                            <img className='w-[25px] h-[25px]' src={value ? icon4 : github} alt="" />
                            <p className='text-[16px] text-[#171717] font-[600]'>{value ? 'Sign in with Github' : 'Self Hosted GitLab'}</p>
                        </div>
                        <div className='w-full rounded-[8px] flex justify-center items-start gap-[10px] px-[17px] py-[10px] border-[1px] border-[#D8DAE5]'>
                            <img className='w-[25px] h-[25px]' src={value ? icon5 : icon2} alt="" />
                            <p className='text-[16px] text-[#171717] font-[600]'>{value ? 'Sign in with SSO' : 'Sign in with Bitbucket'}</p>
                        </div>
                        <div className={`w-full rounded-[8px] flex justify-center items-start gap-[10px] px-[17px] py-[10px] border-[1px] border-[#D8DAE5] ${value ? "hidden" : "block"}`}>
                            <img className='w-[25px] h-[25px]' src={icon3} alt="" />
                            <p className='text-[16px] text-[#171717] font-[600]'>Sign in with Azure Devops</p>
                        </div>
                        <div className={`w-full rounded-[8px] flex justify-center items-start gap-[10px] px-[17px] py-[10px] border-[1px] border-[#D8DAE5] ${value ? "hidden" : "block"} `}>
                            <img className='w-[25px] h-[25px]' src={icon4} alt="" />
                            <p className='text-[16px] text-[#171717] font-[600]'>Sign in with GitLab</p>
                        </div>
                    </div>
                </div>

                <div className='w-[572px] bg-[#FFFFFF]  flex justify-center items-center '>
                    <p className='text-[#181D27] text-[14px] font-[400]'>By signing up you agree to the <span className='text-[#181D27] text-[16px] font-[700]'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}
export default SectionOne