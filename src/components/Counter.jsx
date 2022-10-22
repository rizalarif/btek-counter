import React from "react"

const Counter = ()=> {
    const [counter, setCounter] = React.useState(1)

    const minus = () => {
        console.log("Klik button -")
        if(counter > 1){
            setCounter(counter-1)   
        }else{
            window.alert("You cannot go to 0")
        }
    }
    
    const plus = () => {
        console.log("Klik button +")
        if(counter < 9){
            setCounter(counter+1)
        }else{
            window.alert("You cannot go to 10")
        }
    }

    return (
        <div className="wrapper">
            <div className="counter">
                <div>
                    <button onClick={minus} className="btn">-</button>
                </div>
            </div>
            <div className="number"> {counter} </div>
            <div>
                <button onClick={plus} className="btn">+</button>
            </div>
            </div>
    )
}

export default Counter
