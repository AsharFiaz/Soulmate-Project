
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserInfoForm from "./components/UserInfoForm";
import Requirement from "./components/req";
import Profiles from "./components/Profiles";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import SuccessfulStories from "./components/SuccessfulStories";


function App() {
  return (
    <>
      <div>
        <Routes >
          <Route path="/" exact element={<Home/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/userinfo" element = {<UserInfoForm/>}/> 
          <Route path="/requirement" element = {<Requirement/>}/> 
          <Route path="/profiles" element = {<Profiles/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/services" element = {<Services/>}/>
          <Route path="/stories" element = {<SuccessfulStories/>}/>
        </Routes>
        
      </div>  
    </>
  );
}

export default App;
