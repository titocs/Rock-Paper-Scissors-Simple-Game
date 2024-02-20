import { useEffect, useState } from 'react';
import PentagonBackground from '../../assets/images/bg-pentagon.svg';
import buttonData from '../../utils/ButtonData';
import { Bounce, Fade } from 'react-reveal';
import statusData from '../../utils/StatusData';
import Lizard from './items/Lizard';
import Paper from './items/Paper';
import Rock from './items/Rock';
import Scissor from './items/Scissor';
import Spock from './items/Spock';
import PropTypes from 'prop-types';

const Index = ({ dataPick, setDataPick, score, setScore }) => {
  const [theHouse, setTheHouse] = useState(false);
  const [loadingTime, setLoadingTime] = useState(false);
  const [computerOption, setComputerOption] = useState('');
  const [winner, setWinner] = useState('');

  const computerPick = ['lizard', 'paper', 'rock', 'scissors', 'spock'];
  function shufflecomputerPick(computerPick) {
    for (let i = computerPick.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [computerPick[i], computerPick[j]] = [computerPick[j], computerPick[i]];
      setComputerOption(computerPick[0]);
    }
  }
  
  useEffect(() => {
    let timeoutId;
    if (dataPick) {
      timeoutId = setTimeout(() => {
        setLoadingTime(true);
        setTheHouse(true);
        shufflecomputerPick(computerPick);
      }, 4500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dataPick]);

  useEffect(() => {
    if (theHouse) {
      const result = handleResult();
      if (result === 'YOU WIN') {
        setScore(score + 1);
      } else if (result === 'YOU LOSE') {
        setScore(score - 1);
      }
    }
  }, [theHouse]);

  const handleResult = () => {
    const checkWinner = statusData.filter((st) => st.home === dataPick && st.house === computerOption);
    if(checkWinner.length > 0){
      setWinner(checkWinner[0].home);
      return 'YOU WIN';
    }
    else {
      if(dataPick === computerOption){
        return 'DRAW';
      }
      setWinner(computerOption);
      return 'YOU LOSE';
    }
  };

  const resetGame = () => {
    setDataPick('');
    setTheHouse(false);
    setComputerOption('');
    setLoadingTime(false);
    setWinner('');
  };

  return (
    <>
      {
        !dataPick && (
          <>
            <Fade left>
              <main className={`relative py-[2rem] bg-center bg-no-repeat bg-[length:200px_200px] md:bg-[length:250px_250px] lg:bg-[length:370px_370px] lg:py-12`}
                style={{ backgroundImage: `url(${PentagonBackground})` }}>
                  <div className='mx-auto relative w-[17rem] h-[21rem] lg:w-[32rem] lg:h-[32rem]'>
                    <Lizard setDataPick={setDataPick}></Lizard>
                    <Paper setDataPick={setDataPick}></Paper>
                    <Rock setDataPick={setDataPick}></Rock>
                    <Scissor setDataPick={setDataPick}></Scissor>
                    <Spock setDataPick={setDataPick}></Spock>
                  </div>
              </main>
            </Fade>
          </>
        )
      }

      {
        dataPick && (
          <div className='flex-col justify-center mx-6 gap-12'>
            <div className='flex justify-center items-center py-5 gap-8 lg:gap-16'>
              <Bounce left>
                <div className='flex gap-5 flex-col justify-center items-center lg:flex-col-reverse lg:gap-9'>
                  <div
                    className={`block w-[7.5rem] h-[7.5rem] rounded-full overflow-hidden p-3 lg:w-[17rem] lg:h-[17rem] lg:p-7 ${() =>handleResult() === 'YOU WIN' ? 'animate-pulse' : ''}`}
                    style={{ background: `linear-gradient(${buttonData.filter((btn) => btn.name === dataPick).map((el) => el.from)}, ${buttonData.filter((btn) => btn.name === dataPick).map((el) => el.to)})`}}>
                    <div className='bg-white w-full h-full rounded-full'>
                      { buttonData.filter((btn) => btn.name === dataPick).map((el) => {
                        return (
                          <span className='flex items-center justify-center h-full' key={el.icon}>
                            { el.icon }
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <h1 className='text-white tracking-widest text-sm font-semibold mt-auto lg:text-xl'>YOU PICKED</h1>
                </div>
              </Bounce>
              {
                loadingTime ? (
                  <div className='flex gap-5 flex-col justify-center items-center lg:flex-col-reverse lg:gap-9'>
                    <div
                      className={`block w-[7.5rem] h-[7.5rem] rounded-full overflow-hidden p-3 lg:w-[17rem] lg:h-[17rem] lg:p-7 ${() => handleResult() === 'YOU WIN' ? 'animate-pulse' : ''}`}
                      style={{ background: `linear-gradient(${buttonData.filter((btn) => btn.name === computerOption).map((el) => el.from)}, ${buttonData.filter((btn) => btn.name === computerOption).map((el) => el.to)})`}}>
                      <div className='bg-white w-full h-full rounded-full'>
                        { buttonData.filter((btn) => btn.name === computerOption).map((el) => {
                          return (<span className='flex items-center justify-center h-full' key={el.icon}>
                            { el.icon }
                          </span>);
                        })}
                      </div>
                    </div>
                    <h1 className='text-white text-center tracking-widest text-sm font-semibold mt-auto lg:text-xl'>THE HOUSE PICKED</h1>
                  </div>
                ) : (
                  // Kondisi lagi loading
                  <Bounce right>
                    <div className='flex gap-5 flex-col justify-between items-center lg:flex-col-reverse lg:gap-9'>
                      <div className='h-[7.5rem] w-[7.5rem] flex items-center bg-Dark-Text rounded-full p-3 lg:h-[15.7rem] lg:w-[15.7rem]'>
                        <div className='h-[2rem] w-[2rem] rounded-lg m-auto p-5 bg-transparent border-[5px] border-white animate-spin lg:p-10'></div>
                      </div>
                      <h1 className='text-white text-center tracking-widest text-sm font-semibold mt-auto lg:text-xl'>THE HOUSE PICKED</h1>
                    </div>
                  </Bounce>
                )
              }
            </div>
            {
              theHouse && (
                <>
                  <div className='mb-4 mt-auto'>
                    <h1 className='text-white pb-4 font-semibold text-[3.5rem] text-center'>
                      { () => handleResult() }
                    </h1>
                    <button className='block m-auto text-center bg-white px-12 py-3 font-semibold tracking-widest rounded-lg text-base lg:px-20 lg:py-4 lg:text-lg' onClick={() => resetGame()}>PLAY AGAIN</button>
                  </div>
                </>
              )
            }
          </div>
        )
      }
    </>
  );
};

Index.propTypes = {
  dataPick: PropTypes.string.isRequired,
  setDataPick: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired
};

export default Index;
