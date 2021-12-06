import { stringify } from 'querystring';
import React, {useState} from 'react';
import './App.css';
import CardSingle from './Component/SingleCard'
import Store from './expand/StoreRedux'
import {Get} from'./expand/HiNet'
import SingleButton from './Component/Button';

function App() {
  const [article, changeArticle] = useState({});
  const [height, changeHeight] = useState("300px");
  setInterval(intervalCheckHeight,5000);
  function intervalCheckHeight(){
    if(document.getElementsByClassName("card").length>1){
      let last_card = document.getElementsByClassName("card")[document.getElementsByClassName("card").length-1];
      last_card.setAttribute("id","last_card");
      let tmp: any = document.querySelector('[id=last_card');
      let offset_top = tmp.offsetTop;
      changeHeight(offset_top+tmp.offsetHeight)
    }
  };
  // Get("https://api.spaceflightnewsapi.net/v3/articles")({ _limit : '50' })
  //   .then(results => {changeArticle(JSON.parse(JSON.stringify(results)))})
  // console.log(article)
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
        <CardSingle/>
        <CardSingle/>
        <CardSingle/>
        <CardSingle/>
        <CardSingle/>
        <CardSingle/>
      </div>
      <SingleButton/> 
    </div>
  );
}

export default App;