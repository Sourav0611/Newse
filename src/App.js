import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import "./App.css";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                updateProgress={updateProgress}
                key="general"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/newse"
            element={
              <News
                updateProgress={updateProgress}
                key="general"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                updateProgress={updateProgress}
                key="business"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                updateProgress={updateProgress}
                key="entertainment"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                updateProgress={updateProgress}
                key="general"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                updateProgress={updateProgress}
                key="health"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                updateProgress={updateProgress}
                key="science"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                updateProgress={updateProgress}
                key="technology"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
