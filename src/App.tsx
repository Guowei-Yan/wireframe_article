import {useState} from 'react';
import './App.css';
import SingleButton from './Component/Button';
import Cards from'./Component/Cards'

function App() {
  const [height, changeHeight] = useState("300px"); // this hook used default value and then use interval to regularly update the height for the frame
  function heightCheck() {
    let max_top = 0;
    let max_height = 0;
    if(document.getElementsByClassName("card").length>0){
      for(let i=0;i<document.getElementsByClassName("card").length;i++){
        let thisCard = document.getElementsByClassName("card")[i];
        thisCard.setAttribute("id","this_card"+String(i));
        let tmp:any = document.querySelector('#this_card'+String(i));
        if(tmp.offsetTop>max_top){
          max_top = tmp.offsetTop;
        }
        if(tmp.offsetHeight>max_height){
          max_height = tmp.offsetHeight;
    
        }
      }
      changeHeight(String( 20 + max_height+max_top)+"px");
  }};
  setInterval(heightCheck,1000);
  // localStorage['myKey'] = '1';
  // setInterval(intervalCheckHeight,1000);
  // function intervalCheckHeight(){
  //   if(document.getElementsByClassName("card").length>1){
  //     let last_card = document.getElementsByClassName("card")[document.getElementsByClassName("card").length-1];
  //     // last_card.setAttribute("id","last_card");
  //     // let tmp: any = document.querySelector('.last_card');
  //     // let offset_top = tmp.offsetTop;
  //     changeHeight(height+last_card.clientTop);
  //   }
  // };
  return (
    <div className="App">
      <header className="Aoo-header">
        Hello World!
      </header>
      <div className = "Frame" style={{width: "80%", 
                                      height: height, 
                                      margin: "auto",
                                      boxSizing:"border-box",
                                      paddingTop: "1%" }}>
        <Cards/>
      </div>
      <SingleButton/> 
    </div>
  );
}

export default App;