import React,{Component,useState,useEffect} from "react";
import Fetch from'../expand/FetchData'
import CardSingle from "./SingleCard";
import {Get} from'../expand/HiNet';
import Store from '../expand/StoreRedux';

function Cards(props:any){
    var indents= [];
    let data = Fetch();
    console.log(data);
    for(let i = 1; i<=Object.keys(data).length;i++){
        indents.push(<CardSingle/>);
    };
    return(<div>{indents}</div>)
}
export default Cards;