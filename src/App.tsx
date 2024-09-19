import Header from "./components/Header/Header";
import "./App.css";
import Home from "./pages/Home";
import TabBar from "./components/Tabs/TabBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";

function App() {
  return (
    <div className="bg-neutral-bold3x">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="/website-builder+cms" element={<Project1 />} />
          <Route path="/am-kreations-revamp" element={<Project2 />} />
        </Routes>
        <TabBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
