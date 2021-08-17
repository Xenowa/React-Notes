import React,{useState,useEffect} from 'react';
import Head from "./Head";
import Close from "./Close";
import Question from './Questions';
import {default as plusWhite} from "../Image-Components/plusWhite.svg";
import {default as plusBlue} from "../Image-Components/plusBlue.svg";
import {default as plusYellow} from "../Image-Components/plusYellow.svg";

function Add(){
    // ========================================
    // Pass Local Storage list to a js variable
    // ========================================
    // ####
    // Head
    // ####
    const getMainList = () => {
      let mainList = localStorage.getItem("MainList");
      if (mainList) {
        return JSON.parse(mainList);
      } else {
        return [{ index:new Date().getTime().toString(), heading:"", sublist:[]}];
      }
    }

    // #########
    // Questions
    // #########
    const getSubList = () => {
        return mainList[counter].sublist;
      }
    // =================
    // React State Hooks
    // =================
    const [mainList,setMainList] = useState(getMainList());
    const [counter,setCounter] = useState(0);
    const [list, setList] = useState(getSubList());
    const [flag,setFlag] = useState(false);
    

    // ####
    // Head
    // ####
    const handleMainList = () => {
      const newItem = { index:new Date().getTime().toString(), heading:"", sublist:[]};
      setMainList([...mainList, newItem]);
      setCounter(mainList.length);
      }

      const addHeading = (index,headingval) => {
        mainList.filter((item) =>{
             if(item.index === index){
              item.heading = headingval;
            }
            return localStorage.setItem("MainList", JSON.stringify(mainList))
          })
      }

      const changeCounter = (counterVal) =>{
        let listLength = mainList.length;
        if(counterVal < 0){
          setCounter(listLength -1);
        }
        else if(counterVal > listLength -1){
          setCounter(0);
        }else{
          setCounter(counterVal);
        }
      }

      const removePage = (indexVal) => {
        if(counter > 0){
          setCounter(0);
          setMainList(mainList.filter((item) => item.index !== indexVal));
        }else{
          setList([]);
          alert("Note 1 Items Deleted");
        }
      }

    // #########
    // Questions
    // #########
    const handleSubmit = () => {
      const newItem = { id: new Date().getTime().toString(), title: "", value: "", colorvalue:"",flag:false };
      setList([...list, newItem]);
      }
        
    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id));
      }
        
    const addQuestion = (id,titleval) => {
      list.filter((item) =>{
           if(item.id === id){
            item.title = titleval;
          }
          return localStorage.setItem("MainList", JSON.stringify(mainList))
        })
    }

    const addAnswer = (id,valueval) => {
      list.filter((item) =>{
           if(item.id === id){
            item.value = valueval;
          }
          return localStorage.setItem("MainList", JSON.stringify(mainList))
        })
    }

    const titleChanger = (id,colorval) => {
      list.filter((item) =>{
           if(item.id === id){
            item.colorvalue = colorval;
          }
          return localStorage.setItem("MainList", JSON.stringify(mainList))
        })
    }

    const flagChanger = (id,flagval) => {
      list.filter((item) =>{
           if(item.id === id){
            item.flag = flagval;
          }
          return localStorage.setItem("MainList", JSON.stringify(mainList))
        })
    }

    // =================================================================
    // Refresh Function to update states withought refreshing whole page
    // =================================================================
    const handleCurrentQuestion = () =>{
      setList([...list]);
    }

    // =========
    // Show btns
    // =========
    const showing = () =>{
        setFlag(true);
    }

    // =========
    // hide btns
    // =========
    const hiding = () =>{
        setFlag(false);
    }

    // ==========================================
    // Setting Items from states to local storage
    // ==========================================

    useEffect(() => {
        mainList[counter].sublist = list;
        localStorage.setItem("MainList", JSON.stringify(mainList))
      },[list])

    useEffect(() => {
        setList(getSubList());
        localStorage.setItem("MainList", JSON.stringify(mainList))
      },[counter])

    return(
        <React.Fragment>
          <Head
            items={mainList[counter]}
            addHeading={addHeading}
            counterVal = {counter}
            changeCounter={changeCounter}
          />
        <section className="add" onMouseLeave={hiding}>
            <img src={plusBlue} alt="plusBlue" className={flag? "show" : "hide"} onClick={() => handleSubmit()}/>
            <img src={plusWhite} alt="plusWhite" onClick={showing} className={flag? "hide" : "show"} />
            <img src={plusYellow} alt="plusYellow" className={flag? "show" : "hide"} onClick={() => handleMainList()}/>
        </section>
        <section>
            <Question
              items={list}
              removeItem={removeItem}
              addQuestion={addQuestion}
              addAnswer={addAnswer}
              titleChanger={titleChanger}
              flagChanger={flagChanger}
              refresh={handleCurrentQuestion}
            />
        </section>
        <Close
         items={mainList[counter]}
         removePage={removePage}
         />
        </React.Fragment>
    );
}

export default Add;