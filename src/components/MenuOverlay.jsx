import React from 'react';
import NavLink from './NavLink';
import ThemeSwitcher from './themes/ThemeSwitcher';

const MenuOverlay = ({links,closeMenu}) =>{
    return(
        <ul className="flex flex-col py-4 items-center">
            {
               links.map((link,index) =>(
                <li key={index} onClick={closeMenu}>
                    <NavLink href={link.path} title={link.title} />
                </li>        
            ))
                
            }
            <li>  <ThemeSwitcher /> </li>   
        </ul>
    )};


export default MenuOverlay;