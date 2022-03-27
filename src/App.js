import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ------------------- COMPONENTS IMPORT -----------------
import LandingPage from './views/Landing/LandingPage';
import Daily from './views/Daily/Daily';
import Login from './views/Login/Login';
import HistoryLog from './views/HistoryLog/HistoryLog';
import Meetings from './views/Meetings/Meetings';
import YearGoals from './views/YearGoals/YearGoals';
import './assets/styles/global.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/DailyShit" element={<Daily />} />
                <Route exact path="/MeetingsShit" element={<Meetings />} />
                <Route exact path="/YearShit" element={<YearGoals />} />
                <Route exact path="/ShitLog" element={<HistoryLog />} />
                {/* <Route path="*" element={<Error />}/> */}
            </Routes>
        </Router>
    );
};

export default App;
