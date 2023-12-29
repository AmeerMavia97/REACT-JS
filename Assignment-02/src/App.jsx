import { useState } from 'react'


function App() {
  const [text , setText] = useState("")
  const [todo , setTodo] = useState([]);


  function addtodo(event){
    event.preventDefault();
    console.log(text)
    setTodo([...todo ,  text])
    console.log(todo);
    setText("")
  }


  return (
    <>
    <h1>TODO APP</h1>
    <form onSubmit={addtodo}>
      <input onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder='Enter Value' />
      <button type='submit'>ADD</button>
    </form>
    <ul>
      {todo.map((item , index)=>{
        return(
          <li key={index}>{item}</li>
        )
      })}
    </ul>
    </>
  )
}

export default App
