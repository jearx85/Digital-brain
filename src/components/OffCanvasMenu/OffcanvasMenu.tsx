import { useState } from 'react';
import { IoChatboxOutline, IoCalendarOutline, IoChatbox } from "react-icons/io5";
import './OffcanvasMenu.css';
import MyCalendar from '../MyCalendar/myCalendar';
import AIChat from '../AIChat/AIChat';

export default function OffcanvasMenu() {
  const [activeComponent, setActiveComponent] = useState("ChatboxOutline");

  function handleComponentClick(componentName:any) {
    setActiveComponent(componentName);
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
              <MyCalendar />
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
