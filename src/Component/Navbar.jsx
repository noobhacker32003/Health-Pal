import React from 'react';
import { GiPill } from "react-icons/gi";

const Navbar = () => {
    return (
        <div>
<div className="navbar   px-5 text-white bg-cyan-900">
  <div className="navbar-start">
    
    <GiPill className='h-10 w-10'></GiPill>
    <a className="btn btn-ghost text-xs sm:text-xl">Health Pal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    {/* <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul> */}
  </div>
  <div className="navbar-end gap-4">
    <a className="underline sm:btn sm:btn-accent">Register</a>
    <a className="underline sm:btn sm:btn-accent">Login</a>
  </div>
</div> 
        </div>
    );
};

export default Navbar;