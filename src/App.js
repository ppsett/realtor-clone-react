import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import Offer from "./pages/Offers"
import ForgotPassword from "./pages/ForgotPassword"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/offers" element={<Offer/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
