import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import Gallery from './Gallery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const changeHandler=e=>{
    setSearch(e.target.value);
  }
  const submitHandler=e=>{
    e.preventDefault();
     axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
    console.log(search)
  }
  return (
    <div className="App">
      <center>
        <h2>Gallery SnapShots</h2><br/>
        <form onSubmit={submitHandler}>
          
          <input size="30"  className="form-control" type="text" value={search} onChange={changeHandler} placeholder="Search something"/><br/>
        
          <input type="submit"  className="btn btn-primary mb-2" name="search"/>

        </form>
        {/* <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav> */}
        <br/>
        {data.length>=1? <Gallery data={data}/>:<h4>No data loaded</h4>}
       
      </center>
    </div>
  );
}

export default App;
