import React,{Component} from 'react'

class Refsexample extends Component{
    constructor(){
        super();
          this.userRef=React.createRef();
    }

    editVal(){
        console.log(this.userRef)
        // this.userRef.current.focus()
        this.userRef.current.value="userref"
        this.userRef.current.style.backgroundColor="green"
        this.userRef.current.style.color="white"
    }
    render(){
        return (
            <>
            <div>
               <h3>REfs Example</h3>
               <input ref={this.userRef} type="text" name="user"/>
               <button onClick={()=>this.editVal()}>CLick Me</button>
            </div>
            </>
          )
    }
  
}

export default Refsexample