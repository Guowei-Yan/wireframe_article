import React,{Component,useState,useEffect} from "react";
import CardSingle from "./SingleCard";
import {Get} from'../expand/HiNet';
import Store from '../expand/StoreRedux';

function Cards(props:any){
    var indents= [];
    let limits = Store.getState().value;
    const [article, changArticle] = useState('');
    const doFetch=()=>{
        Get("https://api.spaceflightnewsapi.net/v3/articles")({ _limit : limits })
        .then(results => {changArticle(JSON.stringify(results))})}
    if(document.getElementsByClassName("card").length==0){
        doFetch();
    };
    if(Store.getState().value>document.getElementsByClassName("card").length){
        console.log(Store.getState().value);
        console.log(document.getElementsByClassName("card").length)
        doFetch();
    };
    if(Object.keys(article).length>=6){

        let a = JSON.parse(article);
        for(let i = 0; i<a.length;i++){
            let pubDate = new Date(a[i]["publishedAt"]);
            let StringDate = pubDate.getDay()+"/"+pubDate.getMonth()+"/"+pubDate.getFullYear()
            indents.push(<CardSingle 
                            date = {StringDate}
                            title = {a[i]["title"]}
                            detail = {a[i]["summary"]}
                            link = {a[i]["url"]}
                        />);
        };

    }else{console.log("no")}

    return(<div>{indents}</div>)
}
export default Cards;