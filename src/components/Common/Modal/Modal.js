import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalDiv } from "./Modal.styles";




const modalRoot = document.querySelector('#modal-root');
const Modal = ({ onClose, children, shouldDisplay }) => {
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
    if (shouldDisplay && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!shouldDisplay) {
    return null; // Return null if shouldDisplay is false
  }

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalDiv>{children}</ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
// const Modal = ({ onClose, children }) => {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     const closeModalByEsc = e => {
//       if (e.code === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', closeModalByEsc);
  
//     return () => {
//       document.body.style.overflow = 'auto';
//       document.removeEventListener('keydown', closeModalByEsc);
//     };
//   }, [onClose]);
  
//   const handleOverlayClick = e => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return createPortal(
//     <Overlay onClick={handleOverlayClick}>
//       <ModalDiv>{ children}</ModalDiv>
//     </Overlay>,
//     modalRoot
//   );
// };
// export default Modal;
