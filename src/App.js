// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import List from './Components/List/List';
import Form from './Components/ActivityForm/Form';
import { useState } from 'react';
import EditForm from './Components/EditForm/EditForm';


function App() {

  // const data = [
  //   {id:1, name:"name", description: "namenamename", type: "run", duration: 3661000, date: "2022-04-08", timeStamp: {}},
  //   {id:2, name:"name2", description: "namenamename2", type: "walk", duration: 3661000, date: "2022-04-08", timeStamp: {}},
  //   {id:3, name:"name", description: "namenamename", type: "hike", duration: 3661000, date: "2022-04-08", timeStamp: {}},
  // ]

  const [items, setItems] = useState([]);

  const [itemData, setItemData] = useState({});

  const [isVisible, setIsVisible] = useState(false);
  

  const onAddNewItem = (newItem) => {
    // console.log("ข้อมูลที่ส่งมาจาก Form Component = ", newItem);
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  };

  const onRemoveItem = (item) => {
    setItems(
      items.filter((prevItem => prevItem.id !== item.id))
    );
  };

  const onEditItem = (item) => {
    setItemData(() => {
      return item;
    });

    setIsVisible(() => true);
  };

  const onCreateActivity = (item) => {
    setIsVisible(() => false);
  }

  const onGetItem = () => {

  };

  return (
    <div className='container justify-content-between'>
      <Navbar onCreateActivity={onCreateActivity}/>
      <div className='row container'>
        { !isVisible?
          ( <div className='col-lg-6 col-12 mb-5'>
            <Form onAddItem={onAddNewItem}/>
          </div> )
        :
         (  <div className='col-lg-6 col-12 mb-5'>
              <EditForm item={itemData}/>
            </div> ) 
        }
        <div className='col-lg-6 col-12'>
          <List data={items} 
                onRemoveItem={onRemoveItem}
                onEditItem={onEditItem}
                onGetItem={onGetItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
