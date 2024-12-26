import React from "react";
import { useContext } from "react";


export const ThemeContext = React.createContext({  //we created a context ,basically context means object where we pass data form upperElement and retrive data to childElement
    themeMode:'light',
    ligthMode:()=>{},
    darkMode:()=>{}
})

export const ThemeProvider = ThemeContext.Provider //by using provider method we provide context for changes

export default function UseTheme(){
    return useContext(ThemeContext) //finally parent element sent data to the context by using useContext method
}