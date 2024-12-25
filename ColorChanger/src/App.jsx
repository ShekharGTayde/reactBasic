import { useState } from "react"



function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 " >
        <div className="  flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl " >
          <button className="bg-red-600 outline-none px-4 py-1 rounded-2xl text-white "
           onClick={() => setColor("red")} >red</button>
          <button className="bg-pink-400 outline-none px-4 py-1 rounded-2xl text-white "
          onClick={()=>setColor("pink")}>pink</button>
          <button className="bg-green-500 outline-none px-4 py-1 rounded-2xl text-white"
          onClick={()=>setColor("green")}>green</button>
          <button className="bg-blue-400 rounded-2xl px-4 py-1 text-white outline-none "
          onClick={()=>setColor("blue")}>blue</button>
          <button className="bg-yellow-400 rounded-2xl px-4 py-1 outline-none text-white "
          onClick={()=>setColor("yellow")}>yellow</button>
          <button className="bg-violet-600 rounded-2xl px-4 py-1 outline-none text-white "
          onClick={()=>setColor("violet")}>violet</button>
          <button className="bg-black rounded-2xl px-4 py-1 outline-none text-white "
          onClick={()=>setColor("black")} >black</button>
          <button className="bg-gray-600 rounded-2xl px-4 py-1 outline-none text-white " 
          onClick={()=>setColor("gray")} >gray</button>
          <button className="bg-orange-600 rounded-2xl px-4 py-1 outline-none text-white "
          onClick={()=>setColor("orange")} >orange</button>
        </div>
      </div>
     
    </div>
       
   
     

  )
}

export default App


//in this project we used tailwind css it easy to use
//in project we directly used setColor as a call back func