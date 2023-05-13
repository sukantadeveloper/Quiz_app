import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import Result from './Result';



function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />


            </Routes>
        </div>
    );
}

export default AllRoutes;