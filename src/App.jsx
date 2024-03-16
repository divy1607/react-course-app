import Signup from "./Signup.jsx";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddCourse from "./AddCourse.jsx";

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
          <Route path = "/addcourse" element = {<AddCourse />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App
