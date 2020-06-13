import React from 'react';
import Joke from './components/Joke';
import jokeData from './components/jokeData';
function App(){
  const nums =[1,2,3,4,5,6,7,8,9,10];
  const doubled=nums.map((num)=> num*2);
  console.log("new array=",doubled);
  const JokeList=jokeData.map((joke)=>{
    return(
      <Joke key={joke.id} quest={joke.quest} punch={joke.punch}/>
    );
  });

  return(
    <div>
      {JokeList}
    </div>
  );
}
export default App;
