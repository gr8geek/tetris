import React from 'react';
function ContactCard({image,name,Phone,Email}){
    
    var text={
        marginLeft:"2%",
        marginTop:"5%",
    };
    x
    console.log(image);
     var imageStyle={
        padding:"2% 2% 2% 2%",
        width: "65%",
        height: "50%",
        margin:"1% 3% 4% 3%",
    };
    
   
    
    return(
        <div className="border">
            <img src={image} style={imgStyle}/>
            <p style={text}>{name}</p>
            <p style={text}>Phone:{Phone}</p>
            <p style={text}>Email:{Email}</p>
        </div>
    );
}
export default ContactCard;
