import React from "react";
import { useContext } from "react";


export const ThemeContext = React.createContext({
    themeMode:'light',
    ligthMode:()=>{},
    darkMode:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function UseTheme(){
    return useContext(ThemeContext)
}