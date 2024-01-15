import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './Editormarkdown.css';


export default function EditorMark() {
  const [isResizing, setResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(200);
  const [showFileSystem, setShowFileSystem] = useState(true);
  const [value, setValue] = useState<string>("**Hello world!!!**");

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

  const handleShowFileSystem = () => {
    setShowFileSystem(!showFileSystem);
  };

  const sideViewClass = showFileSystem ? "side-view-mark col-2" : "side-view-mark col";
  const mainViewClass = showFileSystem ? "main-view-mark col-10" : "main-view-mark col-12";

  const sideViewStyle = { width: initialWidth + "px" };
  const mainViewStyle = { width: `calc(100% - ${initialWidth}px)` };

  return (
    <>
      <div className="row">
        <div className={sideViewClass} style={sideViewStyle}>
          <h2>File System</h2>
          <span className="material-symbols-outlined" onClick={handleShowFileSystem}>
            chevron_left
          </span>
          <hr />
          <p>Carpeta1</p>
          <p>Carpeta2</p>
          <p>Carpeta3</p>
          <p>Carpeta4</p>
          <div className="resize-handle" onMouseDown={handleMouseDown}></div>
        </div>
        <div className={mainViewClass} style={mainViewStyle}>
        <div className="container">
            <MDEditor
              value={value}
              onChange={(newValue: string | undefined) => setValue(newValue || '')}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
          </div>
        
        </div>
      </div>
      {isResizing && <div className="overlay" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}></div>}
    </>
  )
}