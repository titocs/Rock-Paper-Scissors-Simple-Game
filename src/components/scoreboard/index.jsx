import Board from './Board';
import PropTypes from 'prop-types';

const index = ({ score }) => {
  return (
    <>
      <div className='flex items-center justify-between p-3 py-3 bg-tansparent border-[4px] rounded-lg border-Header-Outline mx-6 my-4 md:mx-[7.5rem] md:mt-7 lg:mx-[12rem] xl:mx-[22.2rem]'>
        <ul className='text-white leading-[10px] font-semibold text-xs pl-3 md:text-base md:leading-[14px] lg:text-xl lg:leading-[18px] xl:text-2xl xl:leading-[23px]'>
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
          <li>LIZZARD</li>
          <li>SPOCK</li>
        </ul>
        <Board score={score} />
      </div>
    </>
  );
};

index.propTypes = {
  score: PropTypes.number.isRequired
};

export default index;