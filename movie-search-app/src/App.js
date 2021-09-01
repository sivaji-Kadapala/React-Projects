
import './App.css';
import React, { useState } from 'react';
function App() {
  const [Search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${Search}&apikey=d53eba96`)
    .then((res=>res.json()))
    .then(value=>setData(value.Search))
  }
   const download = url => {
    fetch(url).then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="App">
     <center>
       <h1>Search Your Favourite Movie</h1>
       <form onSubmit={submitHandler}>
      <input 
       type="text"
       value={Search}
       onChange={(e)=>setSearch(e.target.value)}/><br/><br/>
       <input 
       type="submit"
       value="search"/>
       </form>
       <div className="row">
       {data.map(movie=>
       <div className="col-md-4" key={movie.imdbID}>
      <div className="card" style={{"width": "18rem"}}>
  <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
  <div className="card-body">
    
   <h4 className="card-title">{movie.Title}</h4>
   <a  className="btn btn-primary" onClick={()=>download(movie.Poster)} download>Download Poster</a>
    </div>
  </div>
</div>
      )}
      </div>
     </center>
    </div>
  );
}

export default App;
