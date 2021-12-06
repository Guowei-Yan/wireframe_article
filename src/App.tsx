import { stringify } from 'querystring';
import React, {useState} from 'react';
import './App.css';
import CardSingle from './Component/SingleCard'
import Store from './expand/StoreRedux'
import {Get} from'./expand/HiNet'
import SingleButton from './Component/Button';
import Cards from'./Component/Cards'

function App() {
  const [height, changeHeight] = useState("300px");
  localStorage['myKey'] = '1';
  setInterval(intervalCheckHeight,1000);
  function intervalCheckHeight(){
    if(document.getElementsByClassName("card").length>1){
      let last_card = document.getElementsByClassName("card")[document.getElementsByClassName("card").length-1];
      // last_card.setAttribute("id","last_card");
      // let tmp: any = document.querySelector('.last_card');
      // let offset_top = tmp.offsetTop;
      changeHeight(height+last_card.clientTop);
    }
  };
  return (
    <div className="App">
      <header className="Aoo-header">
        Hello World!
      </header>
      <div className = "Frame" style={{width: "80%", 
                                      height: height, 
                                      margin: "auto",
                                      boxSizing:"border-box",
                                      paddingTop: "5%" }}>
        <Cards/>
      </div>
      <SingleButton/> 
    </div>
  );
}

export default App;