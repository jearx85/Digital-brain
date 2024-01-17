// import React from "react";
import { IoHomeOutline, IoPencilOutline, IoSettingsOutline, IoServerOutline } from "react-icons/io5";
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
      <button className="sidebar-item" onClick={handleClickHome}>
        <IoHomeOutline className="sidebar-icon" />
        Home
      </button>
      <button className="sidebar-item" onClick={handleClickEditor}>
        <IoPencilOutline  className="sidebar-icon" />
        Notes
      </button>
      <button className="sidebar-item">
        <IoServerOutline className="sidebar-icon" />
        Database
      </button>
      <button className="sidebar-item">
        <IoSettingsOutline className="sidebar-icon" />
        Settings
      </button>
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
