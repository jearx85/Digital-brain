// import React from "react";
import { FaHome, FaCode, FaDatabase, FaCog, FaFileCode } from "react-icons/fa";
import "./SideBar.css";
import { useNavigate } from 'react-router-dom';

const RightBar = () => {
  const navigate = useNavigate();

  function handleClickHome(){
    navigate("/Home")
  }
  function handleClickEditor(){
    navigate("/Editor")
  }

  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={handleClickHome}>
        <FaHome className="sidebar-icon" />
        Home
      </div>
      <div className="sidebar-item" onClick={handleClickEditor}>
        <FaCode className="sidebar-icon" />
        Editor
      </div>
      <div className="sidebar-item">
        <FaDatabase className="sidebar-icon" />
        Database
      </div>
      <div className="sidebar-item">
        <FaCog className="sidebar-icon" />
        Settings
      </div>
      <div className="sidebar-item">
        <FaFileCode className="sidebar-icon" />
        Files
      </div>
    </div>
  ); 
}


//   return (
//     <div>
//       <div className="sidebar">
//         {iconsList.map((Icon, index) => (
//           <>
//             <div id={index} className="sidebar-item">
//               {/* <Icon className="sidebar-icon" /> */}
//               <Tooltips Icon={Icon} clase="sidebar-icon" />
//             </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

export default RightBar;
