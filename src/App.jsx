import { Route, Routes } from "react-router-dom";
import Index from "./components/Index.jsx";
import Menu from "./components/Menu.jsx";
import Problem1 from "./components/Problem-1.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Problem2All from "./components/Problem2All.jsx";
import Problem2US from "./components/Problem2US.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
          <Route path="/problem-2">
            <Route path="all" element={<Problem2All />} />
            <Route path="us" element={<Problem2US />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
