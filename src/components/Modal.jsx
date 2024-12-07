import { SquareX } from 'lucide-react';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function Modal({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog ref={ref} onCancel={closeModal}>
      {children}
      <button onClick={closeModal}>
        <SquareX size={29} />
      </button>
    </dialog>
  );
}

Modal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
