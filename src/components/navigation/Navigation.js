import React, { Component } from 'react'
import { menuIntems, MenuItems } from "./MenuItems";

class Navigation extends React.Component {
   render(){
       return(
           <nav className="navbarItems">
               <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
               <div className="menu-icon">
                    
               </div>
               <ul>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}    
               </ul>
           </nav>
       )
   } 
}
export default Navigation;
