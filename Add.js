import React, { useEffect } from "react";
import { useState,useContext,useRef } from "react";
import PersonDispatchContext from "../Component/PersonDispatchContext";

const Add = ({ editablePerson}) => {
  const dispatch = useContext(PersonDispatchContext)
  const theme = useContext(PersonDispatchContext)
  const inputRef = useRef(null);
  const [person, setPerson] = useState({
    key: 4,
    id: "4",
    name: "",
    age: "",
    job: "Engineer",
  });


  function handlechange(e) {
    setPerson({ ...person, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(editablePerson){
      dispatch({type:'UPDATE',payload:person})
    } else{
      dispatch({type:'ADD',payload:person})
    }
    setPerson({
      key: 4,
      id: "4",
      name: "",
      age: "",
      job: "Engineer",
    })
  }

  useEffect(()=>{
    if(editablePerson){
      setPerson(editablePerson)
    } else{
       setPerson({
        key: 4,
        id: "4",
        name: "",
        age: "",
        job: "Engineer",
      })
    }
    inputRef.current.focus();
    inputRef.current.placeholder = "Enter the name"
  },[editablePerson])

  return (
    <div className={theme.mode}>
      <form action="">
        <input
          ref={inputRef}
          type="text"
          name="name"
          id=""
          onChange={handlechange}
          value={person.name}
        />
        <input
          type="text"
          name="age"
          id=""
          placeholder="age"
          onChange={handlechange}
          value={person.age}
        />
        <button onClick={handleSubmit}>{editablePerson?"Edit":"Add"}</button>
      </form>
    </div>
  );
};
export default Add;
