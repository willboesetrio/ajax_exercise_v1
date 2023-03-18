import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [data, setData] = useState([]);
const [spinner, setSpinner] = useState(true);

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
    const data = await res.json();
    setData(data);
    setSpinner(false);
  }
    setTimeout(() => getData(), 3000);

}, [])


console.log(data + " outside use effect");

  return (
    <div className="App">
      <h1>hello world</h1>
      {spinner && <h3>NOW LOADING</h3>}
      {data.map((user) => {
        return <div key={user.id}>
          <p>{user.name}</p>
          <img width="200" src={user.image} />
          </div>
      })}
    
    </div>
  );
}

export default App;


// https://drive.google.com/uc?id=1wAeYPro1Clw3-zIxXP4ndVqWIlQ4iaPE

// https://drive.google.com/uc?id=1wIKfuTpNMxHzT7ye4UczBT6iziytW7cJ

// https://drive.google.com/uc?id=1543Z2mMV09FVtcmC7CyR02z6Prg5tmDh

// https://drive.google.com/uc?id=16RAU_-L_iMYv8uDwmkYPkLG4x04LFooJ

// https://drive.google.com/file/d/1yld2bYOa3YMIhdP8TRRXdGckhly_f0Qy/view?usp=sharing

// https://drive.google.com/file/d/1yld2bYOa3YMIhdP8TRRXdGckhly_f0Qy/view?usp=sharing