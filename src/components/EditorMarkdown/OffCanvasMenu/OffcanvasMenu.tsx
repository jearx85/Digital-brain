// import React from 'react'
import { IoChatbox, IoChatboxOutline, IoCalendarOutline   } from "react-icons/io5";
import './OffcanvasMenu.css';

export default function OffcanvasMenu() {
  return (
    <div>
       <div className="offcanvas offcanvas-end"  id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="header-offcanvas-menu">

                        <button className="nav-offcanvas-item">
                            <IoChatboxOutline   />
                        </button>

                        <button className="nav-offcanvas-item">
                            <IoCalendarOutline   />
                        </button>

                        <button className="nav-offcanvas-item">
                            <IoChatbox  />
                        </button>

                        <button className="nav-offcanvas-item">
                            <IoChatbox  />
                        </button>

                        <button className="nav-offcanvas-item">
                            <IoChatbox  />
                        </button>

                        <button className="btn btn-close" type="button"  data-bs-dismiss="offcanvas" aria-label="Close"></button>  
                </div>
                <div className="offcanvas-body">
                    <div className="response-chat">
                        <p>hola...</p>
                    </div>
                    <div className="request-chat d-flex">
                        <textarea className="request-chat-area" />
                    </div>
                        <button >send</button>
                </div>
            </div>
    </div>
  )
}
