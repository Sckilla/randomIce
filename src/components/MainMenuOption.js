import './MainMenuOption.css';
const MainMenuOption = ({option, description, color, theme}) => {
  return (  
    <div className={color+' menu_option '+theme}>
      <div>
        <h2>{option}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
 
export default MainMenuOption;