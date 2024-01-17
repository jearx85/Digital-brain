import { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';
import MarkdownEditor from '@uiw/react-markdown-editor';
import Markdown from 'marked-react';
// import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './MainContentMd.css';

const mdStr = "**Hello world!!!**";

export default function MainContentMd() {
    const [markdown, setMarkdown] = useState(mdStr);

    function showFileSystem(){
       console.log("click")
    }
    const markdownText = 'This ~is not~ strikethrough, but ~~this is~~!'


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
            value={markdown}
            onChange={(newValue: string | undefined) => setMarkdown(newValue || '')}
            />
            <MDEditor.Markdown source={markdown} style={{ whiteSpace: 'pre-wrap' }} />
            
             {/* <MarkdownEditor
                value={markdown}
                height="200px"
                onChange={(value, viewUpdate) => setMarkdown(value)}
            /> */}

            {/* <Markdown>{markdownText}</Markdown> */}
        </div>
    </div>
  )
}
