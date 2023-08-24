import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationPage from './Pages/RegistrationPage';

//import "./App.css";
import Otp from './Pages/Otp';
import ResetPassPage from './Pages/ResetPassPage';
import DriverUi from './Pages/DriverUi';
import StudentUi from './Pages/StudentUi';
import QnAUi from './Pages/QnAUi';
import AskmeUI from './Pages/AskmeUI';
import AllQueries from './Pages/AllQueries';
import TutorMain from './components/TutorView/TutorMain';
import AdminMain from './components/AdminView.js/AdminMain';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<RegistrationPage />} />
          <Route exact path="/otp" element={<Otp />} />
          <Route
            exact
            path="/resetyourpass/:id/:token"
            element={<ResetPassPage />}
          />
          <Route exact path="/driverprofile" element={<DriverUi />} />
          <Route exact path="/studentprofile" element={<StudentUi />} />
          <Route exact path="/qna" element={<QnAUi />} />
          <Route exact path="/qna/askme" element={<AskmeUI />} />
          <Route exact path="/qna/askme/myqueries" element={<AllQueries />} />
          <Route exact path="/responseprofile" element={<TutorMain />} />
          <Route exact path="/adminprofile" element={<AdminMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

