const CustomSelectItem = ({selname, value, label, handleChange}) => {
  return (  
    <>
      <input type="radio" id={value} value={value} name={selname} onChange={handleChange} />
      <label htmlFor={value}>{label}</label>
    </>
  );
}
 
export default CustomSelectItem;