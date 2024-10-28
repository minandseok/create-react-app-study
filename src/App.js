import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/hello`}
          element={<h1>Hello</h1>}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
