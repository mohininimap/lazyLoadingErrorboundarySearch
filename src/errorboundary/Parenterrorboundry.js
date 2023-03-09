import React from 'react'
import ErrorBoundary from './ErrorBoundary';
import Person from './Person';
import ClickCounter from './ClickCounter';
const Parenterrorboundry = () => {
    const person={
        firstName:"Mohini",
        lastName:"Raut"
    }
  return (
    <>
     <div>Parenterrorboundry</div>
     <ErrorBoundary>
     <Person person={person}/>
     <ClickCounter/>
     </ErrorBoundary>
    </>
   
  )
}

export default Parenterrorboundry