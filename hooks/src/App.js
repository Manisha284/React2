import React from 'react';
import logo from './logo.svg';
import './App.css';
import Usestate from './Index/Usestate';
import UsestateWithPrevstate from './Index/UsestateWithPrevstate';
import UsestateWithObject from './Index/UsestateWithObject';
import UsestateWithObject1 from './Index/UsestateWithObject1';
import UsestateWithArray from './Index/UsestateWithArray';
import WithoutUseEffect from './Index/WithoutUseEffect.js'
import UseEffectAfterRender from './Index/UseEffectAfterRender';
import ConditionRunEffect from './Index/ConditionRunEffect';

function App() {
  return (
    <div className="App">
      <ConditionRunEffect />
      {/*<UseEffectAfterRender />*/}
      {/*<WithoutUseEffect />*/}
      {/*<UsestateWithArray />*/}
      {/*<UsestateWithObject1 />*/}
      {/*<UsestateWithObject />*/}
      {/*<UsestateWithPrevstate />*/}
      {/*<Usestate />*/}
    </div>
  );
}

export default App;
