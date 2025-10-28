import React, { useState, useEffect } from 'react';
import paper from '/assets/icon-paper.svg';
import scissors from '/assets/icon-scissors.svg';
import rock from '/assets/icon-rock.svg';
import rules from '/assets/image-rules.svg';

const Winner = ({ choice, setChoice, wynik, setWynik }) => {
  const [housePick, setHousePick] = useState(0);
  const [result, setResult] = useState('');

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function houseChoice() {
    return getRandomInt(3) + 1; 
  }

  function determineResult(player, house) {
    if (player === house) return 'DRAW';
    if (
      (player === 1 && house === 3) || 
      (player === 2 && house === 1) || 
      (player === 3 && house === 2) 
    ) {
      setWynik(wynik + 1)
      return 'YOU WIN';
    }
    return 'YOU LOSE';
  }

  useEffect(() => {
    if (choice > 0) {
      const houseTimer = setTimeout(() => {
        const house = houseChoice();
        setHousePick(house);
        setTimeout(() => {
          setResult(determineResult(choice, house));
        }, 1000);
      }, 2000);

      return () => {
        clearTimeout(houseTimer);
      };
    }
  }, [choice]);

  console.log(result)

  return (
    <>
      {choice > 0 && (
        <div className="inline-flex justify-center w-full">
          <div className="flex gap-4 sm:gap-20">
            {/* Wybór gracza */}
            <div className="flex items-center flex-col">
              <h3 className="text-[14px] sm:text-[24px] text-white tracking-[3px] font-bold pt-[60px] pb-[60px]">
                YOU PICKED
              </h3>
              {choice === 1 && (
                <div className={`bg-blue500 inline-flex p-8 rounded-full scale-60 sm:scale-100 ${result === 'YOU WIN' ? 'shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]' : 'shadow-customblue'}`}>
                  <div className='bg-white px-9 sm:px-14 py-[26px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                    <img width={67} src={paper} alt="Paper" />
                  </div>
                </div>
              )}
              {choice === 2 && (
                <div className={`bg-gold500 inline-flex p-8 rounded-full scale-60 sm:scale-100 ${result === "YOU WIN" ? 'shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]' : 'shadow-customyellow'}`}>
                  <div className='bg-white px-8 sm:px-14 py-[30px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                    <img width={67} src={scissors} alt="Scissors" />
                  </div>
                </div>
              )}
              {choice === 3 && (
                <div className={`bg-red600 inline-flex p-8 rounded-full scale-60 sm:scale-100 ${result === "YOU WIN" ? 'shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]' : 'shadow-customred'}`}>
                  <div className='bg-white px-9 sm:px-14 py-[35px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                    <img width={67} src={rock} alt="Rock" />
                  </div>
                </div>
              )}
            </div>

            {/* Wybór domu */}
            <div className="flex items-center flex-col">
              <h3 className="text-[14px] sm:text-[24px] text-white tracking-[3px] font-bold pt-[60px] pb-[60px]">
                HOUSE PICKED
              </h3>
              {housePick === 0 ? (
                <div className="m-10 sm:m-0 bg-black w-24 h-24 sm:w-56 sm:h-56 rounded-full opacity-30"></div>
              ) : (
                <>
                  {housePick === 1 && (
                    <div className={`bg-blue500 inline-flex p-8 rounded-full scale-60 sm:scale-100 ${result === 'YOU LOSE' ? 'shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]' : 'shadow-customblue'}`}>
                      <div className="bg-white px-8 sm:px-14 py-[26px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom">
                        <img width={67} src={paper} alt="Paper" />
                      </div>
                    </div>
                  )}
                  {housePick === 2 && (
                    <div className={`bg-gold500 inline-flex p-8 rounded-full scale-60 sm:scale-100 ${result === "YOU LOSE" ? 'shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]' : 'shadow-customyellow'}`}>
                      <div className="bg-white px-8 sm:px-14 py-[30px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom">
                        <img width={67} src={scissors} alt="Scissors" />
                      </div>
                    </div>
                  )}
                  {housePick === 3 && (
                    <div className={`bg-red600 inline-flex p-8 rounded-full scale-60 sm:scale-100 ${result === "YOU LOSE" ? 'shadow-[0_0_30px_10px_rgba(59,130,246,0.6)]' : 'shadow-customred'}`}>
                      <div className='bg-white px-9 sm:px-12 py-[35px] sm:py-[50px] rounded-full inline-flex justify-center shadow-custom'>
                        <img width={67} src={rock} alt="Rock" />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    {result && (
            <div className="flex flex-col items-center mt-8">
              <h2 className="text-[36px] text-white font-bold">{result}</h2>
              <button
                onClick={() => {
                  setChoice(0); 
                  setHousePick(0); 
                  setResult(''); 
                }}
                className="mt-4 tracking-[2.5px] text-white px-[38px] py-[10.5px] border rounded-[10px] cursor-pointer hover:bg-white hover:text-[#1F3757] hover:border-[#1F3757] hover:font-semibold"
              >
                PLAY AGAIN
              </button>
            </div>
    )}
    </>
  );
};

export default Winner;