import { Modal } from 'flowbite-react';
import RulesImage from '../../assets/images/image-rules-bonus.svg';
import CloseButton from '../../assets/images/icon-close.svg';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const RulesModal = ({openModal, setOpenModal}) => {
  return (
    <>
      <Fade>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <div className='pt-6 pb-3 px-8 flex items-center justify-center lg:justify-between'>
            <h1 className='text-center text-3xl font-bold'>RULES</h1>
            <button className='hidden lg:block' onClick={() => setOpenModal(false)}>
              <img src={CloseButton} alt="" />
            </button>
          </div>
          <Modal.Body>
            <div className='mb-8'>
              <img className='m-auto' src={RulesImage} alt="" />
            </div>
          </Modal.Body>
          <Modal.Footer className='lg:hidden'>
            <button className='block m-auto' onClick={() => setOpenModal(false)}>
              <img src={CloseButton} alt="" />
            </button>
          </Modal.Footer>
        </Modal>
      </Fade>
    </>
  );
};

RulesModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired
};

export default RulesModal;
