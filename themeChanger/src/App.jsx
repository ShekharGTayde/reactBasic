import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {
  const [themeMode,setThemeMode]=useState("light")
 
  let ligthMode=()=>{
    setThemeMode("light")
  }

  const darkMode=()=>{
    setThemeMode("dark")
  }

  //actual change in theme 
  useEffect(()=>{

    document.querySelector('html').classList.remove("light","dark")

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
//we need to wrap element from provider func and wrap those element who want you give to the access of context data,
// and it need a value it means which props data do you give
  return (
    <ThemeProvider value={{themeMode,ligthMode,darkMode}}> 
     
<div className="flex flex-wrap w-full items-center">
                <div className=" w-full ">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                    </div>
                    <Card/>
                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>

    </ThemeProvider>
  )
}

export default App
