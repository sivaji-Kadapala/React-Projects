import React, { useState } from 'react';
import './App.css';
import Products from './Products';

function App() {
  const [search, setSearch] = useState("");
  const YOUR_APP_ID='e206439c';
  const YOUR_APP_KEY='f80a525aad820dd7224165e95b70b144';
  const [data,setData] = useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(res=>res.json()).then(data => setData(data.hits))
  }
  return (
    <div className="App">
      <center>
     <h4 >Food Recipe App</h4>
     <form onSubmit={submitHandler}>
       <input
       type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/><br/><br/>
        <input 
        type="submit"
        value="Get Recipe"
        />
     </form>
     <hr className="bg-success"/>
     {
       data.length>=1?<Products data={data}/>:<h4>No Data Loaded</h4>
     }
     </center>
    </div>
  );
}

export default App;
