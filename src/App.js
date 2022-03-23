// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ExcerciseActivityForm from '../src/Components/ExcerciseActivityForm/Form';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='App-content'>
        <ExcerciseActivityForm />
        <ExcerciseActivityForm />
        <ExcerciseActivityForm />
      </div>

    </div>
  );
}

export default App;
