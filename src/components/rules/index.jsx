import RulesModal from './Modal';
import { useState } from 'react';

const index = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <RulesModal openModal={openModal} setOpenModal={setOpenModal}></RulesModal>
      <button className='block mx-auto mt-auto py-6 rounded-md lg:text-xl lg:mr-14 lg:ml-auto' onClick={() => setOpenModal(!openModal)}>
        <div className='px-8 py-1 rounded-lg border-Header-Outline text-center text-white border tracking-widest lg:px-10 lg:py-2'>RULES</div>
      </button>
    </>
  );
};

export default index;