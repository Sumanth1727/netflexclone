import React, { useEffect, useState } from 'react';
import "./Nav.css"

function Nav() {
    const [show,setshow]= useState(false);

    useEffect(() => {
      window.addEventListener("scroll",()=>{
          if (window.scrollY>100){
            setshow(true);

          }
          else setshow(false);
      });
    
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);
    
  return (<div className={`nav ${show && "nav_black" } `}>
       {/*netflix logo  */}
       <img
       className='nav_logo' 
       src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
       alt="netflex-logo"
       />

  </div>
  );
}

export default Nav;

// rfce-shortcut to fill ele