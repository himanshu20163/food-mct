import React, { useState } from 'react'
import myreduxstore from './Store';
import { useSelector } from 'react-redux';

const Formdata = () => {
    const[State,Setstate] = useState('');

    const data = useSelector((fetchdata)=>{
      return fetchdata;
    }) 

    const submit_data = ()=>{
        //create action object 
        var myAction = {
            type:"comp1",
            payload:State,
        }
        myreduxstore.dispatch(myAction);
    }
  return (
    <div>
        <input type='text' onChange={(ele)=>{
          Setstate(ele.target.value);
        }}></input>
        <button onClick={submit_data}>Submit</button>
        <h2>{data.comp1}</h2>
    </div>
  )
}

export default Formdata