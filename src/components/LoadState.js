import { useState } from "react";
import LoadStateRow from "./LoadStateRow";
import Modal from "./Modal";

const initialModalIsOpen = false;

//input
// str: {
//   loadFromSaves:'',
//   infoNoDataSaved:'',
//   load:'',
//   delete:'',
// },
// setState: the state where to load
// savedStates: the state that contains the states saved
// setSavedStates: ||
// localStorageName: the name of the local storage place 
const LoadState = ({
  str,
  setState,
  savedStates,
  setSavedStates,
  localStorageName,
  }) => {
  const [modalIsOpen, setModalIsOpen] = useState(initialModalIsOpen);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleLoad = (element) => {
    closeModal();
    setState(element);
  };

  const handleDelete = (name) => {
    let aux = savedStates.filter((element) => element.name !== name);
    setSavedStates(aux);
    localStorage.setItem(localStorageName, JSON.stringify(aux));
  };

  return (
    <>
      <div className="input">
        <button onClick={openModal}>{str.loadFromSaves}</button>
      </div>
      <Modal isOpen={modalIsOpen} closeModal={closeModal}>
        <h3>{str.loadFromSaves}</h3>
        <table className="center-box" >
          <tbody>
            {savedStates.length ? (
              savedStates.map((element, key) => (
                <LoadStateRow
                  key={key}
                  str={str}
                  handleLoad={handleLoad}
                  handleDelete={handleDelete}
                  element={element}
                />
              ))
            ) : (
              <tr>
                <td>{str.infoNoDataSaved}</td>
              </tr>
            )}
          </tbody>
        </table>
      </Modal>
    </>
  );
}
 
export default LoadState;