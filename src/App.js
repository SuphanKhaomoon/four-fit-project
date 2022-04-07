// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import List from './Components/List/List';
import Form from './Components/ActivityForm/Form';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container d-flex justify-content-between'>
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <Form />
          </div>
          <div className='col-lg-6 col-12'>
            <List />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
