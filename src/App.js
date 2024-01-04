import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbordd from "./scenes/dashbord/Dashbordd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbordd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
