import { useState } from 'react'


function App() {


  const [text, setText] = useState("")
  const [todo, setTodo] = useState([]);


  function addtodo(event) {
    event.preventDefault();
    console.log(text)
    setTodo([...todo, text])
    console.log(todo);
    setText("")
  }



  return (
    <>
      {/* NAVBAR  */}
      <div className='flex justify-evenly  bg-sky-400 p-4'>
        <div className='text-xl font-bold'>
          <h1>MAVIA</h1>
        </div>
        <div className='flex gap-20 text-xl font-bold'>
          <p>Home</p>
          <p>About</p>
          <p>Publication</p>
        </div>
      </div>
      {/* NAVBAR */}


      <h1 className='font-bold text-5xl text-center mt-8'>TODO APP</h1>
      <form onSubmit={addtodo}>
        <input className='bg-gray-300 ml-[32%] rounded-xl  p-2 w-[35%] mt-8' onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder='Enter Value' />
        <button className='px-4 rounded-xl ml-2 py-2 bg-sky-300 ' type='submit'>ADD</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return (
            <div className='ml-[30%] p-1 mr-[30%] rounded mt-7 flex bg-sky-400 justify-between'>
              <li className='text-xl font-bold text-white' key={index}>{item}</li>
              <div className=''>
                <button onClick={deletetodo} className='text-white mr-3'>Delete</button>
                <button className='text-white mr-3'>Edit</button>
              </div>
            </div>
          )

          function deletetodo() {
            // console.log("hello");
            setTodo(todo.splice(index , 1))
          }

        })}
      </ul>
    </>
  )
}

export default App
