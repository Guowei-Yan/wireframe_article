import {Get} from'./HiNet'
import {useState} from 'react';
import Store from '../expand/StoreRedux';
function Fetch(){
    let limits = Store.getState().value;
    const [article,changArticle] = useState({});
    const doFetch=()=>{
    Get("https://api.spaceflightnewsapi.net/v3/articles")({ _limit : limits })
    .then(results => {changArticle(JSON.parse(JSON.stringify(results)))})}
    function ll(){
        doFetch();
    };
    var myVar = localStorage['myKey']
    if(myVar ==="1"){
        ll();
        localStorage['myKey'] = "2";
    }
    Store.subscribe(ll);
    return(article);
}
export default Fetch;
