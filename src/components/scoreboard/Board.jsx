import PropTypes from 'prop-types';
import { Flip } from 'react-reveal';

const Board = ({ score }) => {
  return (
    <>
      <Flip right>
        <div className='bg-white rounded-md px-5 py-3 text-center lg:px-11 lg:py-5'>
          <h5 className='leading-[18px] text-xs tracking-widest font-semibold text-Score-Text lg:text-sm'>SCORE</h5>
          <h1 className='font-bold text-[2.5rem] leading-[40px] text-Dark-Text lg:text-[4.25rem] lg:leading-[68px]'>{ score }</h1>
        </div>
      </Flip>
    </>
  );
};

Board.propTypes = {
  score: PropTypes.number.isRequired
};

export default Board;