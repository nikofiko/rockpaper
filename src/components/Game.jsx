import React, { useState } from 'react'
import paper from '/assets/icon-paper.svg'
import scissors from '/assets/icon-scissors.svg'
import rock from '/assets/icon-rock.svg'
import rules from '/assets/image-rules.svg'
import closeModal from '/assets/icon-close.svg'
import triangle from '/assets/bg-triangle.svg'

const Game = ({choice, setChoice}) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      {choice === 0 && 
        <div className='bg-no-repeat bg-center mt-[30px] sm:mt-[37px] bg-size-[240px_220px] sm:bg-size-[300px_260px]'>
            <div className='inline-flex justify-center w-full sm:relative'>
              <div className='absolute top-64 scale-90 sm:scale-100 sm:top-24'>
                  <img src={triangle} alt="" />
              </div>

              {modal && (
                  <div className='absolute sm:-top-20 bg-white z-40 p-8 rounded-xl h-screen sm:h-auto top-0 sm:block flex flex-col justify-center items-center'>
                    <div className='flex gap-8 sm:gap-0 items-center justify-between pb-12'>
                      <h3 className='text-[32px] text-navy900 font-bold'>RULES</h3>
                      <div onClick={() => setModal(!modal)} className='cursor-pointer'>
                        <img src={closeModal} alt="" />
                      </div>
                    </div>
                    <div className='px-4'>
                        <img src={rules} alt="" />
                    </div>
                  </div>
              )}
              
              {modal && (
                 <div 
                 className='fixed inset-0 bg-black/40 z-20'
                />
              )}
             

                <div className='flex gap-4 sm:gap-20'>
                        <div onClick={() => setChoice(1)} className='bg-blue500 inline-flex p-8 rounded-full shadow-customblue scale-60 sm:scale-100 cursor-pointer hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]'>
                            <div className='bg-white px-8 sm:px-14 py-[30px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                                <div className=''>
                                    <img width={67} src={paper} alt="" />
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setChoice(2)} className='bg-gold500 inline-flex p-8 rounded-full shadow-customyellow scale-60 sm:scale-100 cursor-pointer hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]'>
                            <div className='bg-white px-8 sm:px-14 py-[30px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                                <div className=''>
                                    <img width={67} src={scissors} alt="" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            
          <div className='inline-flex justify-center w-full'>
            <div onClick={() => setChoice(3)} className='bg-red600 inline-flex p-8 rounded-full shadow-customred scale-50 sm:scale-100 cursor-pointer hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]'>
                    <div className='bg-white px-13 py-[53px] rounded-full inline-flex justify-center shadow-custom'>
                        <div className=''>
                            <img width={67} src={rock} alt="" />
                        </div>
                    </div>
            </div>
          </div>
          <div className='absolute bottom-8 right-8'>
            <button onClick={() => setModal(!modal)} className='tracking-[2.5px] text-white px-[38px] py-[10.5px] border rounded-[10px] cursor-pointer hover:bg-white hover:text-[#1F3757] hover:border-[#1F3757] hover:font-semibold'>RULES</button>
          </div>
        </div>
      }
    </>
  )
}

export default Game