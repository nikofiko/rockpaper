import React from 'react'
import paper from '/assets/icon-paper.svg'
import scissors from '/assets/icon-scissors.svg'
import rock from '/assets/icon-rock.svg'
import triangle from '/assets/bg-triangle.svg'

const Game = () => {
  return (
    <div className='bg-no-repeat bg-center mt-[30px] sm:mt-[67px]'
    style={{ backgroundImage: 'url(./assets/bg-triangle.svg)'}}>
        <div className='inline-flex justify-center w-full'>
            <div className='flex gap-4 sm:gap-20'>
                    <div className='bg-blue500 inline-flex p-8 rounded-full shadow-customblue scale-60 sm:scale-100 cursor-pointer'>
                        <div className='bg-white px-14 py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                            <div className=''>
                                <img width={67} src={paper} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='bg-gold500 inline-flex p-8 rounded-full shadow-customyellow scale-60 sm:scale-100 cursor-pointer'>
                        <div className='bg-white px-14 py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                            <div className=''>
                                <img width={67} src={scissors} alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
      <div className='inline-flex justify-center w-full'>
        <div className='bg-red600 inline-flex p-8 rounded-full shadow-customred scale-60 sm:scale-100 cursor-pointer'>
                <div className='bg-white px-13 py-[53px] rounded-full inline-flex justify-center shadow-custom'>
                    <div className=''>
                        <img width={67} src={rock} alt="" />
                    </div>
                </div>
        </div>
      </div>
      <div className='absolute bottom-8 right-8'>
        <button className='tracking-[2.5px] text-white px-[38px] py-[10.5px] border rounded-[10px] cursor-pointer'>RULES</button>
      </div>
    </div>
  )
}

export default Game
