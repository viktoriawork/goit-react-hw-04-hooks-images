import { useEffect, Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { ModalStyled } from "./ModalStyled";

const modalRoot = document.querySelector("#modal-root");
// const modalScroll = (overflowValue, positionValue) => {
//   const body = document.querySelector("body");
//   body.style.overflow = overflowValue;
//   body.style.position = positionValue;
// };

const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // modalScroll("hidden", "fixed");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // modalScroll("auto", "relative");
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onCloseModal();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <ModalStyled onClick={handleBackdropClick}>
      <div className="Modal">{children}</div>
    </ModalStyled>,
    modalRoot
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;

// const modalRoot = document.querySelector("#modal-root");

// class Modal extends Component {
//   state = {  }

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//     const body = document.querySelector("body");
//     body.style.overflow = "hidden";
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//     const body = document.querySelector("body");
//     body.style.overflow = "auto";
//   }

//   handleKeyDown = (e) => {
//     if(e.code === 'Escape') {
//       this.props.onCloseModal()
//     }
//   }

//   handleBackdropClick = (e) => {
//     if(e.currentTarget === e.target) {
//       this.props.onCloseModal()
//     }
//   }

//   render() {
//     return createPortal (
//       <ModalStyled onClick = {this.handleBackdropClick}>
//         <div className="Modal">
//           {this.props.children}
//         </div>
//       </ModalStyled>, modalRoot
//     );
//   }
// }

// modalRoot.propTypes = {
//   onCloseModal: PropTypes.func,
//   children: PropTypes.node,
// };

// export default Modal;
