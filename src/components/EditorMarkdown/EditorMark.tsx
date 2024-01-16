import React, { useState } from 'react';
import FileSystem from './FileSystem/FileSystem';
import './Editormarkdown.css';
import MainContentMd from './MainContentMd/MainContentMd';


export default function EditorMark() {
  const [isResizing, setResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(100);
  const [showFileSystem, setShowFileSystem] = useState(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) {
      const newWidth = Math.max(120, e.clientX);
      setInitialWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setResizing(false);
  };

  const handleMouseDown = () => {
    setResizing(true);
  };
  
  // setShowFileSystem(!showFileSystem);
  const sideViewClass = showFileSystem ? "side-view-mark col-2" : "side-view-mark col";
  const mainViewClass = showFileSystem ? "main-view-mark col-10" : "main-view-mark col-12";

  const sideViewStyle = { width: initialWidth + "px" };
  const mainViewStyle = { width: `calc(100% - ${initialWidth}px)` };

  return (
    <>
      <div className="row">
        <div className={sideViewClass} style={sideViewStyle} >
            < FileSystem />
          <div className="resize-handle" onMouseDown={handleMouseDown}></div>
        </div>
        <div className={mainViewClass} style={mainViewStyle}>
        <div className="container">
          < MainContentMd /> 
          </div>
        </div>
      </div>
      {isResizing && <div className="overlay" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}></div>}
    </>
  )
}