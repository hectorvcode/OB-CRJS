import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { /* Componente propio */ }
        {/* <Greeting name="Hector"></Greeting> */}
        <GreetingF name="Martin"></GreetingF>
      </header>
    </div>
  );
}

export default App;
