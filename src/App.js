import NewsItems from "./components/Newsitem";
import Navbar from "./components/Navbar";
import "./App.css";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// f0bde2c1b6ab48f09097e437a173db93

function App() {
  let apiKey = process.env.apiKey;
  let state = {
    progress: 0,
  };
  const updateProgress = (progress) => {
    this.setState({ progress: progress });
  };
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="General"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={6}
                apiKey={apiKey}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
