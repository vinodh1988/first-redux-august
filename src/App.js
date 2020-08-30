import React from 'react';

import './App.css';

import { MessageBoxConnected } from './Redux/connected-components/MessageConnected';

const App =  ()=>{
   return(
     <div>
         <h1>Redux Demonstration</h1>
         <MessageBoxConnected></MessageBoxConnected>
      </div>
   )
}

export default App;
