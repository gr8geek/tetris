import React from 'react';
const MyInfo=({age,name,className})=>{
    return(
      <div className={className}>
        <h1>My Name is {name}</h1>
    <p>A simple geek on oval blue planet of age {age}</p>
      <ol>
        <li>Amstreadam</li>
        <li>Banglore</li>
        <li>Redmond Microsoft</li>
      </ol>
      </div>
    );
  }
export default MyInfo;
