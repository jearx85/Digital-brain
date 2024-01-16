// import React from 'react';
import { VscNewFolder, VscNewFile  } from "react-icons/vsc";
import './FileSystem.css';

export default function FileSystem() {
  return (
    <div>
        <ul className="header-file-system">
            <div className="nav-item">
                <VscNewFolder  className="nav-icon" />
            
            </div>
            <div className="nav-item">
                <VscNewFile className="nav-icon" />
             
            </div>
        </ul>
          <hr />
          <p>Carpeta1</p>
          <p>Carpeta2</p>
          <p>Carpeta3</p>
          <p>Carpeta4</p>
    </div>
  )
}
