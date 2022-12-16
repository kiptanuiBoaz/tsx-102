import React from 'react';
import './App.css';

function App() {
  const name: string = "App"; 
  const age : number = 23;
  const isMarried : boolean = false;

  const getName = (name: string):number =>{
    if(name==="App") {
      return 29;
    }else{
      return 0;
    }
  }


  return (
    <div className="App">
     
   <p> {name}</p>
   <p>{age}</p>
   <p>{isMarried? "Married" : "Not Married"}</p>
    </div>
  );
}

export default App;
