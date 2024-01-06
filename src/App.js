import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbordd from "./scenes/dashbord/Dashbordd";
import Exercises from "./scenes/exercises/Exercises";
import Goals from "./scenes/goals/Goals";
import Profile from "./scenes/profile/Profile";
import Workout_plan from "./scenes/workout_plan/Workout_plan";
import Sidebar from "./scenes/global/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashbordd />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/workout_plan" element={<Workout_plan />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
