import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './MainContentMd.css';


export default function MainContentMd() {
    const [value, setValue] = useState<string>("**Hello world!!!**");

    function showFileSystem(){
       console.log("click")
    }


  return (
    <div>
        <div className="navtabs row">
            <ul className="nav nav-tabs">
                <span className="arrow-file-system material-symbols-outlined" onClick={showFileSystem}>
                    chevron_left
                </span>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
        <div className="MD-editor row">
            <MDEditor
            value={value}
            onChange={(newValue: string | undefined) => setValue(newValue || '')}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    </div>
  )
}
