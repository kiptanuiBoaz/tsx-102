import React, { FC } from 'react';
import './App.css';
import { Person , HairColor } from './components/Person';


//FC is the funtional component type
const App: FC = () => {


  return (
    <div className="App">

      <Person name={undefined} email='ped@gmail.com' age={23} hairColor={HairColor.Pink} />
    </div>
  );
}

export default App;
