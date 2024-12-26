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
