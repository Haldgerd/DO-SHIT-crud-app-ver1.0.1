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
        // error occuring when trying to access page directly through browser path.
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/DailyShit" element={<Daily />} />
                <Route path="/MeetingsShit" element={<Meetings />} />
                <Route path="/YearShit" element={<YearGoals />} />
                <Route path="/ShitLog" element={<HistoryLog />} />
                {/* <Route path="*" element={<Error />}/> */}
            </Routes>
        </Router>
    );
};

export default App;
