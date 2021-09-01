import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';

function App() {
  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{setData(res.data);
    setPerpage(res.data.slice(0,10))})
  },[])
  const pagehandler=(pageNumbers)=>{
    setPerpage(data.slice((pageNumbers*10)-10,pageNumbers*10))
  }
  return (
    <div className="App">
     {
       data.length>=1?<div>{
         perpage.map(post=><div className="post">{post.title}</div>)}
         <br/><center><Pagination data={data} pagehandler={pagehandler}/></center></div>:<p>Data Not Loaded</p>
     }
    </div>
  );
}

export default App;
