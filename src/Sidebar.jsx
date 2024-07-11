// // import React, { useState } from 'react';
// import { Link } from "react-router-dom";

// function Sidebar() {
//   //   const [dropdown, setDropdown] = useState(false);

//   //   const handleDropdown = () => {
//   //     setDropdown(!dropdown);
//   //   };

//   return (
//     <div className="sidebar">
//       <ul className="sidebar-list">
//         <li className={location.pathname === "/" ? "active" : ""}>
//           <Link to="/">Introduce</Link>
//         </li>
//         <li className={location.pathname === "/experience" ? "active" : ""}>
//           <Link to="/experience">Experience</Link>
//         </li>
//         <li className={location.pathname === "/highlightProjects" ? "active" : ""}>
//           <Link to="/highlightProjects">Highlight Project</Link>
//         </li>
//         {/* <li onClick={handleDropdown}>
//           Services
//           <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`}>
//             <li><Link to="/services/service1">Service 1</Link></li>
//             <li><Link to="/services/service2">Service 2</Link></li>
//             <li><Link to="/services/service3">Service 3</Link></li>
//           </ul>
//         </li> */}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <h2>My Profile</h2>
      <ul className="sidebar-list">
        <li className={activePath === "/my-cv/" ? "active" : ""}>
          <Link to="/my-cv/">Introduce</Link>
        </li>
        <li className={activePath === "/experience" ? "active" : ""}>
          <Link to="/experience">Experience</Link>
        </li>
        <li className={activePath === "/highlightProjects" ? "active" : ""}>
          <Link to="/highlightProjects">Highlight Project</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

