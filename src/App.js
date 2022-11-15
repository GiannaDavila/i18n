import { useState } from 'react';
import './App.css';
import English from './lang/En.json'
import Spanish from './lang/Es.json'
import Chinese from './lang/Chinese.json'

const locale = navigator.language || 'En' || 'Chinese';

const _lang = (locale==='Es') ? Spanish : English;
const _lang1 = (locale==='Chinese') ?English : Chinese;

function App() {
  const [lang,setLang]= useState(_lang)
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <button onClick={() => setLang(English)} >Es</button>
        <button onClick={() => setLang(Chinese)} >Ch</button>
        <button onClick={() => setLang(Spanish)} >En</button>
        </div>
        <h1>{lang["app.header"]}</h1>
        <p>{lang['app.subhead']}</p>
      </header>
    </div>
  );
}

export default App;
