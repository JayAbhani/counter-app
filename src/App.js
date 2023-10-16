// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   let [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   function increment() {
//     setCount(count+1);
//   }

//   function decrement() {
//     setCount(count-1);
//   }


//   return (
//     <div className="App">
//       <h1>Counter App</h1>
//       <h2>{count}</h2>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }


import useCustomHook from "./useCustomHook";
function App() {
  let {count, increment, decrement} = useCustomHook();

  return(
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;

// Given a string, reverse each word in the sentence 

// List out the different ways an HTML element can be accessed in JavaScript code. 

// What are the ways to define a variable in JavaScript? 

// What is the difference between the operators ‘==‘ & ‘===‘? 

// How do you create multidimensional array? 
