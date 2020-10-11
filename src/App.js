import React from 'react';

import {Header} from './components';
import {Home} from './pages';
// import { Route, Link } from 'react-router-dom';

function App () {

  return(
    <div className="wrapper">
      <Header/>
      <Home/>
    </div>
  )
}
export default App;
