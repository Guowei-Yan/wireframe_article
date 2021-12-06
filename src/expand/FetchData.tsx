import {Get} from'./HiNet'
import {useState} from 'react';
import Store from '../expand/StoreRedux';
function Fetch(){
    const [article,changArticle] = useState({})
    
    return(
        Get("https://api.spaceflightnewsapi.net/v3/articles")({ _limit : '50' })
            .then(results => {changArticle(JSON.parse(JSON.stringify(results)))})
    )
}