import { useState } from 'react';
import { IoChatboxOutline, IoCalendarOutline, IoChatbox } from "react-icons/io5";
import './OffcanvasMenu.css';
import Calendar from '../../Calendar/Calendar';
import AIChat from '../../AIChat/AIChat';

export default function OffcanvasMenu() {
  const [activeComponent, setActiveComponent] = useState(null);

  function handleComponentClick(componentName:any) {
    setActiveComponent(componentName);
  }

  function handleClose() {
    setActiveComponent(null);
  }

  return (
    <div>
      <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="header-offcanvas-menu">
          <button className="nav-offcanvas-item" onClick={() => handleComponentClick('ChatboxOutline')}>
            <IoChatboxOutline />
          </button>
          <button className="nav-offcanvas-item" id="calendar" onClick={() => handleComponentClick('CalendarOutline')}>
            <IoCalendarOutline />
          </button>
          <button className="nav-offcanvas-item" id="AIChat" onClick={() => handleComponentClick('Chatbox')}>
            <IoChatbox />
          </button>
       
          <button className="btn btn-close" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {activeComponent === 'CalendarOutline' && (
            <>
              <Calendar />
            </>
          )}
          {activeComponent === 'ChatboxOutline' && (
            <>
              <AIChat />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
