import React from 'react';


export const MessageBox = ({message,changeMessage}) =>{
    return(
        <div id="message">
             <h3>{message}</h3>
             <button onClick={changeMessage}>Change Message</button>
        </div>
    )

}