import React from 'react';
import {default as cross} from "../Image-Components/cross.svg";
import {default as plus} from "../Image-Components/plus.svg";
import {default as minus} from "../Image-Components/minus.svg";

function Question(props){
    return(
        <React.Fragment>
            {/* 
                ============
                map function
                ============
             */}
            {props.items.map((item) =>{
                const {id,title,value,colorvalue,flag} = item;

                return(
                    <section className="questions" key={id}>
                        <div className="question">
                            {/* 
                              ========================
                              Using JS Truthy Feature
                              ========================
                             */}
                            {!flag? <img src={cross} alt="cross" onClick={() => props.removeItem(id)}/> : ""}

                            <textarea name="questionText" cols="32" rows="1" placeholder="Question Title" className="question-title" style={{color:colorvalue}} onChange={(e) =>{
                                props.addQuestion(id,e.target.value);
                                 }}>
                                    {title}
                            </textarea>
                            <div onClick={() =>{
                                props.flagChanger(id,!flag)
                                props.refresh()
                                }}>
                                {flag? <img src={minus} alt="-" /> :<img src={plus} alt="+" /> }
                            </div>
                        </div>
                            
                        {
                        flag && (
                            <section className="answer">
                                <textarea name="Text" cols="56" rows="5" placeholder="Enter Answer" onChange={(e) =>{
                                    props.addAnswer(id,e.target.value);
                                }}>
                                    {value}
                                </textarea>
                                <div className="buttons">
                                    <button className="btn btn-aqua" onClick={() =>{
                                        props.titleChanger(id,"#7AFFF6")
                                        props.refresh();
                                    }
                                        } ></button>
                                    <button className="btn btn-green" onClick={() =>{
                                        props.titleChanger(id,"#75FFC3")
                                        props.refresh();
                                    }
                                        } ></button>
                                    <button className="btn btn-red" onClick={() =>{
                                        props.titleChanger(id,"#FF8B8B")
                                        props.refresh();
                                    }
                                        } ></button>
                                </div>
                            </section>
                        )}
                    </section>
                )
            })}
          </React.Fragment>
        );
}

export default Question;