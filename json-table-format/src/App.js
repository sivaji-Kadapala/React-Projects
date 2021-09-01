

import React, { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((jsondata) => setData(jsondata))
      .catch((err) => console.log(err));
  });
  return (
    <div className="App">
     <center> <h1>Json Data</h1></center>
      <center>
        <table border="1">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
}
