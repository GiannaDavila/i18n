import { useState } from 'react';
import { createContext } from 'react';
import Details from './components/Details';
import './App.css';
import English from './lang/En.json'
import Spanish from './lang/Es.json'
import Chinese from './lang/Chinese.json'
import French from './lang/French.json'

const locale = navigator.language || 'en';

const _lang = (locale==='es') ? Spanish : English;
const _lang1 = (locale==='Chinese') ?English : Chinese;
const _lang2 = (locale==='French') ?English : French;


export const languageContext = createContext()

function App() {
  const [lang,setLang]= useState(_lang)
  return (
    <languageContext.Provider value={{lang}}>
    <div className="App">
      <header className="App-header">
        <div>
        <button onClick={() => setLang(English)} >English</button>
        <button onClick={() => setLang(Chinese)} >中国人</button>
        <button onClick={() => setLang(Spanish)} >Español</button>
        <button onClick={() => setLang(French)} >Français</button>
        </div>
        <h1>{lang["app.header"]}</h1>
        <p>{lang['app.subhead']}</p>
        <a 
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {lang["app.cta"]}
      </a>
        <Details/>
      </header>
    </div>
    </languageContext.Provider>
  );
}

export default App;
