import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduce from './Introduce';
import Sidebar from './Sidebar';
import Experience from './Experience';
import HighlightProjects from './HighlightProject';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Sidebar />
        <div className="content">
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
