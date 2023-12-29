import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [add , setCount] = useState(0)

  function AddNum(){
    setCount(add + 1)
  }
  function SubNum(){
    if(add === 0 ){
      console.log("ab nahi ho sakta");

    }else{
      setCount(add - 1)
    }
    
  }

  return (
    <>
    <h1>Hello World</h1>
    <button onClick={AddNum}>ADD {add}</button>
    <button onClick={SubNum}>SUBS {add}</button>
    </>
  )
}

export default App
