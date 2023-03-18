import { useState, useEffect } from 'react';
import './App.css';
import IsLoading from './components/IsLoading';
import axios from 'axios';

function App() {

const [data, setData] = useState([]);
const [spinner, setSpinner] = useState(true);
const [errorMessage, setErrorMessage] = useState("");


// useEffect(() => {
//   fetch("https://6414d2b98dade07073c99e62.mockapi.io/users")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     setData(data);
//   });
// }, []);

// useEffect(() => {
// axios.get("https://6414d2b98dade07073c99e62.mockapi.io/users").then((res) => {
//   setData(res.data);
//   console.log(res.data);
// });

//const fetchData = async() => {
//   try {
//     const response = await fetch("https://6414d2b98dade07073c99e62.mockapi.io/users");
//     const listItems = await response.json();
//     setData(listItems);
//     console.log(listItems);
//   } catch (err) {
//     console.log(err);
//   }
// }
// setTimeout(() => fetchData(), 2000);

// }, []);

useEffect(() => {

  const getData = async() => {
    const res = await fetch("https://6414d2b98dade07073c99e62.mockapi.io/users");

    if (res.status > 399) {
        setErrorMessage("OOPS resource not found");
        setSpinner(false);
    } else {
      const data = await res.json();
    setData(data);
    setSpinner(false);

    }

  }
    setTimeout(() => getData(), 2000);

}, [])


console.log(data + " outside use effect");

  return (
    <div className="App">
      <h1>AJAX ASSIGNMENT V1</h1>
      {spinner && <IsLoading />}
      {errorMessage}
      {data.map((user) => {
        return <div className="card" key={user.id}>
          <p>{user.name}</p>
          <img width="200" src={user.image} />
          </div>
      })}
    
    </div>
  );
}

export default App;

