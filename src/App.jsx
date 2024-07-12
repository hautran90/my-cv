import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduce from './Introduce';
import Sidebar from './Sidebar';
import Experience from './Experience';
import HighlightProjects from './HighlightProject';
import ScrollToTop from './ScrollToTop';
import React, {useState} from 'react';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleHideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="hamburger" onClick={handleToggleSidebar}>
          &#9776; {/* Icon Hamburger */}
        </div>
        <Sidebar isVisible={isSidebarVisible} onHideSidebar={handleHideSidebar} />
        <div className={`content ${isSidebarVisible ? "dimmed" : ""}`} onClick={handleHideSidebar}>
          <Routes>
            <Route path="/my-cv/" element={<Introduce />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/highlightProjects" element={<HighlightProjects />} />
            {/* <Route path="/services" element={<Services />}>
              <Route path="service1" element={<Service1 />} />
              <Route path="service2" element={<Service2 />} />
              <Route path="service3" element={<Service3 />} />
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
