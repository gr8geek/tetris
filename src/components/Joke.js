import React from 'react';
function Joke({quest,punch}){
    return(
        <div>
            <h1 style={{display: !quest && "none"}}>{quest}</h1>
            <h4 style={{color: !quest && "#888888"}}>{punch}</h4>
        </div>
    );
}
export default Joke;
