import { useContext } from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from '../context/ThemeContext';
import './Modal.css';

const Modal = ({children, isOpen, closeModal}) => {
  const {theme} = useContext(ThemeContext);
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  }
  return ReactDOM.createPortal(
    <section className={`section-container modal ${isOpen && 'active'} ${theme}`} onClick={closeModal} >
      <div className="modal-container" onClick={handleModalContainerClick} >
        <div className="input modal-close"><button onClick={closeModal}>X</button></div>
        {children}
      </div>
    </section>
    ,
    document.getElementById('modal')
  );
}
 
export default Modal;