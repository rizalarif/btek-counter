import React from "react"

const Sapa = ({name, birthDate})=> {
    React.useEffect(()=>{
      console.log("I will logged on did mount")
      return ()=> {
        console.log("Component dissapeared!")
      } //componentWillUnmount
    }, []) //sama seperti componentDidMount
  
    React.useEffect(()=>{
      console.log("I will run on props name updated")
    }, [name]) //sama seperti componentDidUpdate
  
    return (
      <>
        <div className="">Halo, {name}! Your birthDate is {birthDate}</div>
      </>
    )
  }

  export default App
