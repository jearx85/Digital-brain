// import React from 'react';
import { VscNewFolder, VscNewFile  } from "react-icons/vsc";
import './FileSystem.css';

export default function FileSystem() {
  return (
    <div>
        <ul className="header-file-system">
            <button className="filesystem-nav-item">
                <VscNewFolder  className="filesystem-nav-icon" />
            
            </button>
            <button className="filesystem-nav-item">
                <VscNewFile className="filesystem-nav-icon" />
             
            </button>
        </ul>
          <hr />
          <p>Carpeta1</p>
          <p>Carpeta2</p>
          <p>Carpeta3</p>
          <p>Carpeta4</p>
    </div>
  )
}
