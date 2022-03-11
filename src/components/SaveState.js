import { useState } from "react";
import Modal from "./Modal";

const initialModalIsOpen = false;
const initialNameSave = "";
const initialError = {
  message: "",
  action: "",
};

// str:{
//   errorRepitedState,
//   errorActionReplace,
//   saveState,
//   saveStateAs
// }
// state: state to save
// savedStates: array with all the states saved
// setSavedStates: ||
// localStorageName: name of the local storage where is saved the states

const SaveState = ({
  str,
  state,
  savedStates,
  setSavedStates,
  localStorageName,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(initialModalIsOpen);
  const [nameSave, setNameSave] = useState(initialNameSave);
  const [error, setError] = useState(initialError);

  const closeModal = () => {
    setModalIsOpen(false);
    setError(initialError);
    setNameSave(initialNameSave);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleSaveState = () => {
    let auxError = initialError;
    savedStates.forEach((element) => {
      if (element.name === nameSave) {
        auxError = {
          message: str.errorRepitedState,
          action: str.errorActionReplace,
        };
        return;
      }
    });
    if (auxError === initialError) saveState();
    else setError(auxError);
  };

  const saveState = () => {
    let aux = [
      { name: nameSave, data: state },
      ...savedStates.filter((element) => element.name !== nameSave),
    ];
    setSavedStates(aux);

    localStorage.setItem(
      localStorageName,
      JSON.stringify(aux)
    );
    closeModal();
  };

  return (  
    <>
      {state.length > 1 && (
        <div className="input button-random">
          <button onClick={openModal}>{str.saveState}</button>
        </div>
      )}
      <Modal isOpen={modalIsOpen} closeModal={closeModal}>
        <h3>{str.saveStateAs}</h3>
        <div className="input">
          <input
            type="text"
            value={nameSave}
            onChange={(e) => setNameSave(e.target.value)}
          />
        </div>
        <div className="input">
          <button onClick={handleSaveState}>{str.saveState}</button>
        </div>
        {error !== initialError && (
          <div className="message error active">
            <span>
              {error.message + " "}
              {error.action !== "" && (
                <button onClick={saveState}>{error.action}</button>
              )}
            </span>
          </div>
        )}
      </Modal>
    </>
  );
}
 
export default SaveState;