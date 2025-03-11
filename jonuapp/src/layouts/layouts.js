import React from 'react'
import { Menu } from '../components/inicio' 
export function Layout({children}) {
  return (
    <div>
      <div className="menu">
        <Menu/>
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        </div>
    </div>
  )
}
