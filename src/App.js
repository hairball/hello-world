import './App.css';
// import Greeting from './components/Greeting'; // export default Greeting
import {Greeting} from "./components/Greeting";
import GreetClass from "./components/GreetClass";
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <Greeting name='Bruce' heroName='Batman'/>
      <GreetClass name='Clark' heroName='Superman'/>
      <Message />
    </div>
  );
}

export default App;
