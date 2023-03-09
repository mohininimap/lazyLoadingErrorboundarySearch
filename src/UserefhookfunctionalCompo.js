import React,{useRef} from 'react'

export const UserefhookfunctionalCompo = () => {
let inputRef=useRef(null)


const handleInput=()=>{
console.log(inputRef)
inputRef.current.value="reffunction";
inputRef.current.style.backgroundColor="pink"
inputRef.current.style.color="blue"
inputRef.current.focus()
}
  return (
  <>
  <div>ref in functional component</div>
  <input ref={inputRef} type="text" />
  <button onClick={()=>handleInput()}>submit</button>
  </>
  )
}
