import CustomSelectItem from "./CustomSelectItem";
import './CustomSelect.css';
import { useState } from "react";
import icoSelect from '../assets/img/icoSelect.svg';

/*
  Recieves:
    selname: the name of the selector
    options: an array of objects with value and label for everyone
    handleChange: a function that is triggered when an option is selected (handles the state)
    theme: the actual theme of the app
    state: the actual value, obtained from the state
*/

const CustomSelect = ({selname, options, handleChange, theme, state}) => {
  const [active, setActive] = useState('');
  const handleActive = (e) => {
    setActive(active ? '' : 'active');
    if(e.target.name === selname) handleChange(e);
  }
  return (  
    <div className={theme + " custom_select " + active}>
      <div className="value" onClick={handleActive} >{state} <img src={icoSelect} alt="select arrow" /></div>
      <div className="options_container">
        {options.map((item, key) => (<CustomSelectItem key={key} selname={selname} value={item.value} label={item.label} handleChange={handleActive} />))}
      </div>
    </div>
  );
}
 
export default CustomSelect;