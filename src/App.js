import { HashRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Error404 from './components/Error404';
import Dice from './pages/Dice';
import GroupRaffle from './pages/GroupRaffle';
import InterchangeRaffle from './pages/InterchangeRaffle';
import RandomValue from './pages/RandomValue';
//import Roulette from './pages/Roulette';
import RoundRobin from './pages/RoundRobin';
import SequenceRaffle from './pages/SequenceRaffle';
import './pages/style.css';
import InterchangeRaffleResultView from './pages/InterchangeRaffleResultView';

function App() {
  return (
    <div>
      <ThemeProvider >
        <LanguageProvider >
          <HashRouter >
            <Header />
            <Routes >
              <Route path='interchangeRaffle' element={<InterchangeRaffle />} />
              <Route path='interchangeRaffleResultView/:member' element={<InterchangeRaffleResultView />} />
              <Route path='groupRaffle' element={<GroupRaffle />} />
              <Route path='sequenceRaffle' element={<SequenceRaffle />} />
              <Route path='roundRobin' element={<RoundRobin />} />
              <Route path='randomValue' element={<RandomValue />} />
              <Route path='dice' element={<Dice />} />
              {/* <Route path='roulette' element={<Roulette />} /> */}
              <Route exact path='/' element={<MainMenu />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </HashRouter>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
