import React from 'react';
import Joke from './components/Joke';
function App(){
  return(
    <div>
      <Joke quest="Why was apple invisible on red table" punch="Becuse it was camoflaged"/>
  <Joke quest="Why did hindi chini bhai bhai failed" punch="Becuse chini backstabbed in 1962"/>
  <Joke quest="Why is 1/0 not defined"  punch="You know it better .. try solving it"/>
  <Joke quest="Why is sun like Sun" punch="Why are you like you"/>
  <Joke quest="Why is milk white"/>
    </div>
  );
}
export default App;
