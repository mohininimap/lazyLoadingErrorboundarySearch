import React,{useState} from 'react'
const MAX_COUNT_ALLOWED=5;
const ClickCounter = () => {
    const [count,setCount]=useState(0)

    const handleClick=()=>{
    try{
        if(count===MAX_COUNT_ALLOWED){
            throw new Error('Count limit exceeded');
        }else{
            setCount(count+1)
        }
    }catch(err){
console.log("Click Counter error",err)
    }

}  
  return (
    <>
    <div>Clickcounter</div>

    <button onClick={()=>handleClick()}>Counter {count}</button>
    </>
    
  )


}
export default ClickCounter;