import './App.css';
import English from './lang/En.json'
import Spanish from './lang/Es.json'

const locale = navigator.language || 'En';

const lang = (locale==='Es') ? Spanish : English;

function App() {
  console.log (lang)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{lang["app.header"]}</h1>
        <p>{lang['app.subhead']}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
