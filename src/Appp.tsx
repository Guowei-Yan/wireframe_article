import { stringify } from 'querystring';
import React, {useState} from 'react';
import './App.css';
import CardSingle from './SingleCard'
import Store from './StoreRedux'
import {Get} from'./HiNet'

function App1() {
  let frameHeight = String((Store.getState().value+1)*300)+"px";
  const [article, changeArticle] = useState({})
  // Get("https://api.spaceflightnewsapi.net/v3/articles")({ _limit : '50' })
  //   .then(results => {changeArticle(JSON.parse(JSON.stringify(results)))})
  // console.log(article)
  return (
    <div className="App">
      <header className="Aoo-header">
        Hello World!
      </header>

    <div className = "Frame" style={{width: "80%", 
                                     height: frameHeight, 
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
    </div>
  );
}

export default App1;
