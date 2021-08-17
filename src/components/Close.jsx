import React from 'react';
import {default as crossWhite} from "../Image-Components/crossWhite.svg";

function Close(props){
    const {index} = props.items;
    return(
        <section className="close" key={index}>
            <img src={crossWhite} alt="crossWhite" onClick={() => props.removePage(index)}/>
        </section>
    );
}

export default Close;