import { useContext } from 'react';
import logo from '../assets/img/logo.svg';
import icoThemeDark from '../assets/img/icoThemeDark.svg';
import icoThemeLight from '../assets/img/icoThemeLight.svg';
import ThemeContext from '../context/ThemeContext';
import './Header.css';
import LanguageContext, { languages } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import CustomSelect from './CustomSelect';


const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { str, handleLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const handleNavigateMainPage = () =>{
    navigate('/');
  }

  return (  
    <header>
      <img className="logo_img" src={logo} alt="logo" onClick={handleNavigateMainPage} />
      <h1 className={theme+" randomice_title"} onClick={handleNavigateMainPage} >Random<span>Ice</span></h1>
      <div className='header_controls'>
          {theme==='light' && <img className='light' src={icoThemeDark} alt="App theme" onClick={handleTheme} />}
          {theme==='dark' && <img className='dark' src={icoThemeLight} alt="App theme" onClick={handleTheme} />}
          <CustomSelect selname="selLanguage" options={languages} state={str.lang} handleChange={handleLanguage} theme={theme} />
      </div>
    </header>
  );
}
 
export default Header;