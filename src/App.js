import NewsItems  from './components/Newsitem';
import Navbar  from './components/Navbar';
import './App.css';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// f0bde2c1b6ab48f09097e437a173db93

function App() {
  let apiKey=process.env.apiKey;
  return (
    <div>
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={6} apiKey={apiKey} country="in" category="General"/>} />
          <Route exact path="/business" element={<News key="business" pageSize={6} apiKey={apiKey} country="in" category="Business"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} apiKey={apiKey} country="in" category="Entertainment"/>} />
          <Route exact path="/general" element={<News key="general" pageSize={6} apiKey={apiKey} country="in" category="General"/>} />
          <Route exact path="/health" element={<News key="health" pageSize={6} apiKey={apiKey} country="in" category="Health"/>} />
          <Route exact path="/science" element={<News key="science" pageSize={6} apiKey={apiKey} country="in" category="Science"/>} />
          <Route exact path="/technology" element={<News key="technology" pageSize={6} apiKey={apiKey} country="in" category="Technology"/>} />
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
