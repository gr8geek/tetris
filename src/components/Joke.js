import React from 'react';
function Joke({quest,punch}){
    return(
        <div>
            <h1>{quest}</h1>
            <h4>{punch}</h4>
        </div>
    );
}
export default Joke;
