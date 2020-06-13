import React from 'react';
import MyInfo from './MyInfo';
const MainContent =()=>{
    const styles={
        color:"#0000ff",
        backgroundColor: "#ff00ff",
        fontSize: "20px",

    };
    return(
    <main className="mainstyle">
        <p style={styles}>Some random Main Text</p>
        <MyInfo className="infocolor" name="Pratyush" age="18"/>
    </main>
    );
}
export default MainContent;
