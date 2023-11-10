import React, { useState } from 'react';
import useDarkSide from 'src/Hook/useDarkSide';
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkButton = ()=>{
    const [colorTheme, setTheme ] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false );

    const toggleDarkMode = checked =>{
        setTheme(colorTheme);
        setDarkSide(checked);
    }
    return (
     <div>
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} />
     </div>   
    )
}

export default DarkButton;
