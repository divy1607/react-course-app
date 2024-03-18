import Signup from "./Signup.jsx";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddCourse from "./AddCourse.jsx";
import Courses from "./Courses.jsx";
import Course from "./Course.jsx";

function App() {
 

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"
    }}>
      
      <Router>
      <Appbar></Appbar>
        <Routes>
          <Route path = "/courses" element = {<Courses/>}></Route>
          <Route path = "/course/:courseID" element = {<Course/>}></Route>
          <Route path = "/addcourse" element = {<AddCourse />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
