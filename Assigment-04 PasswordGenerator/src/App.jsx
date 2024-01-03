import { useState } from 'react'
import Navbar from './component/Navbar'
import banner from './assets/Screenshot (15).png'
// import './App.css'

function App() {
  const [Range, setRange] = useState(5)
  const [length, Setlength] = useState()
  const [Number, setNumber] = useState(false)

  function AddNumber(e) {

  }



  function Ranges(e) {

    console.log(e.target.value);
  }
  // Ranges()



  return (
    <>
      <Navbar></Navbar>
      <img src={banner} alt="" />
      <div className='bg-[#CAEDF7] mt-8 p-5'>
        <h1 className='text-5xl font-bold mt-12 text-center'>Instantly generate a secure, <br /> random password with the <br /> LastPass online tool</h1>
        <p  className='text-center mt-10 font-medium'>Go beyond online generators with LastPass Premium. No matter what device or app you’re <br /> using, all your passwords are automatically generated, saved and synced – wherever you go.</p>

        <div className='mt-7 gap-56 flex p-7 bg-white w-[50%] rounded-md ml-[25%]'>
          <h1 className='ml-5 font-bold text-2xl'>Abcd</h1>
          <div className='ml-48 gap-10 flex'>
          <p className='mt-2'>icon</p>
          <p className='mt-2'>cion</p>
          </div>
        </div>
        <div className='w-[50%] ml-[25%] h-2 rounded-sm bg-gray-400'>
        .
        </div> 


        <div className='mt-6 w-[50%] ml-[25%] pb-5 bg-white rounded-md p-3'>
          <h1 className='ml-7 mb-3 font-poppins text-2xl font-bold mt-2'>Customize your password</h1>
          <hr />

          <div className='flex gap-20'>
          <div className='mt-20 ml-6'>
            <label htmlFor="length"></label>
            <span className='border-black border-solid border-[1px] px-3 py-1'>{Range}</span> <input className='ml-3 text-red-400 bg-red-300  w-56 ' type='range' id='length' onChange={Ranges} />
          </div>

          <div className='ml-20 mt-4'>
            <input className='mr-3'  type="checkbox" onChange={AddNumber} />
            <label className='text-xl font-bold '  htmlFor="">UpperCase</label> <br /> 

            <input className='mt-5 mr-3' type="checkbox" onChange={AddNumber} />
            <label className='text-xl font-bold ' htmlFor="">LowerCase</label> <br />

            <input className='mt-5 mr-3'  type="checkbox" onChange={AddNumber} />
            <label className='text-xl font-bold ' htmlFor="">Number</label>
            <br />
            <input className='mt-5 mr-3 mb-7' type="checkbox" onChange={AddNumber} />
            <label className='text-xl font-bold '  htmlFor="">Symbol</label>
          </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default App
