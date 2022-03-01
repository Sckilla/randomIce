import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = 'dark';

const themes = {light: 'light', dark: 'dark'};


export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes[initialTheme]);
  document.body.classList.add(themes.dark);
  const handleTheme = () => {
    if(theme===themes.dark){
      setTheme(themes.light);
      document.body.classList.remove(themes.dark);
      document.body.classList.add(themes.light);
    }
    if(theme===themes.light){
      setTheme(themes.dark);
      document.body.classList.remove(themes.light);
      document.body.classList.add(themes.dark);
    }
  }

  const data = {theme, handleTheme};

  return(
    <ThemeContext.Provider value={data} >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;