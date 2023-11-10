"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import ThemeSwitcher from "./themes/ThemeSwitcher";

const navLinks = [
    {
        title:"A propos",
        path:"#About"
    },
    {
        title:"Parcours",
        path:"#parcours"
    },
    {
        title:"Services",
        path:"#services"
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact",
    }
];

const NavBar = () =>{
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#About');

    const activeLinkStyle = "text-textLightActive dark:text-textDarkActive";
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-bgLightPrimary dark:bg-bgDarkPrimary bg-opacity-100">
            <div className="flex flex-wrap items-center  justify-between mx-auto px-4 py-4">
                <Link href={"/"} className="text-2lg md:text-5xl text-white font-semibold">LOGO</Link>
                <div className="mobile-menu block md:hidden">
                   {
                      !navbarOpen ? 
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white horver:border-white">
                            <Bars3Icon className="h-5 w-5"/>     
                        </button>
                        : 
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white horver:border-white">
                            <XMarkIcon className="h-5 w-5"/>     
                        </button>
                       
                   } 
                </div>
                <div className="menu  hidden  md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:space-x-8 mt-0">
                        {
                            navLinks.map((link,index) =>(
                                <li key={index} onClick={()=>{setActiveLink(link.path)}}>
                                    <NavLink href={link.path} title={link.title} style={activeLink == link.path ? activeLinkStyle : ""} />
                                </li>        
                            ))
                           
                        }
                        <li>  <ThemeSwitcher /> </li>
                    </ul>
                  
                </div>
            </div>
            { navbarOpen ? <MenuOverlay links={navLinks} closeMenu={function(){setNavbarOpen(false)}}/> : null}
        </nav>
    );
};

export default NavBar;


