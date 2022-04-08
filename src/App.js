// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import List from './Components/List/List';
import Form from './Components/ActivityForm/Form';
import { useState } from 'react';


function App() {

  // const data = [
  //   {id:1, name:"name", description: "namenamename", type: "run", duration: 3661000, date: "2022-04-08", timeStamp: {}},
  //   {id:2, name:"name2", description: "namenamename2", type: "walk", duration: 3661000, date: "2022-04-08", timeStamp: {}},
  //   {id:3, name:"name", description: "namenamename", type: "hike", duration: 3661000, date: "2022-04-08", timeStamp: {}},
  // ]

  const [items, setItems] = useState([]);

  const onAddNewItem = (newItem) => {
    console.log("ข้อมูลที่ส่งมาจาก Form Component = ", newItem);
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  };


  return (
    <div className='container'>
      <Navbar />
      <div className='row container justify-content-between'>
        <div className='col-lg-6 col-12'>
          <Form onAddItem={onAddNewItem}/>
        </div>
        <div className='col-lg-6 col-12'>
          <List data={items}/>
        </div>
      </div>
    </div>
  );
}

export default App;
