// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import List from './Components/List/List';
// import Form from './Components/ActivityForm/Form';
// import FormReactHook from './Components/ActivityForm/FormReactHook';
import Form1 from './Components/ActivityForm/Form1'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container d-flex justify-content-between'>
        <div className='row'>
          <div className='col-lg-6 col-12'>
            <Form1 />
          </div>
          <div className='col-lg-6 col-12'>
            <List />
          </div>
        </div>
        {/* <ExcerciseActivityForm /> */}
        {/* <ExcerciseActivityForm /> */}
      </div>

    </div>
  );
}

export default App;
