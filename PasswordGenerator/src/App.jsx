

import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
const [length,setLength]=useState(8)
const [numAllowed,setNumAllowed]=useState(false)
const [charAllowed,setCharAllowed]=useState(false)
const [password,setPassword]=useState("")


const passwordGenerator = useCallback(()=>{  //it is used when our output is depend on multiple dependencies,it required call back func
  let pass=""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i=1;i<length;i++){
      let num=Math.floor(Math.random() * str.length + 1)  //it generate the random index no
       pass += str.charAt(num) //stored at pass that random index no charactor
    }
    setPassword(pass)
},[length,numAllowed,charAllowed])

useEffect(()=>{
  passwordGenerator()
},[length,numAllowed,charAllowed])

//ref hook for copy purpose
const copyPass=useRef(null) //this hook is used to give a referance

const PassCopy = useCallback(()=>{
  copyPass.current?.select();  //it is used to highlighte the selected text
  window.navigator.clipboard.writeText(password)  //it is used to copy to clipboard
},[setPassword])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={copyPass}
        />
        <button
        onClick={PassCopy}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
  
    </>
  )
}

export default App
