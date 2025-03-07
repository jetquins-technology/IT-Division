import React, { useState } from 'react'
import AppContext from './AppContext'

function AppState({children}) {
    const [menuOpen,setMenuOpen] = useState({
        isOpen:false,
        menuId:null
    })
    
  return (
    <AppContext.Provider value={{menuOpen,setMenuOpen}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppState