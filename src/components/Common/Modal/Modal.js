import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay } from "./Modal.styles";




const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const closeModalByEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeModalByEsc);
  
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [onClose]);
  
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <Modal>{ children}</Modal>
    </Overlay>,
    modalRoot
  );
};
export default Modal;
