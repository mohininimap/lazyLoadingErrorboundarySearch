import React,{useRef,useState} from "react";
const Refform=()=>{
    //it like a useState only and its preserve the value .No rerender
    const luckyName=useRef(null)
    const [show,setShow]=useState(false)
    const submitForm=(e)=>{
     e.preventDefault()
     setShow(true)
     console.log(luckyName.current.value)
    }
    return(
        <>
        <h3>This is Uncontrolled example</h3>
        <form onSubmit={submitForm}>
            <div>
            <label htmlFor="luckyName">Enter you lucky name</label>
            <input ref={luckyName} type="text"  id="luckyName"/>

            </div>
           <br />
           <button>Submit</button>
        </form>
        {show?`Your lucky name is ${luckyName.current.value}`:""}
       </>
    )
}

export default Refform;